
var component = {

    models: {},
    commands: [],
    
    commandA: function (id) { },
    commandB: function (model) {
        component.models[model.id] = model;
    },

    replay: function () {
        for (var i = 0; i < component.commands.length; i++) {
            var command = component.commands[i];

            component.executeNoLog(command.name, command.obj);
        }
    }

};


component.execute = function (commandName) {

    var args = Array.prototype.slice.call(arguments, 1);

    component.commands.push({
        name: commandName,
        obj: args[0]
    });

    if (component[commandName]) {
        return component[commandName].apply(component, args);
    }
    return false;
};

component.executeNoLog = function (commandName) {

    var args = Array.prototype.slice.call(arguments, 1);

    if (component[commandName]) {
        return component[commandName].apply(component, args);
    }
    return false;
};



component.execute('commandA', 1);
component.execute('commandB', { id: 2 });
component.execute('commandA', 2);
component.execute('commandB', { id: 3 });
component.execute('commandA', 3);

component.models = {};

component.replay();


