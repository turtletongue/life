import { Center, SimpleGrid } from '@chakra-ui/react';
import { ROWS, COLUMNS } from '../../constants';

interface UniverseProps {
  cells: number[][]
}

const Universe = ({ cells }: UniverseProps) => {
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
          cells.map((row: number[]) => row.map((cell: number, index: number) => {
            return (
              <Center
                key={index}
                bgColor={ cell ? "blue.600" : "black" }
                color="white"
                h={5}
                w={5}
              ></Center>
            );
          }))
        }
      </SimpleGrid>
    </Center>
  );
}

export default Universe;