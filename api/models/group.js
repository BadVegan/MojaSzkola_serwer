const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    name: String
});
// GroupSchema.set('toJSON', {
//     virtuals: true
// });
module.exports = mongoose.model('Group', GroupSchema);