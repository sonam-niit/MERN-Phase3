const express = require ('express');
const Product = require('./product');

const router = express.Router();

products: Product[10] =[];
router.get("",(req,res)=>{
    res.status(200).send(this.products);
});
router.post("",(req,res)=>{
    console.log(req.body);
   if(!this.products){
       this.products=[]
   }
    const newObject= new Product(req.body.name,req.body.price);
    this.products.push(newObject);

    res.status(200).send(this.products);
});

router.put("",(req,res)=>{
   // console.log(req.body);
   // console.log(this.products);
    for(var i=0;i<this.products.length;i++){
        if(this.products[i].name== req.body.name){
            this.products[i].price=req.body.price;
            break;
        }       
    }
    res.status(200).send(this.products);
});

router.delete("",(req,res)=>{

    var productId=this.products.indexOf(p=>p.name==req.body.name);
    this.products.splice(productId,1);
    res.status(200).send(this.products);
});

module.exports = router;