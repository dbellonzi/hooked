const db = require('../config/db.config.js')
const product = db.product

exports.create =(req,res)=>{
    product.create({
        product_name: req.body.productname,
        product_description: req.body.productdescription,
        product_image: req.body.productimage,
        size: req.body.size,
        price: req.body.price,
    }).then(()=>{
        res.redirect('/admin')
    }).catch((err)=>{
        res.status(501).send({ success: false, msg: 'Error adding product to DB. Check Parameters' })
    })
}

exports.findAll =(req, res) =>{
    product.findAll().then((products)=>{
        res.json(products)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg: 'Could not retrieve all products' })
    })
}

// exports.findById = (req, res) => {	
// 	product.findById(req.params.id).then((product) => {
// 		res.send(product);
// 	})
// };

exports.findById = (req, res) => {
    var id = req.params.sponsorId
    product.findById(req.params.sponsorId).then((product) => {
        res.json(product)
    }).catch((err) => {
        res.status(501).send({ success: false, msg: `Could not find product with id: ${id} in DB`})
    })
};

exports.delete = (req,res)=>{
    const id = req.params.productId;
    product.destory({
        where:{id:id}
    }).then(() =>{
        res.status(200).send({success: true, msg:`product id:${id} was successfully deleted`})
    }).catch((err)=>{
        res.status(501).send({ success: false, msg: `Could not destory product with id: ${id} in DB`})
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
		{returning: true,  where: {id: id} }
	).then(() => {
		res.status(200).send("updated successfully a product with id = " + id);
	}).catch(err=>{
        res.status(501).send({ success: false, msg: `Could not destory product with id: ${id} in DB`})
    })
};
