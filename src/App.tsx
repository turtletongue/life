import Universe from './components/universe/universe.component';

const App = () => {
  const cells: [number[]] = [[]];
  for (let i: number = 0; i < 30; i++) {
    for (let j: number = 0; j < 55; j++) {
      cells[i][j] = Math.round(Math.random());
    }
    cells.push([]);
  }
  // Deleting empty array
  cells.pop();
  return (
    <Universe cells={cells} />
  );
}

export default App;
