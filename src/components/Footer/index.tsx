import IFooterProps from "./interfaces";
import './styles.scss';

function Footer ({isLoading, pcSelect ,result, resetGame}: IFooterProps) {

    const handlePcChoose =  () => {
        
        if (isLoading) {
            return  <h1 className="Result">MACHINE IS CHOOSING...</h1>
        } else if (pcSelect === 0) {
            return <h1 className="Result">MACHINE SELECTED ROCK</h1>
        }
        else if (pcSelect === 1) {
            return <h1 className="Result">MACHINE SELECTED PAPER</h1>
        }
        else if (pcSelect === 2) {
            return  <h1 className="Result">MACHINE SELECTED SCISSOR</h1>
        }
       
    } 

    const renderResult = () => {

        if(result === 1) {
            return  <h1 className="Result">YOU WIN</h1>;
        } else if( result === 3) {
            return  <h1 className="Result">DRAW</h1>;
        }

        return  <h1 className="Result">YOU LOOSE</h1>
    }

    return (
        <footer className="Footer">
            {handlePcChoose()}
            {result !== 0 && renderResult()}
            {result !== 0 &&  <button onClick={resetGame}>PLAY AGAIN</button>}
        </footer>
    );
}

export default Footer;