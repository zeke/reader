var mongoose = require('mongoose'),
    Post = require('./post');

// A Feed containing posts, shared across all users
var Feed = mongoose.Schema({
    title: String,
    description: String,
    author: String,
    language: String,
    copyright: String,
    categories: [String],
    feedURL: { type: String, index: { unique: true }},
    siteURL: String,
    posts: [Post],
    numSubscribers: Number,
    successfulCrawlTime: Date,
    failedCrawlTime: Date,
    lastFailureWasParseFailure: Boolean
});

module.exports = mongoose.model('Feed', Feed);