from flask import Blueprint, request

from helpers.identity_register_helper import get_identity_type


identity = Blueprint("identity", __name__)

@identity.route("/register", methods=['POST'])
def create_identity():
    id_type = get_identity_type(request.url_rule.rule)
    
    # put the request here for the register
    return '{ "created": true }'