import { mergeResolvers } from 'merge-graphql-schemas';
import clientResolver from './resolver/authorResolver';
import productResolver from './resolver/postResolver';

const resolvers = [
    clientResolver,
    productResolver,
];

export default mergeResolvers(resolvers);
