/**
 * # Autoplay code
 * Copyright(c) 2015 Stefano Balietti
 * MIT Licensed
 *
 * Handles bidding, and responds between two players automatically.
 *
 * http://www.nodegame.org
 */

module.exports = function(treatmentName, settings, stager, setup, gameRoom) {

    var game;

    game = gameRoom.getClientType('player');
    // game.env.auto_disconnect = true;
    game.env.auto = true;
    game.env.allowTimeup = true;

    game.nodename = 'autoplay';

    return game;
};
