# StarWapp

This is FullStack application, made for a recreuiting process, as in
https://conexatech.notion.site/Full-Stack-Nest-NextJS-5eae96ec04eb43b88d57710545042071

Based on the consumption of the data provided by the public Stars Wars API ([`swapi.info`](https://swapi.info/)) since the original requested was not present ([`swapi.dev`](https://swapi.dev/)) 

---

## Structure

- `/frontend`: Next.js React application  
- `/backend`: NestJS API server

---

## Technologies

### Frontend

- Next.js 15.3.2  
- React 19  
- TailwindCSS 4.1.8  
- Framer Motion  
- Next Themes  
- Class Validator  
- Class Transformer  
- Lucide React  

### Backend

- NestJS 11  
- Axios  
- Class Validator  
- Class Transformer  
- Node Cache  
- RxJS  
- Jest  

---

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Access the app at: http://localhost:3000

### Backend

```bash
cd backend
npm install
npm run start:dev
```

Runs on http://localhost:3001.

### Common Scripts
##Frontend

npm run dev
npm run build
npm run start
npm run lint

##Backend
npm run start
npm run start:dev
npm run build
npm run test
npm run lint

###Notes

TailwindCSS and Next Themes are used in the frontend.
Validation and transformation with class-validator and class-transformer in backend.
Jest configured for testing in backend.
Adjust ports and environment variables as needed.

### Improvements
Since receives data from an API, a DB was not needed
Even as it has de i18n for internacionalization, the feature was not completed
Also, the switch for Dark|Light Theme might be added