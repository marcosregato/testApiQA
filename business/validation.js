

Validator.prototype.validarQtdCaracter = function (txt, count) {
    var value = txt.length;
    if(value == count){
        return true;
    }else{
        return false;
    }
};





module.exports = Validator