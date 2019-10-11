export default `
    type Author {
        id: Int!
        firstName: String!
        lastName: String!
        posts: [Post!]!
    }
    type Query {
        author(id: Int!): Author
        authors: [Author]
    }
`
