import "./styles.scss";
import Rock from "../../assets/png/rock.png";
import Paper from "../../assets/png/paper.png";
import Scissor from "../../assets/png/scissor.png";
import IBoardProps from "./interfaces";

function Board({ playerSelect, pcSelect, handleSelectOption }: IBoardProps) {

  const renderPcTurn = () => {
    if (playerSelect === -1) {
      return;
    }
    if (pcSelect === 0) {
      return (
        <div className="Item Rock">
          <img src={Rock} alt="game-icon" />
        </div>
      );
    } else if (pcSelect === 1) {
      return (
        <div className="Item Paper">
          <img src={Paper} alt="game-icon" />
        </div>
      );
    } else if (pcSelect === 2) {
      return (
        <div className="Item Scissor">
          <img src={Scissor} alt="game-icon" />
        </div>
      );
    }

    return <div className="Item Loading" />;
  };

  const renderTurn = () => {
    if (playerSelect === 0 ) {
      return (
        <div className="Item Rock">
          <img src={Rock} alt="game-icon" />
        </div>
      );
    } else if (playerSelect === 1) {
      return (
        <div className="Item Paper">
          <img src={Paper} alt="game-icon" />
        </div>
      );
    }

    return (
      <div className="Item Scissor">
        <img src={Scissor} alt="game-icon" />
      </div>
    );

  };

  return (
    <div className="Board">
      {playerSelect === -1 ? (
        <>
          <div className="Item Rock" onClick={() => handleSelectOption(0)}>
            <img src={Rock} alt="game-icon" />
          </div>

          <div className="Item Paper" onClick={() => handleSelectOption(1)}>
            <img src={Paper} alt="game-icon" />
          </div>

          <div className="Item Scissor" onClick={() => handleSelectOption(2)}>
            <img src={Scissor} alt="game-icon" />
          </div>
        </>
      ) : (
        <>
        {renderTurn()}
        {renderPcTurn()}
        </>
      )}
    </div>
  );
}

export default Board;
