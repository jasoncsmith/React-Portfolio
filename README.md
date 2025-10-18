# Portfolio Site

Source code for my Express/Firebase/React powered online portfolio.

# URL: https://www.jasoncsmith.tech

# Features

- Typescript
- Express Application
- express-validator
- serverside error logging
- log file rotation
- log file sensitive info redaction
- custom OWASP csrf header protection

- Firebase Serverless Functions
- Firebase Firestore NoSQL DB

- React Functional Components
- React Query
- React Router
- MobX State Management
- Lazy Loading
- Modular SCSS
- Custom-Built Responsive Carousel
- Responsive Design
- react-pdf resume rendering

# To Do

- Implement standardized serverside error handling
- Implement typescript on backend (firebase deployment)

# To run locally

## After Firebase local set-up

- `cd ./client && pnpm run dev`
- `cd ./backend && pnpm run serve`

## Firebase set-up (first time only)

Must install firebase-tools globally
`pnpm add --global firebase-tools`

Then authenticate to firebase cloud
`firebase login`

- follow browser based prompts

`firebase init`
Then select options:

- Emulators: Set up local emulators for Firebase products
- Functions Emulator
- Firestore Emulator

# Notable bug fixes:

## Firebase deployment (firebase.json)

- 08/09/25, updated firebase packages

```json
  "hosting": {
    "public": "./client/build",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "/api/**",
        "function": "api"
      },
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
```

### hosting.public

- Ensure to include the `./` in the public path, as firebase could'nt find the build

### hosting.rewrites:

- Point /api requests to the exported api (app) from `backend/src/index.ts`
