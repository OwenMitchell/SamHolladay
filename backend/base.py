from flask import Flask
from flask_cors  import CORS, cross_origin

api = Flask(__name__)
cors = CORS(api)
api.config['CORS_HEADERS'] = 'Content-Type'

@api.route("/profile")
@cross_origin()
def my_profile():
    response_body = response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    } 

    return response_body