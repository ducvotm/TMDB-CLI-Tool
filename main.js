#!/usr/bin/env node

import { Command } from "commander";
import { TMDB_API_KEY, TMDB_BASE_URL, endpoints } from "./config.js";

const program = new Command();

program
  .name("tmdb-app")
  .description("CLI tool to fetch and display movies from TMDB")
  .version("1.0.0");

program
  .option(
    "-t, --type <type>",
    "Type of movies (playing, popular, top, upcoming)"
  )
  .action(async (options) => {
    const type = options.type;

    if (!endpoints[type]) {
      console.error(
        "Error: Invalid type. Use one of: playing, popular, top, upcoming"
      );
      process.exit(1);
    }

    const url = `${TMDB_BASE_URL}${endpoints[type]}?api_key=${TMDB_API_KEY}&language=en-US&page=1`;

    try {
      console.log(`\nFetching ${type} movies...\n`);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.results || !Array.isArray(data.results)) {
        throw new Error("No movies found in the response");
      }

      console.log(`=== ${type.toUpperCase()} MOVIES ===\n`);

      data.results.forEach((movie, index) => {
        console.log(`${index + 1}. ${movie.title}`);
        console.log(`   Rating: ${movie.vote_average}/10`);
        console.log(`   Release Date: ${movie.release_date}`);
        console.log(`   Overview: ${movie.overview.substring(0, 100)}...\n`);
      });
    } catch (error) {
      if (error.message.includes("api_key")) {
        console.error(
          "Error: Invalid API key. Please check your TMDB API key in config.js"
        );
      } else if (error.message.includes("network")) {
        console.error(
          "Error: Network issue. Please check your internet connection"
        );
      } else {
        console.error("Error:", error.message);
      }
      process.exit(1);
    }
  });

program.parse();
