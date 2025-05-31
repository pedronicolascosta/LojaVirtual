from flask import Blueprint, request, jsonify
from bson.objectid import ObjectId
from database.mongo import collection_clientes
from utils.funcoes import converte_id

clientes_bp = Blueprint('clientes', __name__)

@clientes_bp.route('/clientes/create', methods=['POST'])
def clientes_create():
    dados = request.get_json()  
    resultado = collection_clientes.insert_one(dados) 
    return jsonify({
        "mensagem": "Cliente criado com sucesso",
        "id": str(resultado.inserted_id)
    }), 201

@clientes_bp.route('/clientes', methods=['GET'])
def clientes_read_all():
    resultado = list(collection_clientes.find())  
    for documento in resultado:
        converte_id(documento)
    return jsonify(resultado), 200

@clientes_bp.route('/clientes/<id>', methods=['GET'])
def clientes_read_one(id):
    resultado = collection_clientes.find_one({"_id": ObjectId(id)})
    if resultado:
        converte_id(resultado)
        return jsonify(resultado), 200
    else:
        return jsonify({"erro": "Cliente não encontrado"}), 404
    
@clientes_bp.route('/clientes/update', methods=['POST'])
def clientes_update():
    dados = request.get_json()
    id = dados.get('id')
    del dados['id']
    atualizacao = {"$set": dados}
    resultado = collection_clientes.update_one({"_id": ObjectId(id)}, atualizacao)
    if resultado.matched_count == 0:
        return jsonify({"erro": "Cliente não encontrado"}), 404
    elif resultado.modified_count == 0:
        return jsonify({"mensagem": "Nenhuma alteração realizada"}), 200
    else:
        return jsonify({"mensagem": "Cliente atualizado com sucesso!"}), 200
    
@clientes_bp.route('/clientes/delete', methods=['POST'])
def clientes_delete():
    dados = request.get_json()
    id = dados.get('id')
    resultado = collection_clientes.delete_one({"_id": ObjectId(id)})
    if resultado.deleted_count > 0:
        return jsonify({"mensagem": "Cliente excluído com sucesso!"}), 200
    else:
        return jsonify({"erro": "Cliente não encontrado"}), 404
