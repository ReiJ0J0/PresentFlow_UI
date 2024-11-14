from flask import Flask, render_template

app = Flask(__name__)

# Route for index page
@app.route('/')
def index():
    return render_template('index.html')

# Route for topbar.html
@app.route('/topbar.html')
def topbar():
    return render_template('topbar.html')

# Route for sidebar.html
@app.route('/sidebar.html')
def sidebar():
    return render_template('sidebar.html')

# Route for maincontent.html
@app.route('/maincontent.html')
def maincontent():
    return render_template('maincontent.html')

# Route for aboutsystem.html
@app.route('/aboutsystem.html')
def aboutsystem():
    return render_template('aboutsystem.html')

# Route for aboutus.html
@app.route('/aboutus.html')
def aboutus():
    return render_template('aboutus.html')

if __name__ == '__main__':
    app.run(debug=True)
