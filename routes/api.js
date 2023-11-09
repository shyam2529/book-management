const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const BookModel = require('../models/bookschema');
const config = require('../config/config');
 
// Connecting to database
const query = config.DB_CONNECTION_STRING;
 
const db = (query);
mongoose.Promise = global.Promise;
 
mongoose.connect(db);

router.post('/save', async function (req, res) {
    try{

        const data = await BookModel.find({title:req.body.title});
        if (data && data.length>0) {
            res.send("Book already exists with this title");
        }else{

            const newBookModel = new BookModel();
            newBookModel.title = req.body.title;
            newBookModel.author = req.body.author;
            newBookModel.summary = req.body.summary;

            await newBookModel.save();
            res.send("Book Added");
        }

    } catch(err) {
        res.send("Error in adding book");
    }
});

router.post('/update', async function (req, res) {
    try{
        const data = await BookModel.findById(req.body.id);
        if (!data) {
            res.send("No book found with this id");
        }else{

            const datat = await BookModel.find({title:req.body.title, _id:{$ne:req.body.id}});
            if (datat && datat.length>0) {
                res.send("Book already exists with this title");
            }else{
                const updateData = {
                    title: req.body.title,
                    author: req.body.author,
                    summary: req.body.summary  
                }

                await BookModel.findByIdAndUpdate(req.body.id, updateData);
                res.send("Book Updated");
            }
        }
    } catch(err) {
        res.send("Error in updating book");
    }
});

router.get('/findall', async function (req, res) {
    const data = await BookModel.find();
    if (data.length>0) {
        res.send(data);
    }else{
        res.send("No records");
    }
    
});

router.post('/findone', async function (req, res) {
    try{
        const data = await BookModel.findById(req.body.id);
        if (data) {
            res.send(data);
        }else{
            res.send("No record");
        }
    } catch(err) {
        res.send("No book found with this id");
    }
});

router.post('/delete', async function (req, res) {
    try{
        const data = await BookModel.findById(req.body.id);
        if (data) {
            const data = await BookModel.findByIdAndDelete(req.body.id);
            res.send("Book Deleted!");
        }else{
            res.send("No book found with this id");
        }
    } catch(err) {
        res.send("No book found with this id");
    }
    
});

module.exports = router;