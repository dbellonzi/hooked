const db = require('../config/db.config.js')
const product = db.product

exports.findAll =(req, res) =>{
    product.findAll(). then((products)=>{
        res.json(products)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve product'})
    })
}

exports.create =(req,res)=>{
    product.create({
        productname: req.body.productname,
        productdescription: req.body.productdescription,
        productimage: req.body.productimage,
    }). then((product)=>{
        res.json(product)
    }). catch((err)=>{
        res.status(501).send({error: 'problem entering product into database'})
    })
}

exports.delete = (req,res)=>{
    const id = req.params.id;
    product.destory({
        where:{id:id}
    }).then(deleteproduct =>{
        res.json(deleteproduct)
    }).catch((err)=>{
        res.send(500).send({error:'could not delete product'})
    })
}
