import { graphqlHTTP } from 'express-graphql'
import { Router } from 'express'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { typeDefs } from "./typeDefs.js"
import resolvers from "./resolvers.js"

const router = Router()

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

router.use("/", graphqlHTTP({
    schema: schema
}))