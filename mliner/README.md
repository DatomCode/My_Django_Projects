Mliner
Mliner is a robust, Django-based URL shortener. It takes long, cumbersome URLs and converts them into concise, shareable links (e.g., mliner.com/x7z). When a user visits the short link, Mliner efficiently handles the routing logic to redirect them to the original destination.

📖 Table of Contents
About the Project

How It Works

Key Features

Technologies Used

Installation & Setup

Future Roadmap

🧐 About the Project
Mliner was built to demonstrate backend logic, specifically focusing on HTTP Redirections and database management. The core philosophy of Mliner is simplicity: it acts as a "phonebook" for the internet, mapping unique short codes to specific destination URLs.

This project is part of a backend engineering portfolio, showcasing practical Django skills beyond standard CRUD operations.

⚙️ How It Works
The application relies on the HTTP 302 Redirect protocol.

Input: A user submits a long URL (e.g., https://www.google.com/search?q=django).

Processing: Mliner generates a unique, random string (token) for this URL.

Storage: The relationship between the Token and the Long URL is saved in the database.

Retrieval: When a user visits mliner.com/<token>, the server looks up the token, retrieves the original URL, and issues an HTTP Redirect response to the browser.

🚀 Key Features
Instant Shortening: Converts any valid URL into a 5-6 character short code.

Dynamic Routing: Uses Django's URL dispatcher to capture short codes and redirect in real-time.

Data Validation: Ensures submitted URLs are valid and functional before shortening.

Click Tracking: (Planned) Monitors how many times a link has been clicked.

🛠 Technologies Used
Python 3.10+ - The core programming language.

Django 5.0 - The web framework used for routing, ORM, and view logic.

SQLite - Default database for development (easily scalable to PostgreSQL).

Bootstrap 5 - For simple, responsive frontend styling.

💻 Installation & Setup
To run Mliner locally on your machine, follow these steps:

1. Clone the repository

Bash

git clone https://github.com/yourusername/mliner.git
cd mliner
2. Create a Virtual Environment

Bash

python -m venv .venv
source venv/Scripts/activate  # On mac use `venv\bin\activate`
3. Install Dependencies

Bash

pip install django
4. Apply Migrations

Bash

python manage.py makemigrations
python manage.py migrate
5. Run the Server

Bash

python manage.py runserver
Visit http://127.0.0.1:8007 in your browser to start shortening links.

🗺 Future Roadmap
[ ] Add Analytics (Count clicks per link).

[ ] User Accounts (Allow users to manage their own links).

[ ] Custom Short Codes (Allow users to pick mysite.com/my-custom-name).

[ ] QR Code generation for every short link.