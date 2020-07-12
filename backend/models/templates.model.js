const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TemplateSchema = new Schema({
    _id: {
        type: Object,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    category: {
        type: [String],
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: Object,
        required: false,
    },
    content: {
        type: Object,
        required: true,
    },
    questions: {
        type: [Object],
        required: false
    }
});

TemplateSchema.set('timestamps', true);

module.exports = Template = mongoose.model("templates", TemplateSchema)