const { Schema, model, SchemaTypes } = require('mongoose');

const EventSchema = Schema({
  title: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  // bgcolor: {
  //   type: String
  // },
  notes: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

// Para modificar la visualización del _id y eliminar el __v
EventSchema.method('toJSON', function(){
  const { _id, __v, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model( 'Event', EventSchema );