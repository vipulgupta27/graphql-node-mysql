import db from '../../models';

export default {
    Query: {
        authors: (parent, args,  info) => db.author.findAll(),
        author: (parent, { id }, info) => db.author.findByPk(id)
    },
    Post: {
        author: (parent, args, context, info) => parent.getAuthor()
    },
}
