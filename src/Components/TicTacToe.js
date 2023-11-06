import React, { useRef } from 'react'
import './TicTacToe.css'
import circle from '../Assets/circle.png'
import cross from '../Assets/cross.png'

let data = ["", "", "", "", "", "", "", "", ""]

export default function TicTacToe(props) {

    let [turns, setTurns] = React.useState(0)
    let [lock, setLock] = React.useState(false)
    let infoRef = useRef(null)


    const switchTurn = (e, position) => {
        if (lock || turns === 9) {
            return;
        }
        if (turns % 2 === 0) {
            e.target.innerHTML = `<img src=${circle} alt="circle" />`;
            data[position] = "O";
            setTurns(++turns);
        } else {
            e.target.innerHTML = `<img src=${cross} alt="cross" />`;
            data[position] = "X";
            setTurns(++turns);
        }
        checkWinner();
    };


    const checkWinner = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
            winner(data[0])
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[3] !== "") {
            winner(data[3])
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[6] !== "") {
            winner(data[6])
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[0] !== "") {
            winner(data[0])
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[1] !== "") {
            winner(data[1])
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[2] !== "") {
            winner(data[2])
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[0] !== "") {
            winner(data[0])
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") {
            winner(data[2])
        }
        else if (turns === 9) {
            winner("Draw");
        }
    }


    const winner = (data) => {
        setLock(true)

        if (data === "O") {
            infoRef.current.innerHTML = "Game Status: Player O wins"
        }
        else if (data === "X") {
            infoRef.current.innerHTML = "Game Status: Player X wins"
        }
        else {
            infoRef.current.innerHTML = "Game Status: Draw";
        }
    }


    const resetGame = () => {
        data = ["", "", "", "", "", "", "", "", ""];
        setLock(false);
        setTurns(0);
        infoRef.current.innerHTML = "Game Status: -";
        document.querySelectorAll('.square').forEach((square) => (square.innerHTML = ''));
    };
    

    return (
        <div className="container">

            <h1 className="title">Tic Tac Toe</h1>
            <h1 className="status" ref={infoRef}>Game Status: -</h1>

            <div className="gameBoard">

                <div className="row1">
                    <div className="square" onClick={(e) => { switchTurn(e, 0) }}></div>
                    <div className="square" onClick={(e) => { switchTurn(e, 1) }}></div>
                    <div className="square" onClick={(e) => { switchTurn(e, 2) }}></div>
                </div>

                <div className="row2">
                    <div className="square" onClick={(e) => { switchTurn(e, 3) }}></div>
                    <div className="square" onClick={(e) => { switchTurn(e, 4) }}></div>
                    <div className="square" onClick={(e) => { switchTurn(e, 5) }}></div>
                </div>

                <div className="row3">
                    <div className="square" onClick={(e) => { switchTurn(e, 6) }}></div>
                    <div className="square" onClick={(e) => { switchTurn(e, 7) }}></div>
                    <div className="square" onClick={(e) => { switchTurn(e, 8) }}></div>
                </div>

            </div>

            <button className="reset" onClick={resetGame}>Reset</button>

        </div>
    )
}