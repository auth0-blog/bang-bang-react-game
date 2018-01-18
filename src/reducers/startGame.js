const startGame = state => ({
  ...state,
  gameState: {
    ...state.gameState,
    started: true,
  },
});

export default startGame;
