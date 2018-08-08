
// Component to observe
var Component = function (data) {
    this.operationTrigger = function () { }
}
// Observer
var componentThatObserve = function () {
    this.operationOnNotify = function (data) { };
};



// ObserverList
function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj);
};

ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};

ObserverList.prototype.count = function () {
    return this.observerList.length;
};

ObserverList.prototype.removeAt = function (index) {
    this.observerList.splice(index, 1);                 // Remove 1 item on the index
};

ObserverList.prototype.indexOf = function (obj, startIndex) {
    var i = startIndex;

    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }

    return -1;
};



// Observable Component
var ObservableComponent = function (data) {
    Component.call(this, data);
    this.observers = new ObserverList();
};

ObservableComponent.prototype.addObserver = function (observer) {
    this.observers.add(observer);
};

ObservableComponent.prototype.notify = function (context) {
    var observerCount = this.observers.count();

    for (var i = 0; i < observerCount; i++) {
        this.observers.get(i)(context);
    }
};

ObservableComponent.prototype.operationTrigger = function () {

    this.notify(this);                                  // Notify observers
    Component.prototype.operationTrigger.call(this);    // Do as usual
};

ObservableComponent.prototype.removeObserver = function (observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
};





//var component = new Component();              // Was
var component = new ObservableComponent();      // To
var cto = new componentThatObserve();

component.addObserver(cto.operationOnNotify);
component.operationTrigger();

component.removeObserver(cto);