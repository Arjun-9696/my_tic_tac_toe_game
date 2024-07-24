import Square from './Square';

const Grid = ({ gameState, onSquareClick, setGameState, initialState, scoreX, scoreO, playerX, playerO }) => {
    const calculateWinningLine = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                gameState[a] &&
                gameState[a] === gameState[b] &&
                gameState[a] === gameState[c]
            ) {
                return lines[i];
            }
        }
        return null;
    };

    const winningLine = calculateWinningLine();

    return (
        <div className="bg-gray-800 w-full min-h-screen flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
            <h1 className="text-center">TIC TAC TOE GAME</h1>
            <div className="text-white text-center text-[24px] mb-14 gap-8">
                <p>{playerX} vs {playerO}</p>
                <p>Score X : {scoreX} | Score O : {scoreO}</p>
            </div>
            <div className="flex flex-col">
                {[0, 1, 2].map(i => (
                    <div className="flex flex-row" key={i}>
                        {[0, 1, 2].map(j => (
                            <Square
                                key={i * 3 + j}
                                index={i * 3 + j}
                                className={`text-[64px] text-center text-[#1CDBF5] font-extrabold p-[30px] ${j < 2 ? 'border-r-[15px] border-r-[#1CDBF5]' : ''} ${i < 2 ? 'border-b-[15px] border-b-[#1CDBF5]' : ''} ${winningLine?.includes(i * 3 + j) ? 'border-4 border-yellow-500' : ''}`}
                                state={gameState[i * 3 + j]}
                                onClick={() => onSquareClick(i * 3 + j)}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <br />
            <button onClick={() => setGameState(initialState)} className="flex items-center justify-center bg-gradient-to-br from-[#00DDEB] via-[#5B42F3] to-[#AF40FF] border-0 rounded-lg shadow-[0_15px_30px_-5px_rgba(151,65,252,0.2)] text-white text-[20px] font-[Phantomsans,sans-serif] p-[3px] box-border cursor-pointer mt-[10px] select-none touch-manipulation whitespace-nowrap max-w-full min-w-[100px] transition-all duration-300 hover:brightness-100 active:outline-none">
                <span className="bg-[#282c34] px-[20px] py-[12px] rounded-lg w-full h-full transition-colors duration-300 hover:bg-transparent hover:text-black">
                    Start Again
                </span>
            </button>
        </div>
    );
};

export default Grid;
