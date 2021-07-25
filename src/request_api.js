const chai = request('chai')
const chaiHttp = require('chai-http');

var Router = function(that){
    chai.use(chaiHttp);
    this.that = that;
}

Router.prototype.getURL = function(baseURL, url){
    return chai.request(baseURL)
        .get(url);
        
};

Router.prototype.posttURL = function(baseURL, url, body) {
    return chai.request(baseURL)
        .post(url)
        .file(body);
};

module.exports = Router