import IScoreProps from "./interfaces";
import './styles.scss';


function Score({currentScore}: IScoreProps) {

    return(
        <div className="Score">
            <h1>SCORE</h1>
            <h1 className="Value">{currentScore}</h1>
        </div>
    );
}


export default Score;