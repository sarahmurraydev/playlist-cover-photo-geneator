import os
import json
from dotenv import load_dotenv
from flask import Flask, jsonify, redirect, request, session
from flask_cors import CORS
from image import make_image, get_spotify_images
from auth import get_auth_url, get_token
from spotify import get_me, get_playlist_items, get_album_cover_photos, put_playlist_photo, get_public_playlists

# constants: 
api_base_url: "https://localhost:5000/"
ui_url = "http://localhost:3000"

path = os.path.dirname(os.path.abspath(__file__))
project_folder = os.path.expanduser(path)
load_dotenv(os.path.join(project_folder, '.env'))

app = Flask( __name__ )
cors = CORS(app)

@app.route('/')
def index():
    # when the user hits the index endpoint, 
    # redirect them to spotfiy to approve our app
    # redirect url is unique to this app
    app_auth_url = get_auth_url()
    return redirect(app_auth_url)

@app.route('/callback')
def callback():
    # use the auth code returned from app_auth_url to get a token
    response = get_token(request.args.get('code'))
    # user is authorized if token attribute exists, and is not empty 
    if response['authorized']:
        return redirect("{}/authorized/{}".format(ui_url, response['token_data']))
    else: 
        return redirect("{}/auth-error".format(ui_url, response['error']))

@app.route('/me')
def get_user_data():
    auth_header = request.headers.get('Authorization')
    data = get_me(auth_header)
    return data

@app.route('/playlists/')
def get_user_public_playlists():
    limit = request.args.get('limit')
    offset = request.args.get('offset')
    data = get_public_playlists(limit, offset, TOKEN_DATA[1])
    return data

@app.route('/playlist-items/<id>')
# id: 4a0C47OlHU0KKNxySw8NU7
def get_item_photos(id):
    data = get_playlist_items(id, TOKEN_DATA[1])
    return data

@app.route('/playlist/track-photos/<id>')
def get_items(id):
    data = get_album_cover_photos(id, TOKEN_DATA[1])
    return data
  
@app.route('/home')
def home():
    return "Hello World! Welcome to Sarah's Playlist Photo Generator App"

@app.route('/image/<id>')
def image(id):
    images = get_spotify_images(id, TOKEN_DATA[1])
    name = make_image(id, images)
    result = put_playlist_photo(id, TOKEN_DATA[1], name)
    return result

if __name__ == '__main__': 
    app.run( debug=True )