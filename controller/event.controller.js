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
        res.status(501).send({ success: false, msg: 'Could not create user. Please check parameters'})
    })
}

exports.findAll =(req, res) =>{
    event.findAll().then((event)=>{
        res.json(event)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg: 'Could not retrieve all events'})
    })
}

exports.findById = (req, res) => {	
	event.findById(req.params.eventId).then((event) => {
		res.json(event);
	}).catch((err)=>{
        res.status(501).send({ success: false, msg: 'Could not retrieve event'})
    })
};
// find event by id and all the relationships tide to this instance of the event
exports.delete =(req,res)=>{
    const id = req.params.eventId;
    event.destroy({
        where:{id:id}
    }).then(deleteEvent =>{
        res.json(deleteEvent)
        // result should be redirect to the admin page
    }).catch((err)=>{
        res.status(501).send({ success: false, msg: 'Could not delete event with id =' + id})
    })
}

exports.update = (req, res) => {
	const id = req.params.eventId;
	event.update( { 
        title: req.body.title,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        description: req.body.description,
        event_photo: req.body.event_photo,
        map_photo: req.body.map_photo,
         }, 
		{returning: true, where: {id: id} }
	).then(() => {
		res.status(200).send({success: true, msg:"updated successfully an event with id = " + id});
	}).catch(err=>{
        res.status(501).send({ success: false, msg: 'Could not update event with id =' + id})
    })
};