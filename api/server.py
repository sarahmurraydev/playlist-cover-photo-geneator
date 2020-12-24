import os
from dotenv import load_dotenv
from flask import Flask, jsonify, redirect, request
from image import make_image, get_spotify_images
from auth import get_auth_url, get_token
from spotify import get_me, get_playlist_items, get_album_cover_photos, put_playlist_photo, get_public_playlists


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
    data = get_me(TOKEN_DATA[1])
    return "HERE's my data: {}".format(data)

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