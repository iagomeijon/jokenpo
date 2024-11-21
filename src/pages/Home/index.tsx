

import useGame from "../../hooks/useGame";
import Score from "../../components/Score";
import Board from "../../components/Board";
import Footer from "../../components/Footer";
import "./styles.scss";


function Home() {
 
  const {states, actions} = useGame();
  const {isLoading, result, scoreValue, pcSelect, playerSelect } = states;
  const {handleSelectOption, resetGame} = actions;

  return (
    <div className="Home">
      <Score currentScore={scoreValue} />
      <Board
        handleSelectOption={handleSelectOption}
        pcSelect={pcSelect}
        playerSelect={playerSelect}
      />
      <Footer
        resetGame={resetGame}
        isLoading={isLoading}
        result={result}
        pcSelect={pcSelect}
      />
    </div>
  );
}

export default Home;
