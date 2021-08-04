const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=> res.json({mensaje:"Hello World"}));

 module.exports = router;