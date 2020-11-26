from flask import Flask 
from flask import jsonify

app = Flask( __name__ )

@app.route('/')
def home():
    return "Hello World! Welcome to Sarah's Playlist Photo Generator App"

if __name__ == '__main__': 
    app.run( debug=True )