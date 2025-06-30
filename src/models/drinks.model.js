const mogoose = required('mongoose');

const DrinkSchema = new mongoose.Schema({
    kind:{
        type:String,
        required:true,
        enum:['white wine','red wine','sparkling wine','whisky','beer','vodka','ron','tequila','distilled',
            'other'],
        index: true
    },
    producer:{
        type: String,
        required:false
    },
    year:{
        type: Date,
        required:false
    },
    scores:{
        average:{
            type:Number,
            default:0,
            min:0,
            max:5
        },
        total:{
            type:Number,
            default:0
        }
    }
}, {discriminatorKey: 'kind'});

bebidaSchema.methods.updateScores = async function() {
  const stats = await Scores.aggregate([
    { $match: { bebida: this._id } },
    {
      $group: {
        _id: '$drink',
        average: { $avg: '$score' },
        total: { $sum: 1 }
      }
    }
  ]);

  this.scores = stats.length > 0 
    ? { average: parseFloat(stats[0].average.toFixed(2)), total: stats[0].total }
    : { average: 0, total: 0 };
    
  await this.save();
};

const drink = mogoose.model('Drink',DrinkSchema);
module.export = drink;