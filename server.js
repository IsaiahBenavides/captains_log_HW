// ========== INITIALIZATION ==========
require(`dotenv`).config()
const express = require(`express`)
const app = express()
const PORT = 3000
const reactViews = require(`express-react-views`)
const methodOverride = require(`method-override`)
const mongoose = require(`mongoose`)
const bodyParser = require(`body-parser`)
const Log = require(`./models/logs`)
const logController = require(`./controllers/logController`)


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  mongoose.connection.once(`open`, ()=>{
    console.log(`connected to mongo`)
  })
  
  app.set(`view engine`, `jsx`)
  app.engine(`jsx`, reactViews.createEngine())
  
// ========== MIDDLEWARE ==========
app.use(express.urlencoded({extended:false}));
app.use(methodOverride(`_method`))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


// ========== ROUTES ==========
app.use(`/logs`, logController)

// ============================
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  });
