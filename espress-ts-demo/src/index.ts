import express, { Request, Response } from 'express';


// // così si usa typescript ----- Piccolo esempio
// type MyType = {
//   uno: number;
//   due: number;
//   tre?: number;  // ? indica che il campo è opzionale
// };
// const {uno, due} = {uno: 1, due: 2, tre: 3} as MyType;  // as MyType è un cast

// const a = {uno: 1, due: 2, tre: 3} as MyType;  // as MyType è un cast
// const c = a;
// const tre = 4;
// const b = {...a, tre}; // spread operator per copiare un oggetto e modificarlo
// console.log(a, b, c);


const app = express();                                      // crea un'istanza di express
const port = process.env.PORT || 3000;                      // process.env.PORT è la porta che viene passata da heroku

const lezioni = [
  { id: 1, titolo: 'Advanced TypeScript Techniques' },
  { id: 2, titolo: 'Building REST APIs with Node.js' },
  { id: 3, titolo: 'Mastering Express Middleware' },
];

app.get('/', (req: Request, res: Response) => {             // definisce una route, invio una richiesta GET alla radice del server (root)
  res.sendFile(__dirname + '/index.html');                  // invia un file html
});                                                         // req e res sono oggetti di tipo Request e Response


app.get('/api/lezioni', (req: Request, res: Response) => {  // se cerco su chrome il percorso http://localhost:3000/api/lezioni mi esce fuori il risultato
  res.json(lezioni);                                        // risponde con un oggetto JSON
});                                                         // req e res sono oggetti di tipo Request e Response


app.listen(port, () => {                                    // fa partire il server con poche righe lo creo e lo faccio partire
  console.log(`Server running at http://localhost:${port}`); // scrive un messaggio sulla console
});                                                         // il server è in ascolto sulla porta 3000