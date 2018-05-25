
var Component = (function () {

    var component;

    function createComponent() {
        var component = new Object();
        return component
    }

    return {
        getInstance: function () {
            if (!component) {
                component = createComponent();
            }
            return component;
        }
    };
})();


var component1 = Component.getInstance();