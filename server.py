import os
from dotenv import load_dotenv
from flask import Flask, jsonify, redirect, request
from image import make_image
from auth import get_auth_url, get_token
from spotify import get_me


path = os.path.dirname(os.path.abspath(__file__))
project_folder = os.path.expanduser(path)
load_dotenv(os.path.join(project_folder, '.env'))

TOKEN_DATA = []

app = Flask( __name__ )

@app.route('/')
def index():
    # when the user hits the index endpoint, 
    # redirect them to spotfiy to approve our app
    # redirect url is unique to this app
    app_auth_url = get_auth_url()
    print("redirecting you to:")
    print(app_auth_url)
    return redirect(app_auth_url)

@app.route('/callback')
def callback():
    # use the auth code returned from app_auth_url to get a token
    global TOKEN_DATA
    TOKEN_DATA = get_token(request.args.get('code'))
    # got token
    return "We\'ve got the token!"

@app.route('/me')
def get_user_data():
    print("token header:")
    print(TOKEN_DATA[1])
    data = get_me(TOKEN_DATA[1])
    print("spotify data:")
    print(data)
    return "HERE's my data: {}".format(data)

@app.route('/home')
def home():
    return "Hello World! Welcome to Sarah's Playlist Photo Generator App"

@app.route('/image')
def image():
    name = make_image()
    result = "Successfully made the image called: {}!"
    return result.format(name)

if __name__ == '__main__': 
    app.run( debug=True )