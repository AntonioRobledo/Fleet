const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Vehicle {
		_id: ID
		make: String
		model: String
		year: Int
		license: String
		color: String
		numberOfSeats: Int
		transmission: String
		engine: String
		class: String
		image: String
	}

	type User {
		_id: ID
		username: String
		email: String
		password: String
	}

	type Reservation {
		id: ID!
		carType: String!
		dropOffDate: String!
		returnDate: String!
		userId: ID!
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		me: User
		getAllUsers: [User!]
		vehicles: [Vehicle]
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		addVehicle(
			make: String!
			model: String!
			year: Int!
			license: String!
			color: String!
			numberofSeats: Int!
			transmission: String!
			engine: String!
			vehicleClass: String!
			image: String!
		): User
		removeVehicle(license: ID!): Vehicle
		createReservation(
			carType: String!
			dropOffDate: String!
			returnDate: String!
			userId: ID!
		): Reservation!
	}
`;

module.exports = typeDefs;
