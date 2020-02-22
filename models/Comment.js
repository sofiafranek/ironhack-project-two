'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    maxlength: 500,
    trim: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});

const Model = mongoose.model('Comment', schema);

module.exports = Model;
