const { Router } = require("express");
const Documents = require("../models/Documents");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = Router();

router.post("/add", upload.single('file'), async (req, res) => {
    try{
        const wordDocument = req.file;
        const newWordDocument = JSON.stringify(wordDocument);

        const document = new Documents({
            title: 'jhjhjhjhj',
            file: newWordDocument,
        });
        await document.save();
        res.json(document).status(201).json({ message: 'Word document uploaded successfully' });
    }catch (error){
        console.log(error);
    }
});

router.get("/documents",async (req, res) => {
    try{
        const documents = await Documents.find();
        res.json(documents);
    }catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const document = await Documents.findById({_id: req.params.id});
        res.json(document);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;