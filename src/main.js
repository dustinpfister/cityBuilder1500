Shell.addModule('Main', ['Render', 'Control', 'Game', 'Zone'], function (Render, Control, Game, Zone) {

    var currentState = 'start',

    state = {

        start : function () {

            Game.newCity();

            Render.appendTo('game_container');

            Control.attach();

            Control.setMode('game');
            currentState = 'run';
        },

        run : function () {}

    },

    loop = function () {

        requestAnimationFrame(loop);

        state[currentState]();
        Render.drawState(currentState);
    };

    loop();

    return {

        getState : function () {

            return currentState;

        }

    };

});
