const Tour = require('./../models/tourModel');

module.exports = {
  Query: {
    hello() {
      return 'This is my first query!';
    },
    async getAllTours() {
      return await Tour.find();
    },
    async getTourBySlug(parent, { slug }) {
      return await Tour.findOne({ slug }).populate({
        path: 'reviews',
        fields: 'review rating user'
      });
    }
  }
};
