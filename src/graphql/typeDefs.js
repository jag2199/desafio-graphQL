export const typeDefs = `
type Query {
    showProducts: [Product]
}
type Mutation{
    addProduct(input:ProductInput): Product
    updateProduct(id:ID,input:ProductInput): Product
    deleteProduct(id:ID): Product
}
type Product{
    _id:ID
    title:String 
    descripcion:String 
    timestamp: String 
    price: Int
    url: String
}
`