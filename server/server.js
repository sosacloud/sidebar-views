const app = require('./index.js');
const port = process.env.PORT;


app.listen(port, () => {
  console.log(`Now listening on ${port}. Visit http://localhost:${port}/`)
});