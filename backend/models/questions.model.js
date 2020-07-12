const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	_id: {
        type: Number,
        required: true
    },
	type: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	answer: {
		type: String,
		required: true,
	},
	options: {
		type: Array,
		required: true,
	},
});

QuestionSchema.set('timestamps', true);

module.exports = Questions = mongoose.model("questions", QuestionSchema);