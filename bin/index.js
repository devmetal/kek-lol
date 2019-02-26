const app = require('../index');

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`App listening on ${PORT}`);
});
