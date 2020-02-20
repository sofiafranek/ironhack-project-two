'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 80,
    trim: true
  },
  content: {
    type: String,
    required: true,
    maxlength: 500,
    trim: true
  },
  channel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Channel',
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comments: [
    {
      content: {
        type: String,
        required: true,
        trim: true
      },
      authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
      }
    },
    {
      timestamps: true
    }
  ]
});

const Model = mongoose.model('Post', schema);

module.exports = Model;
