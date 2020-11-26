from PIL import Image

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

    ## make the new image  
    newImage = Image.new('RGB', (2*sm_width, 2*sm_height), 0)
    newImage.paste(resized_images[0], (0,0))
    newImage.paste(resized_images[1], (sm_width,0))
    image_name = "./test-images/testMerge2&3-make-images-same-size-VIA-resize.jpeg"
    newImage.save(image_name)
    newImage.show()

    return image_name
