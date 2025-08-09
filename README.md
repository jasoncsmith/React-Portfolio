# Portfolio Site

Source code for my React powered online portfolio.

# Features

- Typescript
- React Functional Components
- React Query
- React Router
- MobX State Management
- Firebase Serverless Function {onReeust}
- Express to handle route requests
- Firebase Firestore NoSQL DB
- express-validation
- Lazy Loading
- Modular SCSS
- Custom-Built Responsive Carousel
- Responsive Design
- react-pdf resume rendering
- react-icons

# To View

Click the link: https://www.jasoncsmith.tech

# To Do

- Implement Webpack scss nested BEM to camelCase classNames
- Restore hide captions functionality

# Firebase (firebase.json)

- 08/09/25, fixed deployment issues

### hosting.public

- Ensure to include the ./ in the public path, as firebase could'nt find the build

### hosting.rewrites:

- Point /api requests to the exported api (app) in backend/src/index.js

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
