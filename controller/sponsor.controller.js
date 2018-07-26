const db = require('../config/db.config.js')
const sponsor = db.sponsor

exports.create =(req,res)=>{
    sponsor.create({
        sponsor_Name: req.body.sponorname,
        sponsor_Level: req.body.sponsorlevel,
        sponsor_Link: req.body.sponorlink,
        img_Link: req.body.imglink,
        photo: req.body.photo,
    }). then((sponsor)=>{
        res.json(sponsor)
    }). catch((err)=>{
        res.status(501).send({
            error: "could not add new sponor to the database"
        })
    })
}

exports.findAll =(req, res) =>{
    sponsor.findAll(). then((sponsor)=>{
        res.json(sponsor)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve sponsors'})
    })
}

exports.findById = (req, res) => {	
	sponsor.findById(req.params.id).then((sponsor) => {
		res.send(sponsor);
	})
};

exports.delete =(req,res)=>{
    const id = req.params.id;
    sponsor.destory({
        where:{id:id}
    }).then(deleteSponsor =>{
        res.json(deleteSponsor)
    }).catch((err)=>{
        res.send(500).send({error:'could not delete Sponsor'})
    })
}

exports.update = (req, res) => {
	const id = req.params.id;
	product.update( { 
        sponsor_Name: req.body.sponorname,
        sponsor_Level: req.body.sponsorlevel,
        sponsor_Link: req.body.sponorlink,
        img_Link: req.body.imglink,
        photo: req.body.photo,
         }, 
		{ where: {id: id} }
	).then(() => {
		res.status(200).send("updated successfully a customer with id = " + id);
	});
};