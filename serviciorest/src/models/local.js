const mongoose = require("mongoose");
const {Schema} = mongoose;

const LocalSchema = new Schema({
    Identificacion: String,
    LocalPedido: String,
    DetallePedido: String,
    DistanciaKm: Number,
    Valor: String,
    propina: String,
    tipoError: {
        type: String,
        default: null
    }
});

 module.exports = mongoose.model('local',LocalSchema);