import db from '../../models';

export default {
    // Query
    Query: {
        posts: (parent, args, info) => db.post.findAll(),
        post: (parent, {id}, info) => db.post.findByPk(id),
    },
    // author: (parent, { id }, info) => db.author.findByPk(id),
    // Mutation
    Mutation: {
        createPost: (parent, {title, content, authorId}, info) =>
            db.post.create({
                title: title,
                content: content,
                authorId: authorId
            }),
        updatePost: (parent, {title, content, id}, info) =>
            db.post.update(
                {
                    title: title,
                    content: content
                },
                {
                    where: {
                        id: id
                    }
                }
            ),
        deletePost: (parent, {id}, info) =>
            db.post.destroy({
                where: {
                    id: id
                }
            }),
    },
    Author: {
        posts : (parent, args, context, info) => parent.getPosts(),
        // firstName: (parent, args, context, info) => parent.firstName,
        // lastName: (parent, args, context, info) => parent.lastName,
    },
}
