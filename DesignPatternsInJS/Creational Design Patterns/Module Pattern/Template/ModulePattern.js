
var module = function () {
    
    var property = {};

    var operationA = function () { return true; }
    var operationB = function (number) { return number * 3; }

    return {
        operationA: operationA,
        operationB: operationB
    }
}

var moduleA = module();

moduleA.operationA();
moduleA.operationB(12);