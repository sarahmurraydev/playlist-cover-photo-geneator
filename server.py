from flask import Flask 
from flask import jsonify
from image import make_image
from auth import get_user
from auth get_user_token

app = Flask( __name__ )

@app.route('/')
def index():
    response = auth.get_user()
    return redirect(response)

@app.route('/callback/')
def callback():
    auth.get_user_token(request.args['code'])
    # got token
    return "We\'ve got the token!"

@app.route('/home')
def home():
    return "Hello World! Welcome to Sarah's Playlist Photo Generator App"

@app.route('/image')
def image():
    name = make_image()
    result = "Successfully made the image called: {}!"
    return result.format(name)

if __name__ == '__main__': 
    app.run( debug=True )