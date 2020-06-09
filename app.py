from flask import Flask, render_template, request, redirect, url_for
import csv

app = Flask(__name__)


@app.errorhandler(404)
def page_not_found():
    return render_template('page_not_found.html'), 404


@app.route('/')
def home():
    return render_template('peso.html')


@app.route('/<string:page_name>')
def html_page(page_name):
    if page_name == 'thankyou.html':
        return page_not_found()
    else:
        return render_template(page_name)


def writ_to_file(data):
    with open('db.csv', mode='a') as db:
        email = data['email']
        name = data['name']
        message = data['message']
        csv_write = csv.writer(db, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        csv_write.writerow([name, email, message])


@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    if request.method == 'POST':
        try:
            data = request.form.to_dict()
            name = request.form['name']
            writ_to_file(data)
            return redirect(url_for('thankyou', name=name))
        except:
            return 'did not write to database'
    else:
        return 'something went wrong, try again'


@app.route('/thankyou')
def thankyou():
    name = request.args.get('name', None)
    if name is None:
        return page_not_found()
    elif name.isnumeric():
        return 'something went wrong, check your details and try again'
    else:
        return render_template('thankyou.html', name=name)


if __name__ == '__main__':
    app.run(debug=True)
