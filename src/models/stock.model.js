const mogoose = required('mongoose');

const StockSchema = new mongoose.Schema({
    amount: Number,
    drink:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Drink',
        required: true 
        },
    source:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Source',
        required : true
    },
    location: String
})

const stock = mogoose.model('Stock',StockSchema);
module.export = stock;