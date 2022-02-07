import express  from "express";
import path from "path";
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
});

router.post('/chat', (req, res) => { 
    res.render(path.resolve('public/chat.ejs'), {sala:req.body['sala']});
});




export default router;