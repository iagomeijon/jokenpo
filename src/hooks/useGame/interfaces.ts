export default interface IUseGame {
    states: {
        scoreValue: number,
        isLoading: boolean,
        result: number,
        pcSelect: number,
        playerSelect: number
    }, 
    actions: {
        resetGame: () => void;
        handleSelectOption: (value: number) => void;
    }
}