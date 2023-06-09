from fastapi import FastAPI, File, UploadFile, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
import models

from security import validate_token, generate_token
import database

# SECURITY_ALGORITHM = 'HS256'
# SECRET_KEY = '123456'

app = FastAPI(
    title='FastAPI JWT', openapi_url='/openapi.json', docs_url='/docs',
    description='fastapi jwt'
)
# origins = [
#     "http://localhost",
#     "http://localhost:3000",
# ]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL = tf.keras.models.load_model("../saved_models/0.102")

CLASS_NAMES = ["Bệnh cháy lá", "Lá khỏe mạnh", "Bệnh rỉ sét", "Bệnh Vàng lá"]

# @app.get("/ping")
# async def ping():
#     return "Hello, I am alive"

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    image = np.resize(image, (256,256,3))
    return image

# @app.post("/predict", dependencies=[Depends(validate_token)])
@app.post("/predict")
async def predict(
        file: UploadFile = File(...),
        # current_user: str = Depends(validate_token)
):
    try:
        image = read_file_as_image(await file.read())
        img_batch = np.expand_dims(image, 0)

        predictions = MODEL.predict(img_batch)

        predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
        confidence = np.max(predictions[0])
        return {
            'class': predicted_class,
            'confidence': float(confidence),
            'id': int(np.argmax(predictions[0]))
        }
    except ValueError as err:
        raise HTTPException(status_code=500, detail=err)

@app.post('/signup')
def signup(user: models.User):
    try:
        if any(field is None for field in [user.email, user.username, user.password]):
            raise HTTPException(status_code=400, detail="Information don't enough!")
        userDb = database.getOne({"email": user.email})
        if userDb is None:
            id = database.create(user)
            if id is None:
                raise HTTPException(status_code=400, detail="Sign Up don't succeed!")
            user = database.getOne({"_id": id})
            token = generate_token(user['email'])
            return {
                "user": user,
                "token": token
            }
        raise HTTPException(status_code=400, detail="User have exist")
    except ValueError as err:
        raise HTTPException(status_code=500, detail=err)



def verify(user: models.User, userDb: models.User):
    if userDb is None:
        return ["User not found!", False]
    if user.email != userDb.get('email'):
        return ["Wrong email!", False]
    elif user.password != userDb.get('password'):
        return ["Wrong password!", False]
    return ["", True]

@app.post('/signin')
def signin(user: models.User):
    try:
        userDb = database.getOne({ "email" : user.email})
        check = verify(user, userDb)
        if check[1] == True:
            token = generate_token(user.email)
            return {
                "user": userDb,
                "token": token
            }
        raise HTTPException(status_code=400, detail=check[0])
    except ValueError as err:
        raise HTTPException(status_code=500, detail=err)

# Our root endpoint
@app.get("/")
def index():
    return {"message": "Welcome"}

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)
