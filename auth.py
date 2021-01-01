import base64, json, requests, os
from flask import session

SPOTIFY_URL_AUTH = 'https://accounts.spotify.com/authorize/?'
SPOTIFY_URL_TOKEN = 'https://accounts.spotify.com/api/token/'
RESPONSE_TYPE = 'code'   
HEADER = 'application/x-www-form-urlencoded'
REFRESH_TOKEN = ''

CLIENT_ID = os.getenv("CLIENT_ID")
CLIENT_SECRET = os.getenv("CLIENT_SECRET")
CALLBACK_URL = "http://localhost:5000/callback"
SCOPES="ugc-image-upload playlist-modify-public"

# authorization code for spotify app
def get_auth_url():
    base_uri = "{}client_id={}&response_type=code&redirect_uri={}&scope={}"
    return base_uri.format(SPOTIFY_URL_AUTH, CLIENT_ID, CALLBACK_URL, SCOPES)


def get_token(code):
    body = {
        "grant_type": 'authorization_code',
        "code" : code,
        "redirect_uri": CALLBACK_URL,
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET
    }
     
    auth_str = f"{CLIENT_ID}:{CLIENT_SECRET}"
    encoded = base64.urlsafe_b64encode(auth_str.encode()).decode()

    headers = {"Content-Type" : HEADER, "Authorization" : "Basic {}".format(encoded)}

    response = requests.post(SPOTIFY_URL_TOKEN, params=body, headers=headers)
    if response.status_code == 200:
        token = handleToken(json.loads(response.text))
        return {
            'authorized': True,
            'token_data': token
        }
    else: 
        return {
            'authorized': False,
            'error': 'There was an error getting the token'
        }
    
def handleToken(response):
    REFRESH_TOKEN = response["refresh_token"]
    TOKEN_DATA = { 
        "token": response["access_token"], 
        "Authorization": "Bearer {}".format(response["access_token"]),
        "scope": response["scope"], 
        "expires_in": response["expires_in"]
    }
    return TOKEN_DATA