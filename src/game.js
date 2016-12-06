Shell.addModule('Game', ['Mapper', 'Zone'], function (Mapper, Zone) {

    var conf = {

        width : 640,
        height : 480,

        mapX : 50,
        mapY : 50,
        mapWidth : 320,
        mapHeight : 320,
        mapCellWidth : 10,
        mapCellHeight : 10,
        mapCellSize : 32,

        faceX : 400,
        faceY : 50,
        faceWidth : 96,
        faceHeight : 320,

        buildIndex : 1 // the current zone type to build

    },

    zoneNames = ['unzoned', 'com', 'res', 'ind', 'road'],

    actionState = {

        down : false,
        cellSX : 0,
        cellSY : 0,
        cellX : 0,
        cellY : 0

    };

    return {

        actionDown : function (x, y) {

            var cellPos = Mapper.getCellPos(x, y);

            // set starting cell pos
            actionState.cellSX = cellPos.x;
            actionState.cellSY = cellPos.y;

            // set current cell pos
            actionState.cellX = cellPos.x;
            actionState.cellY = cellPos.y;

            console.log(cellPos);
            actionState.down = true;
        },

        actionMove : function (x, y) {

            if (actionState.down) {

                var cellPos = Mapper.getCellPos(x, y);

                // set current cell pos
                actionState.cellX = cellPos.x;
                actionState.cellY = cellPos.y;

                Mapper.forAll(function () {
                    this.selected = false;
                });
                Mapper.forRange(
                    actionState.cellSX, actionState.cellSY,
                    actionState.cellX, actionState.cellY,
                    function () {

                    this.selected = true;

                });

                //var zone = Mapper.getTile(cellPos.x,cellPos.y);
                //zone.selected = true;

            }

        },

        actionUp : function (x, y) {

            actionState.down = false;
            Mapper.forRange(
                actionState.cellSX, actionState.cellSY,
                actionState.cellX, actionState.cellY,
                function () {

                if (this.selected) {

                    this.type = zoneNames[conf.buildIndex];

                }

                this.selected = false;

            });

        },

        newCity : function () {

            Mapper.setMap(
                conf.mapCellWidth, conf.mapCellHeight,
                conf.mapCellSize,
                function () {

                return new Zone(zoneNames[0]);

            });

        },

        getConf : function () {

            return conf;

        }

    };

});
