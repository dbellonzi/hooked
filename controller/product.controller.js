const db = require('../config/db.config.js')
const product = db.product

exports.create =(req,res)=>{
    product.create({
        product_name: req.body.productname,
        product_description: req.body.productdescription,
        product_image: req.body.productimage,
        size: req.body.size,
        price: req.body.price,
    }). then(()=>{
        res.redirect('/admin')
    }). catch((err)=>{
        res.status(501).send({error: 'problem entering product into database'})
    })
}

exports.findAll =(req, res) =>{
    product.findAll(). then((products)=>{
        res.json(products)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve product'})
    })
}

exports.findById = (req, res) => {	
	product.findById(req.params.id).then((product) => {
		res.send(product);
	})
};

exports.delete = (req,res)=>{
    const id = req.params.productId;
    product.destory({
        where:{id:id}
    }).then(deleteproduct =>{
        res.json(deleteproduct)
    }).catch((err)=>{
        res.send(500).send({error:'could not delete product'})
    })
}

exports.update = (req, res) => {
	const id = req.params.productId;
	product.update( { 
        product_name: req.body.productname,
        product_description: req.body.productdescription,
        product_image: req.body.productimage,
        size: req.body.size,
        price: req.body.price,
         }, 
		{ where: {id: id} }
	).then(() => {
		res.status(200).send("updated successfully a customer with id = " + id);
	});
};
