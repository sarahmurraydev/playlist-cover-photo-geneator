from flask import Flask 
from flask import jsonify
from PIL import Image

app = Flask( __name__ )

@app.route('/')
def home():
    return "Hello World! Welcome to Sarah's Playlist Photo Generator App"

@app.route('/image')
def image():
    # get the images 
    image2 = Image.open("./test-images/image2.jpeg")
    image3 = Image.open("./test-images/image3.jpeg")

    w = image2.size[0] # width
    h = image2.size[1] # height 

    ## make the new image  
    newImage = Image.new('RGB', (2*w, 2*h), 0)
    newImage.paste(image2, (0,0))
    newImage.paste(image3, (w,0))
    newImage.save("./test-images/testMerge2&3.jpeg")
    newImage.show()

    return "Successfully made the image!"

if __name__ == '__main__': 
    app.run( debug=True )