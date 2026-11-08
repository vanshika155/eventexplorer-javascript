# EventExplorer – Smart Event Finder

EventExplorer is a responsive event discovery website built with vanilla JavaScript. Users can search events by title or city, filter by category, and show only free events.

## Features

- Search by event title, city, or category
- Filter by event category
- Toggle free events only
- Responsive event cards
- Fetches data asynchronously with `fetch()` and `async/await`
- Falls back to local sample data if the demo API is unavailable

## JavaScript concepts demonstrated

- **ES modules:** `import` and `export` separate API, data, event logic, UI, and application startup.
- **Functions:** reusable filtering, formatting, rendering, and initialization functions.
- **Arrays and objects:** event records are objects stored in an array.
- **Array methods:** `filter()`, `map()`, and `reduce()`.
- **Async JavaScript:** `async/await`, `fetch()`, and error handling.

## Run locally

Because this project uses JavaScript modules and `fetch()`, run it through a local web server rather than opening `index.html` directly.

### Option 1: VS Code Live Server
1. Download and unzip this repository.
2. Open the `eventexplorer-javascript` folder in VS Code.
3. Install the **Live Server** extension if it is not already installed.
4. Right-click `index.html` and select **Open with Live Server**.

### Option 2: Python
If Python is installed, open a terminal in the project folder and run:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000 in your browser.

## Project structure

```text
eventexplorer-javascript/
├── index.html
├── styles.css
├── README.md
└── js/
    ├── api.js
    ├── data.js
    ├── events.js
    ├── main.js
    └── ui.js
```

## Data and API note

The app requests demo records from JSONPlaceholder using `fetch()`. It adapts successful responses to the event data shape and uses the included sample events if the request fails. The sample data is for demonstration and is not a live event listing.

## Customize

Edit `js/data.js` to add, remove, or update sample events. Each event has an `id`, `title`, `city`, `category`, `date`, `fee`, and `description`.

## License

This project is provided for educational and hackathon use.
