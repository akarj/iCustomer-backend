const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = new Schema({
   id: {
      type: Number,
      unique: true,
      require: true,
      index: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
      index: true
   },
   name: {
      type: String,
      required: true,
   },
   family_name: {
      type: String,
      required: true,
   },
   picture: {
      type: String,
      required: true,
   },

}, { timestamps: true });


UserSchema.plugin(AutoIncrement, { id: 'order_id_seq', inc_field: 'id', start_seq: 100 });

module.exports = mongoose.model('User', UserSchema);
