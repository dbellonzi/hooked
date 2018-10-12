const db = require('../config/db.config.js')
const order = db.order

exports.create =(req,res)=>{
    order.create({
        total: req.body.total,
        sub_total: req.body.subtotal,
        sales_tax: req.body.salestax,
        status: req.body.status,
    }). then((order)=>{
        res.json(order)
    }). catch((err)=>{
        res.status(501).send({ success: false, msg: 'Could not create order. Check parameters'})
    })
}

exports.findAll = (req, res)=>{
    order.findAll().then((orders)=>{
        res.json(orders)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg: 'Could not retrieve orders'})
    })
}

exports.findById = (req, res) => {
    const id = req.params.orderId
	order.findById(req.params.orderId).then((order) => {
		res.json(order);
	}).catch((err)=>{
        res.send(500).send({error:'could not retrieve order id =' + id})
    })
};


exports.delete = (req,res)=>{
    const id = req.params.orderId;
    order.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('deleted successfully a customer with id = ' + id);
        //result should be a redirect to admin page
    }).catch((err)=>{
        res.send(500).send({error:'could not delete Order'})
    });
}

exports.update = (req, res) => {
	const id = req.params.orderId;
	order.update( { 
        total: req.body.total,
        sub_total: req.body.subtotal,
        sales_tax: req.body.salestax,
        status: req.body.status,
         }, 
		{returning: true,  where: {id: id} }
	).then(() => {
		res.status(200).send("updated successfully a customer with id = " + id);
	});
};

