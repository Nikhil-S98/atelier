const express = require('express')

const { credentials } = require('./config')

const app = express()
const port = 3000

const indexRouter = require('./routes/index');

// view engine setup
var handlebars = require('express-handlebars').create({
    helpers: {
      eq: (v1, v2) => v1 == v2,
      ne: (v1, v2) => v1 != v2,
      lt: (v1, v2) => v1 < v2,
      gt: (v1, v2) => v1 > v2,
      lte: (v1, v2) => v1 <= v2,
      gte: (v1, v2) => v1 >= v2,
      and() {
          return Array.prototype.every.call(arguments, Boolean);
      },
      or() {
          return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
      },
      someId: (arr, id) => arr && arr.some(obj => obj.id == id),
      in: (arr, obj) => arr && arr.some(val => val == obj),
      dateStr: (v) => v && v.toLocaleDateString("en-US")
    }
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
  

//routes
app.use('/', indexRouter);

// custom 404 page
app.use((req, res) => {
    res.status(404)
    res.send('<h1>404 - Not Found</h1>')
})
  
  // custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`
))