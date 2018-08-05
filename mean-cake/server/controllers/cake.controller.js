const cakeCtrl = {};

const Cake = require('../models/cakes');




cakeCtrl.getCakes = async (req, res) => {
    const cakes =  await Cake.find()
                
    res.json(cakes);
}

cakeCtrl.createCakes = async (req, res) => {
    console.log(req.body);
    const newCake = new Cake(req.body);
    await newCake.save();
    res.json({

        status: "OK"

    });
}

cakeCtrl.getCake = async (req, res) => {
    const cake = await Cake.findById(req.params.id);

    res.json(cake);

}

cakeCtrl.editCake = async (req, res) => {
    const { id } = req.params;
    const cake = {
        name: req.body.name,
        price : req.body.price
    }
    await Cake.findByIdAndUpdate(id, {$set: cake}, {new : true});
    res.json({

        status: "OK"

    });
}


cakeCtrl.deleteCake =  async (req, res) => {
    const { id } = req.params;
    Cake.findByIdAndRemove(id);
    res.json({

        status: "OK"

    });
}


module.exports = cakeCtrl;