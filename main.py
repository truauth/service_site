import os

from flask import Flask, send_from_directory
from blueprints.identity_blueprint import identity

from settings import SETTINGS

app = Flask(__name__)

app.register_blueprint(identity, url_prefix="/api/client")      

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(SETTINGS['react_static_folder'] + path):
        return send_from_directory(SETTINGS['react_static_folder'], path)
    else:
        return send_from_directory(SETTINGS['react_static_folder'], 'index.html')

if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)
