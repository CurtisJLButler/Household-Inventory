# Welcome to Household Inventory!

## Development

Run the dev server:

```shellscript
npm run all
```
This runs the frontend Remix server, and the Backend Express server

By default the Remix server runs on 5173, but you will need to create a .env file in the root folder with:  

`MONGO_DB=(Your connection string)`  
`PORT=3000` or whatever port you want to use

Pages are stored in ./app/routes/  
Styles are stored in ./app/styles/