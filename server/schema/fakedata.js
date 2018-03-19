const { makeExecutableSchema } = require('graphql-tools');
import { find, filter } from 'lodash';

// Some fake data
const books = [
    {
        id: 1,
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
    },
    {
        id: 2,
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

const typeDefs = `
    type Book { title: String, author: String, id: Int }
    type Query { 
        books: [Book]
        book(id: Int): Book
    }
`;

const resolvers = {
    Query: { 
        books: () => books,
        book: (_, obj) => find(books, {id: obj.id})
    }
};

export default makeExecutableSchema({
    typeDefs,
    resolvers
})