Shell.addModule('Mapper', [], function () {

    var theMap = [],
    config = {};

    return {

        setMap : function (tx, ty, size, forEach) {

            // clear the map by seting it to an empty array.
            theMap = [];

            var i = 0,
            len = tx * ty;
            while (i < len) {

                theMap[i] = forEach();

                i++;
            }

            config.tx = tx;
            config.ty = ty;
            config.size = size;

        },

        // get the map cell position with the given pixle x, and y position
        getCellPos : function (x, y) {

            return {

                x : Math.floor(x / config.size),
                y : Math.floor(y / config.size)

            };

        },

        forAll : function (callBack) {

            var i = 0,
            len = theMap.length;
            while (i < len) {

                callBack.call(theMap[i]);

                i++
            }

        },

        forRange : function (sx, sy, ex, ey, callBack) {

            var startX = sx > ex ? ex : sx,
            startY = sy > ey ? ey : sy,
            endX = sx > ex ? sx : ex,
            endY = sy > ey ? sy : ey,
            y,
            x;

            y = startY;
            while (y <= endY) {

                x = startX;
                while (x <= endX) {

                    callBack.call(this.getTile(x, y));
                    x++;

                }
                y++;
            }
        },

        click : function (x, y) {

            var tx = Math.floor(x / config.size),
            ty = Math.floor(y / config.size),

            tile = this.getTile(tx, ty);

            console.log(tile.type);

        },

        getTile : function (ix, y) {

            // if single argument assume ix is a liniar index value
            if (y === undefined) {

                return theMap[ix];

                // else get by x, and y
            } else {

                return theMap[y * config.tx + ix];

            }

        },

        setTile : function (ix, wy, w) {

            // ix -- index or x
            // wy -- what or y
            // w -- what

            if (w === undefined) {

                theMap[ix] = wy;

            } else {

                theMap[wy * config.tx + ix] = w;

            }

        },

        getMap : function () {

            return theMap;

        },

        getConfig : function () {

            return config;

        }

    };

});
