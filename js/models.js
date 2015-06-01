(function(window) {


  var game = [
    ['.rank-2', '.file-d', '.rank-4', '.file-d', 'whitepawn'],
    ['.rank-8', '.file-g', '.rank-6', '.file-f', 'blackknight'],
    ['.rank-2', '.file-c', '.rank-4', '.file-c', 'whitepawn'],
    ['.rank-7', '.file-e', '.rank-6', '.file-e', 'blackpawn'],
    ['.rank-2', '.file-g', '.rank-3', '.file-g', 'whitepawn'],
    ['.rank-7', '.file-d', '.rank-5', '.file-d', 'blackpawn'],
    ['.rank-1', '.file-f', '.rank-2', '.file-g', 'whitebishop'],
    ['.rank-8', '.file-f', '.rank-7', '.file-e', 'blackbishop'],
    ['.rank-1', '.file-g', '.rank-3', '.file-f', 'whiteknight']
  ];

  var reverseGame = [
    ['.rank-3', '.file-f', '.rank-1', '.file-g', 'whiteknight'],
    ['.rank-7', '.file-e', '.rank-8', '.file-f', 'blackbishop'],
    ['.rank-2', '.file-g', '.rank-1', '.file-f', 'whitebishop'],
    ['.rank-5', '.file-d', '.rank-7', '.file-d', 'blackpawn'],
    ['.rank-3', '.file-g', '.rank-2', '.file-g', 'whitepawn'],
    ['.rank-6', '.file-e', '.rank-7', '.file-e', 'blackpawn'],
    ['.rank-4', '.file-c', '.rank-2', '.file-c', 'whitepawn'],
    ['.rank-6', '.file-f', '.rank-8', '.file-g', 'blackknight'],
    ['.rank-4', '.file-d', '.rank-2', '.file-d', 'whitepawn']
  ];


  var counter = -1;

/**
 *@param{Array} whichMove - 
 *@
 */
  function move(whichMove){
      $(whichMove[0] + ' > ' + whichMove[1]).removeClass(whichMove[4]);
      $(whichMove[2] + ' > ' + whichMove[3]).addClass(whichMove[4]);
  };

  window.chess = {
      "game": game,
      "reverseGame": reverseGame,
      "move": move,
      "counter": counter
    };


})(window);
// shamlessly Stolen
