from flask import Flask, render_template, redirect, url_for, make_response
from flask import request
from flask import jsonify
import threading

from budgetUtils import database as db

app = Flask(__name__)

# Replace this info with your own.
key = "api key here"
password = "Mellon"

GLOBAL_DATA_PATH = "DATA/GLOBAL/globalData.txt"

@app.route('/')
def welcome():
    auth = request.cookies.get('apiKey')
    if (auth == key):
        return redirect(url_for('home'))
    return render_template('login.html')

@app.route('/login/', methods=['POST'])
def login():
    if request.method == 'POST':
        data = request.form
        attempt = data['pass']
        if (attempt == password):
            resp = make_response(render_template('home.html'))
            resp.set_cookie('apiKey', key)
            return resp
        return redirect(url_for('welcome'))

    return 'This is a POST only endpoint.', 200

@app.route('/home/', methods=['GET', 'POST'])
def home():
    auth = request.cookies.get('apiKey')
    if (auth != key):
        return redirect(url_for('welcome'))
    if request.method == 'POST':
        data = request.form
        db.addData(data['dataName'], data['dataValue'], GLOBAL_DATA_PATH)
    return render_template('home.html')

@app.route('/about/')
def about():
    return render_template('about.html')

@app.route('/refresh/', methods=['GET', 'POST'])
def refresh():
    if request.method == 'POST':
        data = request.form
        auth = data['apiKey']
        if (auth != key):
            return 'You are not logged in.', 403
    else:
        auth = request.cookies.get('apiKey')
        if (auth != key):
            return 'You are not logged in.', 403
    return jsonify(db.getData(GLOBAL_DATA_PATH))

@app.route('/delete/', methods=['POST'])
def delete():
    auth = request.cookies.get('apiKey')
    global key
    if (auth != key):
        return 'You are not logged in.', 403
    if request.method == 'POST':
        dataName = request.form['dKey']
        db.deleteData(dataName, GLOBAL_DATA_PATH)
        return 'Data Deleted', 200
    return 'This is a POST only endpoint', 200


if __name__ == '__main__':


    app.run(host='0.0.0.0')
    #app.run()
