const { default: mongoose } = require("mongoose");
const Product = require("../models/Product");

const getProductList = async(req,res,next)=>{
    const product = await Product.find();
    console.log(product)
    res.send(product)
}
const getProductById = async(req,res,next)=>{
    console.log(req.query)
    const {id}=req.query
    const condition = {'_id':id};
    const product = await Product.find(condition);
    console.log(product)
    res.send({success:true, data :product[0]})
}

const addProduct =async(req,res,next)=>{
    const products = req.body;
    // const responceArray = new Array();
    // for (let product of products) {
    //     console.log({first})
    //     const newProduct = new Product({...product})
    //     const resultObj = await newProduct.save();
    //     console.log({resultObj})
    //     responceArray.push(resultObj);
    //       }
   const product = await Product.insertMany(products)
res.send({success:true,products:product});
    
}

module.exports = {
    getProductList,
    addProduct,
    getProductById
}