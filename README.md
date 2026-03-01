
## Overview 
<p align="left"><img src="src/assets/namazu.png" width="256"></p> 

Namazu-site is the web application component for the Namazu Discord bot in the [#Hisouten Discord server](https://namazu.app/decks). The official website can be found at [https://namazu.app/](https://namazu.app). Namazu-site's Decks page shares the same functionality as the `&decks` Discord command and allows for easy sorting by `character`, `votes`, `date created`, etc. 

The public database `decks.json` file is updated every 10 minutes after the previous change on Discord with backups saved to Cloudflare R2 storage.

## Installation

Clone the repository with Git

```bash
git clone https://github.com/ikin-dev/namazu-site.git
```

Navigate into the cloned directory

```bash
cd namazu-site
```

Use the package manager [npm](https://nodejs.org/en/download) to install dependencies.

```bash
npm i
```

Run in a local environment with [Vite](https://vite.dev/)
```bash
npm run dev
```

The default address is `http://localhost:5173/`

## Technologies used
Namazu-site is created using the React framework with JavaScript. Namazu-site also uses Node.js, Vite, and Tailwind CSS for dependency installation, local testing, and styling. 


## Contributing

This project was created by [ikin-dev](https://github.com/ikin-dev/). Pull requests are welcome! For major changes, please open an issue first
to discuss what you would like to change.

## Other
Namazu-site does not store cookies and the data in `decks.json` is user-generated content.
