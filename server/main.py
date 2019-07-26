from flask import Flask
from blueprints.identity_blueprint import identity

app = Flask(__name__)

app.register_blueprint(identity, url_prefix="/client")      

if __name__ == '__main__':
    app.run()