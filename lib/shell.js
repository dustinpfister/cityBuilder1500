var Shell = (function () {

    var mod = [];

    return {

        addModule : function (id, depend, factory) {

            /*   ALERT! async support does not yet work, and may not ever.
             *   As of this writing I am only doing this to keep things neet.
             *   So for now assume that modules are being defined in order
             */
            var libs = [],
            i = 0,
            len = depend.length;
            while (i < len) {
                libs[i] = mod[depend[i]];
                i++;
            }

            // this should work (sync only) as lone as everything is in proper sync order
            mod[id] = factory.apply(this, libs);

        },

        getModules : function () {

            return mod;

        }

    };

}
    ());
