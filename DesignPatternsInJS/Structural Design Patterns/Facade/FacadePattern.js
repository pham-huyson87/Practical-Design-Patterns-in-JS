
var LegacyService = function () {

    return {
        complete: function (task) { },
        setCompleteDate: function (task) { },
        notifyCompletion: function (task, user) { },
        save: function (task) { }
    };
}();

var myTask = new Task({
    name: 'MyTask',
    priority: 1,
    project: 'Course',
    user: 'Jon',
    completed: false
});


// The Facade
var TaskServiceWrapper = function () {

    var completeAndNotify = function (task) {

        LegacyService.complete(task);

        if (task.complete == true) {
            LegacyService.setCompleteDate(task)
            LegacyService.notifyCompletion(task, task.user);
            LegacyService.save(task);
        }
    }

    return {
        completeAndNotify: completeAndNotify
    };
}();


// The use of the Facade
TaskServiceWrapper.completeAndNotify(task);