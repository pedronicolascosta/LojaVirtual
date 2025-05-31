from flask import Blueprint, request, jsonify
from bson.objectid import ObjectId
from database.mongo import collection_pedidos
from utils.funcoes import converte_id

pedidos_bp = Blueprint('pedidos', __name__)

@pedidos_bp.route('/pedidos/create', methods=['POST'])
def pedidos_create():
    dados = request.get_json()  
    resultado = collection_pedidos.insert_one(dados) 
    return jsonify({
        "mensagem": "Pedido criado com sucesso",
        "id": str(resultado.inserted_id)
    }), 201

@pedidos_bp.route('/pedidos', methods=['GET'])
def pedidos_read_all():
    resultado = list(collection_pedidos.find())  
    for documento in resultado:
        converte_id(documento)
    return jsonify(resultado), 200

@pedidos_bp.route('/pedidos/<id>', methods=['GET'])
def pedidos_read_one(id):
    resultado = collection_pedidos.find_one({"_id": ObjectId(id)})
    if resultado:
        converte_id(resultado)
        return jsonify(resultado), 200
    else:
        return jsonify({"erro": "Pedido não encontrado"}), 404
    
@pedidos_bp.route('/pedidos/update', methods=['POST'])
def pedidos_update():
    dados = request.get_json()
    id = dados.get('id')
    del dados['id']
    atualizacao = {"$set": dados}
    resultado = collection_pedidos.update_one({"_id": ObjectId(id)}, atualizacao)
    if resultado.matched_count == 0:
        return jsonify({"erro": "Pedido não encontrado"}), 404
    elif resultado.modified_count == 0:
        return jsonify({"mensagem": "Nenhuma alteração realizada"}), 200
    else:
        return jsonify({"mensagem": "Pedido atualizado com sucesso!"}), 200
    
@pedidos_bp.route('/pedidos/delete', methods=['POST'])
def pedidos_delete():
    dados = request.get_json()
    id = dados.get('id')
    resultado = collection_pedidos.delete_one({"_id": ObjectId(id)})
    if resultado.deleted_count > 0:
        return jsonify({"mensagem": "Pedido excluído com sucesso!"}), 200
    else:
        return jsonify({"erro": "Pedido não encontrado"}), 404
