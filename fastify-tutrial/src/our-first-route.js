/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify Encapsulated Fastify instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */

async function routes(fastify, options) {
    const collection = fastify.mongo.db.collection('test_collection')

    fastify.get('/', async (request, reply) => {
        return { hello: 'world' }
    })

    fastify.get('/animals', async (request, reply) => {
        const result = await collection.find().toArray()
        if (result.length === 0) {
            throw new Error('No animals found')
        }
        return result
    })

    fastify.get('/animals/:animal', async (request, reply) => {
        const result = await collection.findOne({ name: request.params.animal })
        if (!result) {
            throw new Error('Invalid value')
        }
        return result
    })

    const animalBodySchema = {
        type: 'object',
        required: ['animal'],
        properties: {
            animal: { type: 'string' },
        },
    }

    const schema = {
        body: animalBodySchema,
    }

    fastify.post('/animals', { schema }, async (request, reply) => {
        // we can use the `request body` object to get the data sent by the client
        const result = await collection.insertOne({ animal: request.body.animal })
    })
}

module.exports = routes