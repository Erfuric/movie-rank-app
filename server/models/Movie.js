const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	releaseYear: {
		type: Number
	},
	rating: {
		type: Number
	},
	description: {
		type: String
	},
	imageUrl: {
		type: String
	},
	listId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'List'
	},
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;