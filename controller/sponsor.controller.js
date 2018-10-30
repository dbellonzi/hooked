const db = require('../config/db.config.js')
const sponsor = db.sponsor

exports.create = (req, res) => {
    sponsor.create({
        sponsor_Name: req.body.sponorname,
        sponsor_Level: req.body.sponsorlevel,
        sponsor_Link: req.body.sponorlink,
        img_Link: req.body.imglink,
        photo: req.body.photo,
    }).then((sponsor) => {
        res.json(sponsor)
    }).catch((err) => {
        res.status(501).send({ success: false, msg: 'Could not enter sponsor into DB. Check Parameters'})
    })
}

exports.findAll = (req, res) => {
    sponsor.findAll().then((sponsor) => {
        res.json(sponsor)
    }).catch((err) => {
        res.status(501).send({ success: false, msg: 'Could not retrieve all sponsors'})
    })
}

exports.findById = (req, res) => {
    var id = req.params.sponsorId
    sponsor.findById(req.params.sponsorId).then((sponsor) => {
        res.json(sponsor)
    }).catch((err) => {
        res.status(501).send({ success: false, msg: `Could not find sponsor with id: ${id} in DB`})
    })
};

exports.delete = (req, res) => {
    const id = req.params.sponsorId;
    sponsor.destory({
        where: { id: id }
    }).then(deleteSponsor => {
        res.status(200).send({ success: true, msg: `Sponsor with id: ${id} successfully delete from DB`})
    }).catch((err) => {
        res.status(501).send({ success: false, msg: `Could not delte sponsor with id: ${id} in DB`})
    })
}

exports.update = (req, res) => {
    const id = req.params.productId;
    product.update({
        sponsor_Name: req.body.sponorname,
        sponsor_Level: req.body.sponsorlevel,
        sponsor_Link: req.body.sponorlink,
        img_Link: req.body.imglink,
        photo: req.body.photo,
    },
        { returning: true, where: { id: id } }
        // possible to just use req.body to encapsulate everything instead of writing each one out
    ).then(() => {
        res.status(200).send("updated successfully a customer with id = " + id);
    }).catch(err =>{
        res.status(501).send({ success: false, msg: 'Could not update user with id =' + id })
    })
};