import {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLSchema
} from 'graphql'

import { find, filter } from 'lodash'

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
    {
        id: 3,
        title: 'Pokemon',
        author: 'Me'
    }
]

const BookType = new GraphQLObjectType({
    name: 'BookType',
    fields: {
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        author: { type: GraphQLString }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        books: {
            type: new GraphQLList(BookType),
            resolve: () => books
        },
        book: {
            type: BookType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (_, args) => find(books, {id: args.id})
        }
    }
})

export default new GraphQLSchema({
    query: RootQuery
})