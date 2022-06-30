const {gql} = require('apollo-server');

const typeDefs = gql`
type User{
	id:ID!
	name: String!
	username: String
	age: Int!
	nationality: Nationality!
	friends:[User]
	favouriteMovies:[Movie]
}

type Movie{
	id:ID!
	name:String!
	yearOfPublication:Int!
	isInTheaters:Boolean!
}

type Query{
	users:[User!]!
	user(id:ID!): User!
	movies: [Movie!]!
	movie(name:String!): Movie!              

}
input updateUsernameInput{
	id:ID!
	newUsername: String!
}
input createUser{
	name: String!
	username: String!
	age: Int!
	nationality: Nationality = BRAZIL
	
}
type Mutation{
	createUser(input:createUser!): User
	updateUsername(input: updateUsernameInput!): User
	deleteUser(id: ID!): User
}


enum Nationality{
	CANADA
	BRAZIL
	INDIA
	GERMANY
	CHILE
}
`;

module.exports = {typeDefs}