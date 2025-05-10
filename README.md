# TMDB CLI Tool

A simple command-line interface (CLI) tool to fetch and display movies from The Movie Database (TMDB).

## Features

- Fetch and display different types of movies:
  - Now Playing Movies
  - Popular Movies
  - Top Rated Movies
  - Upcoming Movies
- Clean and formatted output in the terminal
- Error handling for API and network issues

## Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

## Usage

Run the CLI tool with one of the following commands:

```bash
# Show now playing movies
tmdb-app --type "playing"

# Show popular movies
tmdb-app --type "popular"

# Show top rated movies
tmdb-app --type "top"

# Show upcoming movies
tmdb-app --type "upcoming"
```

You can also use the short form:
```bash
tmdb-app -t "popular"
```

## Error Handling

The tool handles various error cases:
- Invalid movie type
- API connection issues
- Invalid API key
- Network problems

## Requirements

- Node.js (v14 or higher)
- TMDB API key (get one from https://www.themoviedb.org/)

## Configuration

1. Get your API key from TMDB:
   - Create an account at https://www.themoviedb.org/
   - Go to your profile settings
   - Click on "API" in the left sidebar
   - Request an API key

2. Add your API key to `config.js`:
   - Replace `YOUR_API_KEY_HERE` with your actual TMDB API key
