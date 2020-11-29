import base64, requests, json, os

GET_ME = "https://api.spotify.com/v1/me"

GET_PLAYLIST_ITEMS = "https://api.spotify.com/v1/playlists/{}/tracks"

PUT_PLAYLIST_IMAGE = "https://api.spotify.com/v1/playlists/{}/images"

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
def get_album_cover_photos(id, headers):
    image_urls = []
    data = get_playlist_items(id, headers)
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

def put_playlist_photo(id, headers, image_name): 
     uri = PUT_PLAYLIST_IMAGE.format(id)
     ## add content type to header:
     headers['Content-Type'] = 'image/jpeg'
     with open(image_name, 'rb') as image_file:
         image_b64 = base64.b64encode(image_file.read())
     response = requests.put(uri, data = image_b64, headers=headers)
     return response.text
