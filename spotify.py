import base64, requests, json, os

GET_ME = "https://api.spotify.com/v1/me"

GET_PLAYLIST_ITEMS = "https://api.spotify.com/v1/playlists/{}/tracks"

def get_me(headers):
    user_data = requests.get(GET_ME_URL, headers=headers)
    return json.loads(user_data.text)

# get a playlist items from playlist ID 
# rainbow list: 73ZFTt2qSxfOyiyZTVNshC
# today's top hits: 37i9dQZF1DXcBWIGoYBM5M
def get_playlist_items(id, headers):
    uri = GET_PLAYLIST_ITEMS.format(id)
    playlist_items = requests.get(uri, headers=headers)
    return json.loads(playlist_items.text)

# get album covers for the items from the playlist
def get_album_cover_photos(tracks):
    photos = []
    return photos


# def put_playlist_cover_photo(id):
    