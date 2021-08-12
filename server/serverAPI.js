const router = require('../src/request_api')
const config = require('../config')

Request.prototype.getRequest =  function(){
    try {
        return router.getRequest(config.urlbase.url)    
    } catch (error) {
        console.log("Erro no request GET" + error)
    }
    
}

Request.prototype.postRequest =  function(config){
    try {
        return router.postRequest(config.urlbase.url, url, body)    
    } catch (error) {
        console.log("Erro no request POST" + error)    
    }
    
}




module.exports = Request 