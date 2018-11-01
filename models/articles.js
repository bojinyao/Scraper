var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articlesSchema = new mongoose.Schema({
	title: {
		type: String
	},
	imgLink: {
		type: String
	},
	storyLink: {
		type: String
	},
	summary: {
		type: String
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	comments: {
		type: Schema.Types.ObjectId,
		ref: "Comments"
	}
});

var Articles = mongoose.model("Articles", articlesSchema);

module.exports = Articles;
