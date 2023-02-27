const express = require('express');
const cors = require('cors')
const app = express()



require('./config/mongoose.config');



app.use(cors(),express.json(),express.urlencoded({ extended: true }))



require('./routes/store.routes')(app);



app.listen(8000, () => console.log(`Listening on port 8000`) );