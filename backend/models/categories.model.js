const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
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
	}
});

CategorySchema.set('timestamps', true);

module.exports = Category = mongoose.model("categories", CategorySchema);
