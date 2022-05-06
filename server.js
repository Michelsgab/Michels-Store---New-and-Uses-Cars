import App from './src/app.js';

const port = process.env.PORT || 3000;

App.listen(port, () => {
    console.log(`Servidor executado em http://localhost:${port}`);
})