const express = require('express');
const cors = require('cors');
const session = require('express-session');
const router = require('./router');
require('./workers/passport');
const app = express();
const port = 4044;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(session({
    secret: 'mat-cat-sec',
    resave: false,
    saveUninitialized: true
}));

new router(app);

app.listen(port, () => {
    console.log(`Mohit site app listening at http://localhost:${port}`);
});
