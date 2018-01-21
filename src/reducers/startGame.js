const startGame = (state, initialState) => ({
  ...state,
  gameState: {
    ...initialState.gameState,
    started: true,
  },
});

export default startGame;
