# AI-Based Alumni Meet

A simple static website matching the provided screenshots

## How to run
No build step or server required — it's plain HTML/CSS/JS.

1. Open `welcome.html` (splash screen) or `index.html` (home page) directly in any web browser by double-clicking it.
2. Navigate using the nav bar links (Home / About / Explore / Contact).
3. Try `login.html` — use username `admin` and password `admin` to log in (redirects to Home).
4. On `explore.html`, type a name in the search box or pick a department from the dropdown to filter the alumni cards.

Optionally, to serve it over local HTTP (recommended for some browsers' security settings):
```bash
cd alumni-meet
python3 -m http.server 8000
```
Then visit http://localhost:8000/welcome.html
