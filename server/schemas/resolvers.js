const { User, Movie } = require('./models');

const resolvers = {
	Query: {
		// Query resolvers for movies
		movies: async () => {
			return Movie.find().populate('user');
		},
		movie: async (parent, {
			_id
		}) => {
			return Movie.findById(_id).populate('user');
		},
		// Query resolvers for users
		users: async () => {
			return User.find().populate('movies');
		},
		user: async (parent, {
			_id
		}) => {
			return User.findById(_id).populate('movies');
		},
		me: async (parent, args, context) => {
			if (context.user) {
				return User.findById(context.user._id).populate('movies');
			}
			throw new Error('You need to be logged in!');
		}
	},
	Mutation: {
		// Mutation resolvers for movies
		addMovie: async (parent, args, context) => {
			if (context.user) {
				const newMovie = await Movie.create({
					...args,
					user: context.user._id
				});
				await User.findByIdAndUpdate(context.user._id, {
					$push: {
						movies: newMovie._id
					}
				});
				return newMovie;
			}
			throw new Error('You need to be logged in!');
		},
		updateMovie: async (parent, {
			_id,
			...args
		}, context) => {
			if (context.user) {
				const updatedMovie = await Movie.findByIdAndUpdate(_id, {
					...args
				}, {
					new: true
				});
				return updatedMovie;
			}
			throw new Error('You need to be logged in!');
		},
		deleteMovie: async (parent, {
			_id
		}, context) => {
			if (context.user) {
				await Movie.findByIdAndDelete(_id);
				await User.findByIdAndUpdate(context.user._id, {
					$pull: {
						movies: _id
					}
				});
				return true;
			}
			throw new Error('You need to be logged in!');
		},
		// Mutation resolvers for users
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);
			return {
				user,
				token
			};
		},
		login: async (parent, {
			email,
			password
		}) => {
			const user = await User.findOne({
				email
			});
			if (!user) {
				throw new Error('Incorrect email or password!');
			}
			const correctPw = await user.isCorrectPassword(password);
			if (!correctPw) {
				throw new Error('Incorrect email or password!');
			}
			const token = signToken(user);
			return {
				user,
				token
			};
		},
	}
};

module.exports = resolvers;