from flask import Blueprint

auth = Blueprint("auth", __name__)

@auth.route("/")
def main():
    return "working"