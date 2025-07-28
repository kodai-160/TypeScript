/**
 * @type {import('fastify-plugin').FastifyPlugin}
 */
const fastifyPlugin = require('fastify-plugin')

/**
 * @param {FastifyInstance} fastify Encapsulated Fastify instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
async function dbConector(fastify, options) {
    fastify.register(require('@fastify/mongodb'), {
        url: 'mongodb://localhost:27017/test_database'
    })
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(dbConector)