const Store =  require('../models/store.model')

module.exports.allStores = (req,res) =>{
    Store.find()
    .then(storeList=>res.json(storeList))
    .catch(err=>res.status(400).json(err))
}


module.exports.oneStore = (req,res) =>{
    Store.findOne({_id : req.params.id})
    .then(oneStore=>res.json(oneStore))
    .catch(err=>res.status(400).json(err))
}


module.exports.addStore = (req,res) =>{
    Store.create(req.body)
    .then(createdStore=>res.json(createdStore))
    .catch(err=>res.status(400).json(err))
}

module.exports.editStore = (req,res) =>{
    Store.findOneAndUpdate({_id : req.params.id}, req.body,{new : true, runValidators:true})
    .then(updatedStore=>res.json(updatedStore))
    .catch(err=>res.status(400).json(err))
}


module.exports.deleteStore = (req,res) =>{
    Store.deleteOne({_id: req.params.id})
    .then(status => res.json(status))
    .catch(err=>res.status(400).json(err))
}