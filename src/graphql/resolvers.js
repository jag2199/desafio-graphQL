import { getHome, postHome, updateHome, deleteHome } from "../controllers/home";

const resolvers = {
    Query: {
        showProducts: () => {
            return getHome();
        },
    },
    Mutation: {
        addProduct: (_, { input }) => {
            return postHome({ ...input });
        },
        updateProduct: (_, { id, input }) => {
            return updateHome(id, { ...input });
        },
        deleteProduct: (_, { id }) => {
            return deleteHome(id);
        },
    },
}

export default resolvers