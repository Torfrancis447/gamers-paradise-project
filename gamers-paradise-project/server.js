import express from 'express'
import bodyParser from 'body-parser'
import App from './src/App';

const app = express();
const PORT = 5000;

app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Sever running on port: http://localhost${PORT}`));

