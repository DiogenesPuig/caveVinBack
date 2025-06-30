const mogoose = required('mongoose');

const SourceSchema = new mongoose.Schema({
    country: String,
    province_state:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:false
    },
    region:{
        type:String,
        required:false
    }
})

const source = mogoose.model('Source',SourceSchema);
module.export = source;