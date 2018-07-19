const db = require('../config/db.config.js')
const order = db.order

exports.create =(req,res)=>{
    order.create({
        total: req.body.total,
        sub_total: req.body.subtotal,
        sales_tax: req.body.salestax,
        status: req.body,status,
    }). then((sponsor)=>{
        res.json(sponsor)
    }). catch((err)=>{
        res.status(501).send({
            error: "could not add new order to the database"
        })
    })
}

exports.findAll = (req, resp)=>{
    order.findAll(). then((orders)=>{
        res.json(orders)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve orders'})
    })
}

exports.delete = (req,res)=>{
    const id = req.params.id;
    order.destory({
        where:{id:id}
    }).then(deleteOrder =>{
        res.json(deleteOrder)
    }).catch((err)=>{
        res.send(500).send({error:'could not delete Order'})
    })
}

