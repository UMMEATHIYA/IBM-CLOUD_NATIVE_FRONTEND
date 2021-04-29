const express=require('express');
const router=express.Router();
router.get('/',(request,response)=>{
    response.send('hello from home controller');
});
module.exports=router;