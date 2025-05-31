from flask import Blueprint, request, jsonify
from bson.objectid import ObjectId
from database.mongo import collection_produtos
from utils.funcoes import converte_id

produtos_bp = Blueprint('produtos', __name__)

@produtos_bp.route('/produtos/create', methods=['POST'])
def produtos_create():
    dados = request.get_json()  
    resultado = collection_produtos.insert_one(dados) 
    return jsonify({
        "mensagem": "Produto criado com sucesso",
        "id": str(resultado.inserted_id)
    }), 201

@produtos_bp.route('/produtos', methods=['GET'])
def produtos_read_all():
    resultado = list(collection_produtos.find())  
    for documento in resultado:
        converte_id(documento)
    return jsonify(resultado), 200

@produtos_bp.route('/produtos/<id>', methods=['GET'])
def produtos_read_one(id):
    resultado = collection_produtos.find_one({"_id": ObjectId(id)})
    if resultado:
        converte_id(resultado)
        return jsonify(resultado), 200
    else:
        return jsonify({"erro": "Produto não encontrado"}), 404
    
@produtos_bp.route('/produtos/update', methods=['POST'])
def produtos_update():
    dados = request.get_json()
    id = dados.get('id')
    del dados['id']
    atualizacao = {"$set": dados}
    resultado = collection_produtos.update_one({"_id": ObjectId(id)}, atualizacao)
    if resultado.matched_count == 0:
        return jsonify({"erro": "Produto não encontrado"}), 404
    elif resultado.modified_count == 0:
        return jsonify({"mensagem": "Nenhuma alteração realizada"}), 200
    else:
        return jsonify({"mensagem": "Produto atualizado com sucesso!"}), 200
    
@produtos_bp.route('/produtos/delete', methods=['POST'])
def produtos_delete():
    dados = request.get_json()
    id = dados.get('id')
    resultado = collection_produtos.delete_one({"_id": ObjectId(id)})
    if resultado.deleted_count > 0:
        return jsonify({"mensagem": "Produto excluído com sucesso!"}), 200
    else:
        return jsonify({"erro": "Produto não encontrado"}), 404
