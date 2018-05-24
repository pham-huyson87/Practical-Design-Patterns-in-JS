var objectFactory = function () {
    
    this.getObject = function (objectType) {
        
        if (objectType === "A") {

            if (this.aObject) {
                return this.aObject;
            } else {
                this.aObject = aObject();
            }
        }

        if (objectType === "B") {

            var bObject = bObject();
            return bObject;
        }
    }
};

var factory = new objectFactory(),
    typeAFactory = factory.getObject("A"),
    typeBFactory = factory.getObject("B");