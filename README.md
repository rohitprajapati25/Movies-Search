# Movies-Search
Created with CodeSandbox(Online Editor)

Click And Check My Movie Search Preview <a href="http://zsxypv.csb.app">🔗Link</a>


# Movies Search
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/rohitprajapati25/Movies-Search)

A simple and responsive movie search application built with React, TypeScript, and Tailwind CSS. This project allows users to search for movies using the OMDb API and view the results in a clean, grid-based layout.

### [➡️ Live Demo](http://zsxypv.csb.app)

## Features

- **Movie Search**: Enter a movie title in the search bar to fetch a list of matching movies.
- **Dynamic Results Grid**: Displays search results, including the movie's poster, title, release year, and type (e.g., movie, series).
- **Responsive Design**: The interface is fully responsive and works on various screen sizes, from mobile devices to desktops.
- **API Integration**: Fetches movie data from the [OMDb API](https://www.omdbapi.com/).
- **Fallback Image**: If a movie poster is not available, a placeholder image is shown.
- **Download Link**: Each movie card includes a "Click To Download" button that searches for the title on an external site.

## Technology Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS (via CDN)
- **API**: OMDb API
- **Tooling**: Create React App, CodeSandbox

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rohitprajapati25/Movies-Search.git
    cd Movies-Search
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    The application will be available at `http://localhost:3000`.

## API Configuration

This project uses a hardcoded API key for the OMDb API in `src/App.tsx`.

```typescript
// src/App.tsx
const res = await fetch(
  `https://www.omdbapi.com/?s=${query}&apikey=e76f4147`
);
```

For personal or production use, it is recommended to obtain your own free API key from the [OMDb API website](https://www.omdbapi.com/apikey.aspx) and replace the existing one.
