from constants.identity_type import IdentityType

def get_identity_type(rule):
    if "client" in rule:
        return IdentityType.CLIENT
    elif "user" in rule:
        return IdentityType.USER
    else:
        raise Exception('Invalid identity type')