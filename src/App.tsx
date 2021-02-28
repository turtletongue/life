import { useState, useEffect } from 'react';
import { ROWS, COLUMNS } from './constants';
import Menu from './components/menu/menu.component';
import Universe from './components/universe/universe.component';

const createCells = (): number[][] => {
  const temp: any = [];
  for (let i: number = 0; i < ROWS; i++) {
    temp.push([]);
    for (let j: number = 0; j < COLUMNS; j++) {
      temp[i][j] = Math.round(Math.random());
    }
  }
  return temp;
}

const generateNewGeneration = (cellsState: number[][], setIsStopped: Function, id: NodeJS.Timeout) => {
  const newCellsState: number[][] = cellsState.map(
    (row: number[], rowIndex: number) => row.map((cell: number, columnIndex: number) => {
      let livingCells: number = 0;
      for (let i: number = rowIndex - 1; i <= rowIndex + 1; i++) {
        if (i < 0 || i > ROWS - 1) continue;
        for (let j: number = columnIndex - 1; j <= columnIndex + 1; j++) {
          if (j < 0 || j > COLUMNS - 1 || ((i === rowIndex) && (j === columnIndex))) continue;;
          livingCells += cellsState[i][j];
        }
      }
      if (cell === 0 && livingCells === 3) return 1;
      if (cell === 1 && (livingCells === 2 || livingCells === 3)) {
        return cell;
      } else {
        return 0;
      }
    })
  );
  if (JSON.stringify(cellsState) === JSON.stringify(newCellsState)) {
    clearInterval(id);
    setIsStopped(true);
  }
  return newCellsState;
}

let intervalId: NodeJS.Timeout;

const App = () => {
  const [cellsState, setCellsState] = useState(createCells());
  const [isStopped, setIsStopped] = useState(false);
  useEffect(() => {
    intervalId = setInterval(
      () => {
        setCellsState(oldCellsState => generateNewGeneration(oldCellsState, setIsStopped, intervalId));
      },
      5000
    );
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <Menu />
      <Universe cells={cellsState} />
    </>
  );
}

export default App;
