from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# Disable CORS for react app.

app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(
    app,
    resources = {
        r"/members": {
            "origins": "http://localhost:3000"
            }
        }
    )

@app.route('/')
def home():
    return "Hello Coder!!"

@app.route("/members")
def members():
    return {'members':
        ["Member 1",
         "Member 2",
         "Member 3"
         ]
        }

if __name__ == "__main__":
    app.run(debug=True)