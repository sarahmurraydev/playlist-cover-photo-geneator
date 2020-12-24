import math 
import requests
from PIL import Image
from io import BytesIO
from spotify import get_album_cover_photos

def get_images(n):
    # get the images (there are n of them)
    images = []
    base_path = "./test-images/image{}.jpeg"
    for i in range(n):
        current_image_path = base_path.format((i+1))
        print("Getting the image at" + current_image_path)
        image = Image.open(current_image_path)
        images.append(image)

    return images

def get_spotify_images(id, headers): 
    data = get_album_cover_photos(id, headers)
    image_urls = data["urls"]

    images = []
    for i in range(len(image_urls)):
        current_image_url = image_urls[i]
        print("Getting the image at " + current_image_url)
        response = requests.get(current_image_url)
        image = Image.open(BytesIO(response.content))
        images.append(image)

    return images

def make_image(id, images):
    ## set the initial variables to be based on image1
    sm_width = images[0].size[0]
    sm_height = images[0].size[1]

    for image in images:
        # loop through the images
        # check if the width of the current image is less than the current value
        if image.size[0] < sm_width: 
            ## if it is, set this to be the smallest width
            sm_width = image.size[0]
        # do the same with height
        if image.size[1] < sm_height: 
            sm_height = image.size[1]

    resized_images = []

    ## reize all the images to be the smallest dimensions:
    for im in images:
        resized_im = im.resize((sm_width, sm_height))
        # add the cropped images to the array
        resized_images.append(resized_im)

    ## make the new image that is a matrix of the images array
    ## the matrix will be an n by n matrix where n = (sq rt of length of photos array)
    # take the floor so the matrix is always n x n ; i.e. if I have 6 photos, only show 4 until I have 9 photos
    n = math.floor(math.sqrt(len(resized_images))) 
    new_image = Image.new('RGB', (n*sm_width, n*sm_height), 0)
    ## loop through images and add them 

    image_index = 0
    
    for column in range(n):
        for row in range(n):
            # current image, adding to the collage: 
            image_adding = resized_images[image_index]

            x_dim = sm_width * row
            y_dim = sm_height * column 

            new_image.paste(image_adding, (x_dim, y_dim))
            image_index+=1 # increament image index for next photo

    image_name = "./cover-photos/playlist-{}.jpeg".format(id)
    new_image.save(image_name)
    new_image.show()

    return image_name
