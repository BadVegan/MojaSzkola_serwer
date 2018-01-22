const Group = require('./group');


exports.findAll = () => {
    return Group.find();
};


exports.createGroup = (name) => {
    const group = new Group({
        name: name
    });
    return group.save();
};

exports.findById = (id) => {
   return  Group.find({_id: id});
};

exports.updateGroup = (req) => {
    const condition = req.params.id;
    const update = req.body.name;
     return Group.findByIdAndUpdate(condition, update);
};

exports.removeGroup = (req) => {
    const condition = req.params.id;
    return Group.findOneAndRemove(condition);
};