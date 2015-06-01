(function(window) {


      $('.L').click(function() {
        for (i = 0; i < chess.game.length; i++) {
          chess.move(chess.game[i]);
        };
      });


      $('.N').click(function() {
        chess.counter = (chess.counter + 1) % chess.game.length;
      });

      $('.P').click(function() {
        chess.counter = (chess.counter + 1) % chess.game.length;
        chess.move(chess.reverseGame[chess.counter]);
      });
})(window);

// Stolen shamlessly from sunday's work group.
