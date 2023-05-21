const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    review_count: { type: Number, required: true },
    rating: { type: Number, required: true },
    business_url: { type: String, required: true },
    categories: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("contact", ContactSchema);
module.exports = Contact;
