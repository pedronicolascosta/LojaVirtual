def converte_id(doc):
    doc['_id'] = str(doc['_id'])
    return doc