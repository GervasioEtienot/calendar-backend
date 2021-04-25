const { response } = require('express'); // Importo response para tener el intellisense
const Event = require('../models/Event');

const getEvents = async( req, res = response ) => {

  
  const events = await Event.find(req.query).populate('user', 'name');

  res.json({
    ok: true,
    events
  });

}

const createEvent = async( req, res = response ) => {

  const event = new Event( req.body );
  
  try {

    event.user = req.uid;
    
    const savedEvent = await event.save();

    res.json({
      ok: true,
      event: savedEvent
    });
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok:false,
      msg: 'Por favor hable con el administrador'
    });
  }

}

const updateEvent = async( req, res = response ) => {

  const eventId = req.params.id;
  
  try {
    
    const event = await Event.findById( eventId );

    if( !event ){
      return res.status(404).json({
        ok: false,
        msg: 'No exixte evento con ese ID'
      });
    }

    if(  event.user.toString() !== req.uid ){
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegios para editar este evento'
      });
    }

    const newEvent = {
      ...req.body,
      user: req.uid
    }

    const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );

    res.json({
      ok: true,
      Evento: updatedEvent
    });
  
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok:false,
      msg: 'Por favor hable con el administrador'
    });
  }
  

}

const deleteEvent = async( req, res = response ) => {

  const eventId = req.params.id;
  
  try {
    
    const event = await Event.findById( eventId );

    if( !event ){
      return res.status(404).json({
        ok: false,
        msg: 'No exixte evento con ese ID'
      });
    }

    if(  event.user.toString() !== req.uid ){
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegios para eliminar este evento'
      });
    }

    const deletedEvent = await Event.findByIdAndDelete( eventId );

    res.json({
      ok: true,
      msg: 'Evento eliminado',
      // Evento: deletedEvent.title
    });
  
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok:false,
      msg: 'Por favor hable con el administrador'
    });
  }

}

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
}