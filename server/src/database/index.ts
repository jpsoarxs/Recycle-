import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/azcode', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))
mongoose.Promise = global.Promise;

export default mongoose;