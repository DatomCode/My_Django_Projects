# Mliner | URL Shortener

**Mliner** is a clean, efficient URL shortening application built with Django. It takes long, complex URLs and converts them into short, shareable 8-character codes.

The project focuses on simplicity, speed, and a modern user interface.

## 🚀 Features

* **Instant Shortening:** Generates unique 8-character codes using UUID logic.
* **Smart Redirection:** Instantly redirects users from the short link to the original URL.
* **Clipboard Integration:** One-click "Copy" button with visual feedback.
* **Responsive Design:** Works seamlessly on desktop and mobile devices.
* **Duplicate Prevention:** Checks for existing short codes to ensure uniqueness.

## 🛠️ Tech Stack

* **Backend:** Python 3, Django 6.0
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **Database:** SQLite (Default)
* **Styling:** Custom CSS + FontAwesome Icons

## ⚙️ Installation & Setup

Follow these steps to run the project locally on your machine.

## 1. Clone the Repository
```bash
git clone [https://github.com/DatomCode/mliner.git](https://github.com/DatomCode/mliner.git)
cd mliner
```

## 2. Create a Virtual Environment
It is recommended to use a virtual environment to manage dependencies.
```bash
# Windows
python -m venv .venv
.venv\Scripts\activate

# Mac/Linux
python3 -m venv .venv
source .venv/bin/activate
```

## 3. Install Dependencies
```bash
pip install django
```

## 4. Apply Migrations
Set up the database tables.
```bash
python manage.py makemigrations
python manage.py migrate
```
## 5. Run the Server
```bash
python manage.py runserver
Open your browser and visit: http://127.0.0.1:8000
```





## 📝 Usage
Paste a long URL into the input field (e.g., https://www.google.com/search?q=django).

Click the "Shorten URL" button.

Click the Copy button to grab your new short link.

Paste the short link in a new tab to test the redirect.



## 
👤 Author
Gbadebo Enoch (DatomCode)

GitHub: @DatomCode

LinkedIn: Gbadebo Enoch

TikTok: @datom_code
