const router = require('../src/request_api')
const config = require('../config')

Request.prototype.getRequest =  function(){
    return router.getRequest(config.urlbase.url)
}