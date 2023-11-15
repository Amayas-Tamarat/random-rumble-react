import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    players :[
        { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
        { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
        { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
        { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 },
    ],

    monster: {
        pv : 800,
        pvMax : 800
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
    },
  });
  
  export const { hitMonster, hitBack } = fightSlice.actions

export default fightSlice.reducer