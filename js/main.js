(function(window) {


      $('.L').click(function() {
        for (chess.counter; chess.counter < chess.game.length)
      });


      $('.N').click(function() {
      if (chess.counter < chess.game.length) {
        chess.move(chess.game[chess.counter]);
        chess.counter = chess.counter + 1;
          }
      });

      $('.P').click(function() {
        chess.counter = (chess.counter + 1) % chess.game.length;
        chess.move(chess.reverseGame[chess.counter]);
      });
})(window);

// Stolen shamlessly from sunday's work group.
