from PIL import Image
import math 

def make_image():
    # get the images 
    images = []
    base_path = "./test-images/image{}.jpeg"
    for i in range(6):
        current_image_path = base_path.format((i+1))
        print("Getting the image at" + current_image_path)
        image = Image.open(current_image_path)
        images.append(image)

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
    newImage = Image.new('RGB', (n*sm_width, n*sm_height), 0)
    ## loop through images and add them 

    # ADD PHOTOS LIKE THIS:
    # 1) Add the initial photo at (0, 0)
    # 2) add one photo next to it 
    # 3) add one photo below it 
    # set the default matrix to now be (w, h) and repeat steps 1-3
    # when the last item in row and column N have been filled out, add the last image at (n*w, n*h)

    newImage.paste(resized_images[0], (0,0)) 
    newImage.paste(resized_images[1], (sm_width,0))
    newImage.paste(resized_images[2], (0,sm_height))
    newImage.paste(resized_images[3], (sm_width, sm_height))
    ## we are on the thrid column / row
    # newImage.paste(resized_images[4], (2*sm_width, 0))
    # newImage.paste(resized_images[5], (0, 2*sm_height))
    # newImage.paste(resized_images[6], (2*sm_width, 2*sm_height))


    image_name = "./test-images/test-hard-code-image-placement.jpeg"
    newImage.save(image_name)
    newImage.show()

    return image_name
