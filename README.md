# Hjelmare Consulting Site

## Requirements

- Node.js 18+ (recommended: Node.js 22 LTS)
- Yarn

## Installation

1. Clone the repo

    ```sh
    git clone https://github.com/MartinHjelmare/hjelmare-consulting.git
    ```

2. Open the project folder

    ```sh
    cd hjelmare-consulting
    ```

3. Install packages and dependencies

    ```sh
    yarn
    ```

    NOTE: If you don't have yarn installed, you can install it globally using npm:

    ```sh
    npm install -g corepack
    ```

4. Start a local dev server at `http://localhost:3000`

    ```sh
    yarn dev
    ```

## Production

### Build for production and launch server

```sh
yarn build
```

```sh
yarn start
```

### Generate static project

```sh
yarn generate
```

Static files are generated into `.output/public`.
For Netlify deploys, use `dist` as publish directory (`dist` is generated as a symlink to `.output/public`).
