# TMDB CLI Tool

A simple command-line interface (CLI) tool to fetch and display movies from The Movie Database (TMDB).

Project URL: <https://github.com/yourusername/tmdb-cli-tool>

## Features

- Fetch and display different types of movies:
  - Now Playing Movies
  - Popular Movies
  - Top Rated Movies
  - Upcoming Movies
- Clean and formatted output in the terminal
- Error handling for API and network issues

## Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/tmdb-cli-tool.git
cd tmdb-cli-tool
```

2. Install dependencies:

```bash
npm install
```

3. Make the CLI tool executable:

```bash
chmod +x main.js
```

4. Install globally:

```bash
npm install -g .
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
- TMDB API key (get one from <https://www.themoviedb.org/>)

## Configuration

1. Get your API key from TMDB:
   - Create an account at <https://www.themoviedb.org/>
   - Go to your profile settings
   - Click on "API" in the left sidebar
   - Request an API key

2. Add your API key to `config.js`:
   - Replace `YOUR_API_KEY_HERE` with your actual TMDB API key

## Project Structure

```
tmdb-cli-tool/
├── main.js          # Main CLI application
├── config.js        # Configuration and API settings
├── package.json     # Project dependencies and metadata
└── README.md        # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the API
- [Commander.js](https://github.com/tj/commander.js/) for the CLI framework
