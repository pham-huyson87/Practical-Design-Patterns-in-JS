
// Original
var Component = function (data) {
    this.uniqueProperty = data.uniqueProperty;
    this.propertyA = data.propertyA;
    this.propertyB = data.propertyB;
    this.propertyC = data.propertyC;
    this.propertyD = data.propertyD;
    this.propertyE = data.propertyE;
}


// With the flyweight
var ComponentV2 = function (data) {
    this.uniqueProperty = data.uniqueProperty;
    this.flyweight = FlyweightFactory.get(data.propertyA,
                                            data.propertyB,
                                            data.propertyC,
                                            data.propertyD,
                                            data.propertyE);
}


function Flyweight(propertyA, propertyB, propertyC, propertyD, propertyE) {
    this.propertyA = propertyA;
    this.propertyB = propertyB;
    this.propertyC = propertyC;
    this.propertyD = propertyD;
    this.propertyE = propertyE;
}

var FlyweightFactory = function() {
    
    var flyweights = {};

    var get = function (propertyA, propertyB, propertyC, propertyD, propertyE){

        if (!flyweights[propertyA + propertyB + propertyC + propertyD + propertyE]) {

            flyweights[propertyA + propertyB + propertyC + propertyD + propertyE] =
                new Flyweight(propertyA, propertyB, propertyC, propertyD, propertyE);
        }
        return flyweights[propertyA + propertyB + propertyC + propertyD + propertyE];
    };

    var getCount = function () {
        var count = 0;
        for (var f in flyweights) count++;
        return count;
    }

    return {
        get: get,
        getCount: getCount
    }
}()