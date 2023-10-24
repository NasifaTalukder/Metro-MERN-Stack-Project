const mongoose = require('mongoose');


async function connectionHelper(){
  const mdb=  mongoose.connect('mongodb://127.0.0.1:27017/products')
  return mdb;
}

module.exports =connectionHelper;