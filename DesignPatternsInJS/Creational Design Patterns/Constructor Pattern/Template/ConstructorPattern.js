
function Component(propertyA) {
    
    this.PropertyA = propertyA;
    this.PropertyB = false;
}

Component.prototype.OperationA = function () {
    this.PropertyB = true;
};

Component.prototype.OperationB = function () {
    this.PropertyB = false;
};


var component = new Component("componentName");

component.OperationA();
component.OperationB(); 