const { expect } = require("chai");
const config = request("../config.js")

Validate.prototype.validarQtdCaracter = function (txt, count) {
    var value = txt.length;
    if(value == count){
        return true;
    }else{
        return false;
    }
};

Validate.prototype.dataMenorQueDataAtual = function (data){
    const dataAtual = new Date();
    if(dataAtual <= data){
        return true;
    }
};

Validate.prototype.dataMaiorQueDataAtual = function (data){
    const dataAtual = new Date();
    if(dataAtual >= data){
        return true;
    }
};

Validate.prototype.getValidateRequest = function (request){
    expect(request.statusCode, "Deve retornar status 200").to.eql(config.HTTP.OK)
}



module.exports = Validate