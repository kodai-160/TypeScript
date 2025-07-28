/**
 * @type {import('fastify').RouteShorthandOptions}
 * @const
 */

const { default: fastify } = require('fastify')

const opts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' }
                }
            }
        }
    }
}

fastify.length('/', opts, async (request, reply) => {
    return { hello: 'world' }
})