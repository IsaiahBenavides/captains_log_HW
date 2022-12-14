const express = require("express")
const router = express.Router()
const Log = require(`../models/logs`)

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// ========== INDEX ==========
router.get(`/`, (req,res)=>{
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
router.get(`/new`, (req,res)=>{
    res.render(`New`)
})

// ========== DELETE ==========
router.delete(`/:id`, (req,res)=>{
    Log.findByIdAndDelete(req.params.id, (error, data)=>{
        res.redirect(`/logs`)
    })
})

// ========== UPDATE ==========
router.put(`/:id`, (req,res)=>{
    req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false
    Log.findByIdAndUpdate(req.params.id, req.body, (error, updatedLog)=>{
        if(!error){
            res.status(200).redirect(`/logs/${req.params.id}`)
        }else{
            res.status(400).send(error)
        }
    })
})

// ========== CREATE ==========
router.post(`/`, (req,res)=>{
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
router.get(`/:id/edit`, (req,res)=>{
    Log.findById(req.params.id, (error, foundLog)=>{
        if(!error){
            res
            .status(200)
            .render(`Edit`, {log: foundLog})
        }else{
            res
            .status(400)
            .send({msg: error.message})
        }
    })
})

// ========== SHOW ==========
router.get(`/:id`, (req,res)=>{
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

module.exports = router