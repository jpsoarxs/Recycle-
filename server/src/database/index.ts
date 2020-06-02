import mongoose from 'mongoose'

mongoose.connect('mongodb//localhost/azcode', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;