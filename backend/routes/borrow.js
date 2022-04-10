const express = require('express');
const router = express.Router()

const BorrowModel = require('../models/borrowModel')

router.get('/',async(req,res)=>{
    try{
        const borrowreqs = await BorrowModel.find()
        res.json(borrowreqs)
    }
    catch(err){
        res.send('Error' + err)
    }
    
    console.log('get request for borrow')
})
router.delete('/:id',async(req,res)=>{
    try{
        const borrowreqs = await BorrowModel.findByIdAndDelete(req.params.id)
        res.json("deleted")
    }
    catch(err){
        res.send('Error' + err)
    }
    
    console.log('delete request')
})

router.post('/',async(req,res)=>{
    const borrow = new BorrowModel({
       amount: req.body.amount,
       reason: req.body.reason,
       duration: req.body.duration,
       upiId: req.body.upiId,
       phoneNumber: req.body.phoneNumber
    });

    try{
        const data = await borrow.save();
        res.send("done")
        console.log("data: "+data);
    }catch(err){
        res.send(err);
        
    }
});

module.exports = router;