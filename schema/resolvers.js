const {UserList,MovieList} = require('../FakeData');
const _ = require("lodash");
//resolves any api calls
const resolvers =
{
	Query:{
		users(){
			return UserList
		},
		user: (parent,args) => {
				const id = args.id;
				const user = _.find(UserList, {id: Number(id)}) // string should be converted to int using Number method
				return user;

		},
		movies()
		{
			return MovieList
		},
		movie: (parent,args) => {
			const name = args.name;
			const user = _.find(MovieList, {name})
			return user
		}


	},
	User: {
		favouriteMovies: () => 
		{
			return _.filter(MovieList, (movie) => movie.yearOfPublication > 2000)
		}
	},
	Mutation:{
		createUser(parent,args) {
			const user = args.input;
			const lastId = UserList[UserList.length - 1].id;
			user.id = lastId + 1;
			UserList.push(user)
		},
		 updateUsername: (parent, args) => {
     	const {id, newUsername} = args.input;
     	let updateUsername;
     	UserList.forEach((user) => {
     		if (user.id === Number(id))
     		{
     			user.username = newUsername
     			updateUsername = user
     		}
     	})
     	return updateUsername
    },
	}
}
module.exports = {resolvers}