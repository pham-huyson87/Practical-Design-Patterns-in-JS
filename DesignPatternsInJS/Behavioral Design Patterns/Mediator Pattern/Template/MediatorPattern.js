

var mediator = (function () {
    
    var channels = {};

    var subscribe = function (channel, context, func) {
        
        if (!this.channels[channel]) {
            this.channels[channel] = [];
        }

        this.channels[channel].push({
            context: context,
            func: func
        });
    }
    
    var publish = function (channel) {

        if (!this.channels[channel]) {
            return false;
        }

        var args = Array.prototype.slice.call(arguments, 1);

        for (var i = 0; i < this.channels[channel][i]; i++) {
            var subscriber = this.channels[channel][i];
            subscriber.func.apply(this, args)
        }
    }

    return {
        channels: {},
        subscribe: subscribe,
        publish: publish
    };

}());



var SubcriberComponent = function () {
    this.operationOnPublish = function () { };
};

var Component = function () {
    this.operation = function () { };
};



var component = new Component();
var subcriberComponent = new SubcriberComponent();

mediator.subscribe('communicationChannel', subcriberComponent, subcriberComponent.operationOnPublish);

component.operation = function () {
    mediator.publish('communicationChannel', this);
    component.prototype.operation.call(this);
}
component.operation();

