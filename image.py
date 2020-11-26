from PIL import Image

def make_image():
    # get the images 
    image2 = Image.open("./test-images/image2.jpeg")
    image3 = Image.open("./test-images/image3.jpeg")

    # make an array 
    images = [image2, image3]
    
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

    cropped_images = []

    ## crop all the images to be the smallest dimensions:
    for im in images:
        # crop the images from the center to do this
        # 1) determine the coordinates of the center of the image
            # by getting the image widith + height 
            # then dividing it by 2 ==> gives us center of the image
        # 2) cropping from coordinates center dim +/- smallest dim
        im_width = im.size[0]
        im_height = im.size[1]

        center_width = im_width/2
        center_height = im_height/2 

        #* define the boundaries for the crop
        ## boundaries are the center of the image +/- half the width or height
        ## so if the image is 300 x 300 and but we want to crop it to a height and width of 200x200
        ## the center dimensions (w,h) = (150, 150), and the sm dim = (200, 200)
        ## So the cropped dim are (150 - (200/2), 150 - (200/2), 150 + (200/2), 150 + (200/2))
        ## or: (50, 50, 250, 250) which creates a 200x200 size image
        left = (center_width - (sm_width/2))
        upper = (center_height - (sm_height/2))
        right = (center_width + (sm_width/2))     
        lower = (center_height + (sm_height/2))

        # make dimensions a tuple
        # (lf, up, rt, lo) = 

        cropped_im = im.crop((left, upper, right, lower))
        # add the cropped images to the array
        cropped_images.append(cropped_im)

    ## make the new image  
    newImage = Image.new('RGB', (2*sm_width, 2*sm_height), 0)
    newImage.paste(cropped_images[0], (0,0))
    newImage.paste(cropped_images[1], (sm_width,0))
    newImage.save("./test-images/testMerge2&3-make-images-same-size.jpeg")
    newImage.show()
