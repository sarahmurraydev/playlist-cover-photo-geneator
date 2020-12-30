import base64, requests, json, os, sys

GET_ME = "https://api.spotify.com/v1/me"

GET_PUBLIC_PLAYLISTS = "https://api.spotify.com/v1/me/playlists?limit={}&offset={}"

GET_PLAYLIST_ITEMS = "https://api.spotify.com/v1/playlists/{}/tracks"

PUT_PLAYLIST_IMAGE = "https://api.spotify.com/v1/playlists/{}/images"

def make_auth_header(string): 
    return { "Authorization": "{}".format(string) }

def get_me(auth):
    auth_header = make_auth_header(auth)
    user_data = requests.get(GET_ME, headers=auth_header)
    return json.loads(user_data.text)

def get_public_playlists(limit, offset, auth): 
    auth_header = make_auth_header(auth)
    uri = GET_PUBLIC_PLAYLISTS.format(limit, offset)
    playlists = requests.get(uri, headers=auth_header)
    return json.loads(playlists.text)

# get a playlist items from playlist ID 
def get_playlist_items(playlist_id, auth):
    auth_header = make_auth_header(auth)
    uri = GET_PLAYLIST_ITEMS.format(playlist_id)
    playlist_items = requests.get(uri, headers=auth_header)
    return json.loads(playlist_items.text)

# get album covers for the items from the playlist
def get_album_cover_photos(album_id, auth):
    image_urls = []
    data = get_playlist_items(album_id, auth=auth)
    tracks = data["items"]
    for i in range(len(tracks)):
        # get the 300 x 300 image url
        image_url = tracks[i]["track"]["album"]["images"][2]["url"]
        # check if this image is in our array already 
        if image_url in image_urls: 
            print("{} is already in our list".format(image_url))
        else: 
            image_urls.append(image_url)

    # once done, make a dictionary to return
    response_dict = { 
        'urls': image_urls,
        'length': len(image_urls)
    }
    return response_dict

def put_playlist_photo(playlist_id, auth, image_as_bytes): 
    headers = make_auth_header(auth)
    uri = PUT_PLAYLIST_IMAGE.format(playlist_id)
    # add content type to header:
    headers['Content-Type'] = 'image/jpeg'
    image_b64 = base64.b64encode(image_as_bytes)
    response = requests.put(uri, data = image_b64, headers=headers)
    return response.text