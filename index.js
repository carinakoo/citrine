const app = require('./app');

// Sets server port and logs message on success
app.listen(process.env.PORT || 3000, () => console.log('listening'));
