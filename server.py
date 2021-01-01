import os
from dotenv import load_dotenv
from flask import Flask, redirect, request
from flask_cors import CORS
from image import make_image, get_spotify_images
from auth import get_auth_url, get_token
from spotify import get_me, get_playlist_items, get_album_cover_photos, put_playlist_photo, get_public_playlists, get_playlist



project_folder = os.path.expanduser('~/mysite')
load_dotenv(os.path.join(project_folder, '.env'))

app = Flask( __name__ )
cors = CORS(app)

# constants:
ui_url = "http://localhost:3000"
CLIENT_ID = os.getenv("CLIENT_ID")
CLIENT_SECRET = os.getenv("CLIENT_SECRET")

@app.route('/')
def index():
    # when the user hits the index endpoint,
    # redirect them to spotfiy to approve our app
    # redirect url is unique to this app
    app_auth_url = get_auth_url(CLIENT_ID)
    return redirect(app_auth_url)

@app.route('/callback')
def callback():
    # use the auth code returned from app_auth_url to get a token
    response = get_token(request.args.get('code'), CLIENT_ID, CLIENT_SECRET)
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

@app.route('/playlist/<id>')
def get_playlists_of_id(id):
    auth_header = request.headers.get('Authorization')
    data = get_playlist(id, auth_header)
    return data

@app.route('/playlists')
def get_user_public_playlists():
    auth_header = request.headers.get('Authorization')
    limit = request.args.get('limit')
    offset = request.args.get('offset')
    data = get_public_playlists(limit, offset, auth_header)
    return data

@app.route('/playlist-items/<id>')
def get_item_photos(id):
    auth_header = request.headers.get('Authorization')
    data = get_playlist_items(id, auth_header)
    return data

@app.route('/playlist/track-photos/<id>')
def get_items(id):
    auth_header = request.headers.get('Authorization')
    data = get_album_cover_photos(id, auth_header)
    return data
  
@app.route('/home')
def home():
    CLIENT_ID = os.getenv("CLIENT_ID")
    return "Hello World! Welcome to Sarah's Playlist Photo Generator App. Here's the client ID: {}".format(CLIENT_ID)

@app.route('/image/<id>')
def image(id):
    auth_header = request.headers.get('Authorization')
    images = get_spotify_images(id, auth_header)
    image = make_image(id, images)
    result = put_playlist_photo(id, auth_header, image)
    return result

if __name__ == '__main__': 
    app.run( debug=True )