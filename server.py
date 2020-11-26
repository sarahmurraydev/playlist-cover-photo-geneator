from flask import Flask 
from flask import jsonify
from image import make_image

app = Flask( __name__ )

@app.route('/')
def home():
    return "Hello World! Welcome to Sarah's Playlist Photo Generator App"

@app.route('/image')
def image():
    make_image()
    return "Successfully made the image!"

if __name__ == '__main__': 
    app.run( debug=True )