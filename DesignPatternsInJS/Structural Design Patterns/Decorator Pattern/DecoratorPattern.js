
var Component = function (parameterA) {
    this.propertyA = parameterA;
    this.propertyB = false;
}

Component.prototype.operationA = function () {
    this.propertyB = true;
};

Component.prototype.operationB = function () {
    this.propertyB = false;
};

var myComponent = new Component("Legacy component");
myComponent.operationA();
myComponent.operationB();



// Add functionnality to a legacy component (simple)
var componentDecorated = new Component("Legacy component");

componentDecorated.decorator = function (parameterA) {
    this.propertyA = parameterA;
};

componentDecorated.operationB = function () {
    this.decorator("Decorated component");
    Component.prototype.propertyB.call(this);
};

componentDecorated.operationB();



// Wrap a legacy component (with inheritance)
var ComponentWrapped = function (parameterA, parameterB) {

    Component.call(this, pameterA);

    this.propertyB = parameterB;
};

ComponentWrapped.prototype = Object.create(Component.prototype);    // If we modify the ComponentWrapped, 
                                                                    //      the original won't be modify.

ComponentWrapped.prototype.decorator = function (parameterA) {
    this.propertyA = parameterA;
};

componentWrapped.prototype.operationB = function () {
    this.decorator("Decorated component");
    Component.prototype.operationB.call(this);
};

var componentWrapped = new ComponentWrapped("Legacy component wrapped", true);

componentWrapped.operationB();




