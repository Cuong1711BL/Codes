import config
from pymongo import MongoClient

db_connection = MongoClient(config.mongodb_uri)

db = db_connection['BackendVangMai']
colection = db['user']

def create(data):
    data = dict(data)
    res = colection.insert_one(data)
    return res.inserted_id

def getOne(condition):
    res = colection.find_one(condition)
    if res is None:
        return None
    res["_id"] = str(res["_id"])
    return res



