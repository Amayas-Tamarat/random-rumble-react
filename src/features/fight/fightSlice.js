import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1, turn: false },
    { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2, turn: false },
    { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, turn: false },
    { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4, turn: false },
  ],

  monster: {
    pv: 800,
    pvMax: 800
  }
}

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      state.monster.pv -= action.payload.monsterDecreasePv;
    },
    hitBack: (state, action) => {
      const { playerHit, playerDecreasePv } = action.payload;
      const playerToUpdate = state.players[playerHit];
      if (playerToUpdate && playerToUpdate.pv > 0) {
        playerToUpdate.pv -= playerDecreasePv;
      }
    },
    togglePlayerTurn: (state, action) => {
      const playerId = action.payload;
      state.players[playerId].turn = !state.players[playerId].turn;
    },
    resetPlayerTurns: (state) => {
      const allPlayersTurn = state.players.every((player) => player.turn === true);

      if (allPlayersTurn) {
        state.players.forEach((player) => {
          player.turn = false;
        });
      }
    },
  },
});

export const { hitMonster, hitBack, togglePlayerTurn, resetPlayerTurns } = fightSlice.actions

export default fightSlice.reducer