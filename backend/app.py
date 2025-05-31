import sys
sys.dont_write_bytecode = True
from flask import Flask
from flask_cors import CORS  
from routes.clientes import clientes_bp
from routes.produtos import produtos_bp
from routes.pedidos import pedidos_bp
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

CORS(app)

app.register_blueprint(clientes_bp, url_prefix='/api')
app.register_blueprint(produtos_bp, url_prefix='/api')
app.register_blueprint(pedidos_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)