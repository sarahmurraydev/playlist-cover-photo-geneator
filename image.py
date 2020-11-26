from PIL import Image

def makeImage():
    # get the images 
    image2 = Image.open("./test-images/image2.jpeg")
    image3 = Image.open("./test-images/image3.jpeg")

    # make an array 
    images = [image2, image3]

    w = image2.size[0] # width
    h = image2.size[1] # height 

    ## make the new image  
    newImage = Image.new('RGB', (2*w, 2*h), 0)
    newImage.paste(image2, (0,0))
    newImage.paste(image3, (w,0))
    newImage.save("./test-images/testMerge2&3.jpeg")
    newImage.show()
