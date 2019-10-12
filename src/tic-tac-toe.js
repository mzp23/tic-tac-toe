class TicTacToe {
    constructor() {
        this.gameField = [[null, null, null],
        [null, null, null],
        [null, null, null]];
        this.playerSymbolX = 'x';
        this.playerSymbolO = 'o';
        this.turnCount = 0;
        this.currentPlayer = 'x';
        this.winner = null;
        this.numToWinX = this.getNumberToWinX();
        this.numToWinO = this.getNumberToWinO();
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] === null) {
            if (this.getCurrentPlayerSymbol() === this.playerSymbolX) {
                this.gameField[rowIndex][columnIndex] = this.playerSymbolX;
                this.currentPlayer = this.playerSymbolO;
                this.turnCount++
            } else if (this.getCurrentPlayerSymbol() === this.playerSymbolO) {
                this.gameField[rowIndex][columnIndex] = this.playerSymbolO;
                this.currentPlayer = this.playerSymbolX;
                this.turnCount++
            }
        }
    }

    isFinished() {
        return !this.noMoreTurns() && this.winner === null ? false : true;
    }

    getNumberToWinX() {
        return this.gameField[0].length;
    }

    getNumberToWinO() {
        return -(this.gameField[0].length);
    }
    getWinner() {
        // Horizontal 
        for (let i = 0; i < this.gameField.length; i++) {
            let count = 0;
            for (let j = 0; j < this.gameField.length; j++) {
                if (this.gameField[i][j] === 'x') count++;
                if (this.gameField[i][j] === 'o') count--;
            }
            if (count === this.numToWinX) return this.winner = 'x';
            if (count === this.numToWinO) return this.winner = 'o';
            count = 0;
        }

        // from left to right on diagonal
        let toRightCount = 0;
        for (let i = 0; i < this.gameField.length; i++) {
            if (this.gameField[i][i] === 'x') toRightCount++;
            if (this.gameField[i][i] === 'o') toRightCount--;
            if (toRightCount === this.numToWinX) this.winner = 'x';
            if (toRightCount === this.numToWinO) this.winner = 'o';
        }
        // from right to left on diagonal
        let toLeftCount = 0;
        for (let i = 0, j = this.gameField.length - 1; i < this.gameField.length; i++ , j--) {
            if (this.gameField[i][j] === 'x') toLeftCount++
            if (this.gameField[i][j] === 'o') toLeftCount--
            if (toLeftCount === this.numToWinX) this.winner = 'x';
            if (toLeftCount === this.numToWinO) this.winner = 'o';
        }
        // vertical
        for (let i = 0; i < this.gameField.length; i++) {
            let count = 0
            for (let j = 0; j < this.gameField.length; j++) {
                if (this.gameField[j][i] === 'x') count++
                if (this.gameField[j][i] === 'o') count--
            }
            if (count === this.numToWinX) this.winner = 'x';
            if (count === this.numToWinO) this.winner = 'o';
            count = 0;
        }


        return this.winner;
    }

    noMoreTurns() {
        return this.turnCount < 9 ? false : true;
    }

    isDraw() {
        return this.noMoreTurns() && this.winner === null ? true : false
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
