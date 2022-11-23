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
app.use((req, res, next) =>{
    console.log(`I ran for all routes`)
    next()
  })
app.use(express.urlencoded({extended:false}));
app.use(methodOverride(`_method`))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

  // I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// ========== INDEX ==========
app.get(`/logs`, (req,res)=>{
    Log.find({}, (error, allLogs)=>{
        if(!error){
            res
            .status(200)
            .render(`Index`, {
                logs: allLogs
            })
        }else{
            res
            .status(400)
            .send(error)
        }
    })
})
// ========== NEW ==========
app.get(`/new`, (req,res)=>{
    res.render(`New`)
})

// ========== DELETE ==========
app.delete(`/logs/:id`, (req,res)=>{
    Log.findByIdAndDelete(req.params.id, (error, data)=>{
        res.redirect(`/logs`)
    })
})

// ========== UPDATE ==========

// ========== CREATE ==========
app.post(`/logs`, (req,res)=>{
    if(req.body.shipIsBroken === `on`){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }
    Log.create(req.body, (error, createdLog)=>{
        if(!error){
            res
            .status(200)
            .redirect(`/logs`)
        }else{
            res
            .status(400)
            .send(error)
        }
    })
})

// ========== EDIT ==========

// ========== SHOW ==========
app.get(`/logs/:id`, (req,res)=>{
    Log.findById(req.params.id, (error, foundLog)=>{
        if(!error){
            res
            .status(200)
            .render(`Show`, {
                log: foundLog
            })
        }else{
            res
            .status(400)
            .send(error)
        }
    })
})

// ========== ROUTES ==========

// ============================
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  });
