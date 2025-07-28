const { default: fastify } = require('fastify')

/**
 * @type {import('fastify').RouteShorthandOptions}
 * @const
 */
const opts = {
    schema: {
        body: {
            type: 'object',
            properties: {
                someKey: { type: 'string' },
                someOtherKey: { type: 'number' }
            }
        }
    }
}

fastify.post('/', opts, async (request, reply) => {
    return { hello: 'world' }
})