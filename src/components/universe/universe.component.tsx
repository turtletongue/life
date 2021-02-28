import { Center, SimpleGrid } from '@chakra-ui/react';
import { ROWS, COLUMNS } from '../../constants';

interface UniverseProps {
  cells: number[][],
  toggleCellState: Function
}

const Universe = ({ cells, toggleCellState }: UniverseProps) => {
  return (
    <Center
      w="100vw"
      h="100vh"
    >
      <SimpleGrid
        columns={COLUMNS}
        rows={ROWS}
      >
        {
          cells.map((row: number[], rowIndex: number) => row.map((cell: number, columnIndex: number) => {
            return (
              <Center
                key={columnIndex}
                bgColor={ cell ? "blue.600" : "black" }
                h={5}
                w={5}
                sx={{
                  '&:hover': {
                    bgColor: "white"
                  }
                }}
                onClick={() => toggleCellState(rowIndex, columnIndex)}
              ></Center>
            );
          }))
        }
      </SimpleGrid>
    </Center>
  );
}

export default Universe;