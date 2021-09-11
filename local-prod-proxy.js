let localProdProxy = require('http-proxy-middleware');
let fallback = require('connect-history-api-fallback');

module.exports = {
    server: {
        middleware: {
            1: localProdProxy('/api', {
                target: 'http://localhost:9999',
                autoRewrite : {
                    '^/api': ''
                }
            }),
            2: fallback({index: '/t-tech/index.html', verbose:true})
        }
    }
}