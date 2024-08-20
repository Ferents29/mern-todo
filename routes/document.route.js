const { Router } = require("express");
const Documents = require("../models/Documents");
const File = require("../models/File");
const Users = require("../models/Users");
const config = require("config");
const fs = require("fs");

const router = Router();

router.post('/add', async (req, res) => {
    const { title, content, author } = req.body;

    try {
        const newDocument = new Documents({
            title,
            content,
            author,
        });

        const savedDocument = await newDocument.save();
        res.status(201).json(savedDocument); // Return the saved document as JSON response
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving document');
    }
});

router.get("/documents",async (req, res) => {
    try{
        const documents = await File.find();
        res.json(documents);
    }catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (req, res) => {

    try {
        const document = await Documents.findById({_id: req.params.id});
        const buffer = Buffer.from(document.content, 'base64');
        const normalString = buffer.toString('utf8');

        res.json(normalString);
        console.log(document);

        console.log(normalString);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/upload', async (req,res) => {
    console.log(req.files)
    try{
        const file = req.files.file;
        /*const parent = await File.findOne({user:req.user.id, _id:req.body.parent})
        const user = await Users.findOne({_id:req.user.id});

        if(user.usedSpace + file.size > user.diskSpace){
            return res.status(400).json({message:'There are no space on the disk'});
        }
        user.usedSpace = user.usedSpace + file.size;*/

        let path;
        let parent;
        let user;

        path = file.name;

        if (fs.existsSync(path)){
            return res.status(400).json({message:'File already exist'})
        }
        await file.mv(path);
        const type = file.name.split('.').pop();

        const dbFile = new File({
            name:file?.name,
            type,
            size:file?.size,
            path:path,
            parent:parent?._id,
            user:user?._id,
        });
        await dbFile.save();
        res.json(dbFile);
    } catch (error){
        console.log(error);
        res.status(500).json({message:'Upload error'});
    }
});

router.get('/download/:id', async (req,res) => {
    try {
        const file = await File.findOne({_id:req.params.id});
        const path = file.path;
        if (fs.existsSync(path)){
            res.download(path, file.name);
        }else {
            res.status(400).json({message:'File not found'});
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({message:'Download error'});
    }
} )

module.exports = router;