import base64, requests, json

GET_ME_URL = "https://api.spotify.com/v1/me"

def get_me(headers):
    user_data = requests.get(GET_ME_URL, headers=headers)
    return json.loads(user_data.text)

# get a playlist items from playlist ID 
def get_playlist_items(id):
    items = []
    return items

# get album covers for the items from the playlist
def get_album_cover_photos(tracks):
    photos = []
    return photos


# def put_playlist_cover_photo(id):
    