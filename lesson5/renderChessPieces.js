'use strict';

(function () {

  let startPosition = {
    'a1': '#rook_white',
    'b1': '#knight_white',
    'c1': '#bishop_white',
    'd1': '#queen_white',
    'e1': '#king_white',
    'f1': '#bishop_white',
    'g1': '#knight_white',
    'h1': '#rook_white',
    'a2': '#pawn_white',
    'b2': '#pawn_white',
    'c2': '#pawn_white',
    'd2': '#pawn_white',
    'e2': '#pawn_white',
    'f2': '#pawn_white',
    'g2': '#pawn_white',
    'h2': '#pawn_white',
    'a7': '#pawn_white',
    'b7': '#pawn_black',
    'c7': '#pawn_black',
    'd7': '#pawn_black',
    'e7': '#pawn_black',
    'f7': '#pawn_black',
    'g7': '#pawn_black',
    'h7': '#pawn_black',
    'a8': '#rook_black',
    'b8': '#knight_black',
    'c8': '#bishop_black',
    'd8': '#queen_black',
    'e8': '#king_black',
    'f8': '#bishop_black',
    'g8': '#knight_black',
    'h8': '#rook_black'
  };

  let createChessPieces = function (value) {
    let $use = window.renderChessboard.createEl('use');
    $use.setAttribute('xlink:href', value);
    let $svg = window.renderChessboard.createEl('svg', 'chess-pieces');
    $svg.appendChild($use);
    return $svg;
  };

  let renderChessPieces = function (data, board) {
    for (let key in data) {
      if (data.hasOwnProperty(key)){
        let el = createChessPieces(data[key]);
        board[key].appendChild(el);
      }
    }
  };

  renderChessPieces(startPosition, window.renderChessboard.chessboard);

})();
