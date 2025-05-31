from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

uri = os.getenv('MONGO_URI')
client = MongoClient(uri)
db = client["loja_virtual"]

collection_clientes = db["clientes"]
collection_produtos = db["produtos"]
collection_pedidos = db["pedidos"]