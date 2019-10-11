export default `
    type Post {
        id: ID!
        title: String
        content: String!
        authorId: ID!
        author: Author
    }
    type Query {
        post(id: ID!): Post
        posts: [Post]
    }
    type Mutation {
        createPost(title: String, content:String!, authorId: ID!): Post!
        updatePost(id: ID!, title: String, content:String!): [Int!]!
        deletePost(id: ID!): Int!
    }
`;
