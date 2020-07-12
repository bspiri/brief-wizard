const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: {
		type: String,
		required: false, //true
	},
	password: {
		type: String,
		required: false,
	},
	brief: {
		type: [Object],
		required: true,
	},

	// brief: [{
	//   name: {
	//     type: String,
	//     required: true
	//   },
	//   slug: {
	//     type: String,
	//     required: true
	//   },
	//   pageTitle: {
	//     type: String,
	//     required: true
	//   },
	//   category: {
	//     type: String,
	//     required: true
	//   },
	//   url: {
	//     preview: {
	//       type: String,
	//       required: true
	//     },
	//     custom: {
	//       type: String,
	//       required: true
	//     }
	//do we still need both preview and custom?
	//   },
	//   questions: [{
	//     question: {
	//       type: String,
	//       required: true
	//     },
	//     answer: {
	//       type: [String],
	//       required: true
	//     }
	//   }]
	// }]
});


UserSchema.set('timestamps', true);

module.exports = User = mongoose.model("users", UserSchema);