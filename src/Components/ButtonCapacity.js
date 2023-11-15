import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hitBack, hitMonster } from "../features/fight/fightSlice";

const ButtonCapacity = ({ playerId }) => {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.fight.players[playerId - 1]);

  const combat = () => {
    dispatch(hitMonster({ 
        monsterDecreasePv: 5
    }));
    dispatch(hitBack({
        playerHit: playerId-1,
        playerDecreasePv: 5
    }))
  };

  return (
    <button
      type="button"
      onClick={() => combat()}
      className="btn btn-success material-tooltip-main "
      disabled={player.pv <= 0} 
    >
      hit
      <i className="fas fa-bomb"></i> 5<i className="fas fa-fire-alt"></i> - 5
    </button>
  );
};

export default ButtonCapacity;