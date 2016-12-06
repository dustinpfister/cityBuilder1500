Shell.addModule('Zone', [], function () {

    var Zone = function (type) {

        this.type = type;
        this.selected = false;

    };

    Zone.prototype = {

        select : function (bool) {

            if (bool === undefined) {
                bool = true;
            }

            this.select = bool;

        }

    };

    // return the Zone constructor function
    return Zone;

});
