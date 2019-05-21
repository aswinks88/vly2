const mongoose = require('mongoose')
const Schema = mongoose.Schema

const opportunitySchema = new Schema({
  title: String, // "Growing in the garden",
  subtitle: String, // "Growing digitally in the garden",
  imgUrl: String, // "https://image.flaticon.com/icons/svg/206/206857.svg",
  description: String, // "Project to grow something in the garden",
  duration: String, // "15 Minutes",
  location: String, // "Newmarket, Auckland",
  status: String, // "draft",
  date: { type: 'Date' },
  offerOrg: String,
  requestor: String,
  dateAdded: { type: 'Date', default: Date.now, required: true }
})

module.exports = mongoose.model('Opportunity', opportunitySchema)
