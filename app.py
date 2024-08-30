from flask import Flask, request, redirect, url_for, render_template_string, flash
from flask_mail import Mail, Message
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)  # For flashing messages

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.example.com'  # Replace with your SMTP server
app.config['MAIL_PORT'] = 587  # Port for TLS
app.config['MAIL_USERNAME'] = 'your_email@example.com'  # Replace with your email
app.config['MAIL_PASSWORD'] = 'your_email_password'  # Replace with your email password
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_DEFAULT_SENDER'] = 'your_email@example.com'  # Replace with your email

mail = Mail(app)

HTML_TEMPLATE = """
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>自己紹介</title>
    <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
    <link rel="stylesheet" href="css/indexjs.css">
    <link rel="stylesheet" href="css/test.css">
    <link rel="stylesheet" href="css/qa.css">
    <link rel="stylesheet" href="css/test2.css">
    <link rel="stylesheet" href="css/heder.css">
    <link rel="stylesheet" href="css/footer.css">
</head>
<body class="main-hobby">
    <!-- Header and other sections -->
    <div id="q&a" class="qa">
        <h2 class="qa-h2">< Q&A ></h2>
        <div class="edg">
            <div class="about-div">
                <form id="qa-form" class="qa-form" action="/submit" method="POST">      
                    <input name="name" type="text" class="feedback-input" placeholder="Name" required />   
                    <input name="email" type="email" class="feedback-input" placeholder="Email" required />
                    <textarea name="text" class="feedback-input" placeholder="Comment" required></textarea>
                    <input type="submit" value="SUBMIT"/>
                </form>
            </div>
        </div>
    </div>
    <!-- Footer and other sections -->
    <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
</body>
</html>
"""

@app.route('/', methods=['GET'])
def index():
    return render_template_string(HTML_TEMPLATE)

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name')
    email = request.form.get('email')
    text = request.form.get('text')

    msg = Message(
        subject='Contact Form Submission',
        recipients=['KTC24A31G0014@edu.kyoto-tech.ac.jp'],  # Replace with your email address
        body=f"Name: {name}\nEmail: {email}\nComment:\n{text}"
    )

    try:
        mail.send(msg)
        flash('Thank you for your submission!')
    except Exception as e:
        print(f"Error sending email: {e}")
        flash('There was an error sending your message. Please try again later.')

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
