const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const cookieparser = require('cookie-parser');
const route = require('./routes');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);
const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));