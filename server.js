// ========== INITIALIZATION ==========
require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000
const reactViews = require('express-react-views')
const methodOverride = require(`method-override`)
const mongoose = require("mongoose")


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  mongoose.connection.once("open", ()=>{
    console.log(`connected to mongo`)
  })
  
  app.set("view engine", "jsx")
  app.engine("jsx", reactViews.createEngine())
  
// ========== MIDDLEWARE ==========
app.use((req, res, next) =>{
    console.log(`I ran for all routes`)
    next()
  })
  app.use(express.urlencoded({extended:false}));
  app.use(methodOverride(`_method`))

  // I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// ========== INDEX ==========

// ========== NEW ==========
app.get("/new", (req,res)=>{
    res.render("New")
})

// ========== DELETE ==========

// ========== UPDATE ==========

// ========== CREATE ==========

// ========== EDIT ==========

// ========== SHOW ==========

// ========== ROUTES ==========

// ============================
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  });
