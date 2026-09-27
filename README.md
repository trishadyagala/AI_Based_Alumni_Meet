# AI-Based Alumni Meet

A simple static website matching the provided screenshots.

## Structure
```
alumni-meet/
├── index.html      Home page
├── about.html       About page
├── explore.html     Explore Alumni (search + department filter)
├── contact.html     Contact form
├── welcome.html     Splash / "Get Started" screen
├── login.html       Login screen (username: admin, password: admin)
├── css/
│   └── style.css    All shared styling
├── js/
│   ├── explore.js   Alumni data + search/filter logic
│   ├── contact.js   Contact form submit handler
│   └── login.js     Login form validation
└── README.md
```

## How to run
No build step or server required — it's plain HTML/CSS/JS.

1. Unzip the folder.
2. Open `welcome.html` (splash screen) or `index.html` (home page) directly in any web browser by double-clicking it.
3. Navigate using the nav bar links (Home / About / Explore / Contact).
4. Try `login.html` — use username `admin` and password `admin` to log in (redirects to Home).
5. On `explore.html`, type a name in the search box or pick a department from the dropdown to filter the alumni cards.

Optionally, to serve it over local HTTP (recommended for some browsers' security settings):
```bash
cd alumni-meet
python3 -m http.server 8000
```
Then visit http://localhost:8000/welcome.html
