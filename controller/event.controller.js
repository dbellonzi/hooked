const db = require('../config/db.config.js')
const event = db.event

exports.create =(req, res)=>{
    event.create({
        title:req.body.title,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        description: req.body.description,
        event_photo: req.body.event_photo,
        map_photo: req.body.map_photo,
    }). then((event)=>{
        res.json(event)
    }).catch((error)=>{
        res.status(501).send({error: 'problem entering event into database' })
    })
}

exports.findAll =(req, res) =>{
    event.findAll(). then((event)=>{
        res.json(event)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve event'})
    })
}

exports.findById = (req, res) => {	
	event.findById(req.params.id).then((event) => {
		res.send(event);
	})
};

exports.delete =(req,res)=>{
    const id = req.params.id;
    event.destory({
        where:{id:id}
    }).then(deleteEvent =>{
        res.json(deleteEvent)
    }).catch((err)=>{
        res.send(500).send({error:'could not delete Event'})
    })
}

exports.update = (req, res) => {
	const id = req.params.id;
	event.update( { 
        title: req.body.title,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        description: req.body.description,
        event_photo: req.body.event_photo,
        map_photo: req.body.map_photo,
         }, 
		{ where: {id: id} }
	).then(() => {
		res.status(200).send("updated successfully a customer with id = " + id);
	});
};