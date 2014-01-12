from flask import Flask, render_template
from test_csv import *

app = Flask(__name__)
app.secret_key = 'not_a_secret'

@app.route('/')
def hello_world():
	return 'Hello World!'

@app.route('/usPresidents')
def test_flask():
	us_pres = print_pres()
	return render_template('test_flask.html', us_pres=us_pres)

if __name__ == '__main__':
	app.run()
