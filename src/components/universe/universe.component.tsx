import { Center, SimpleGrid } from '@chakra-ui/react';

interface UniverseProps {
  cells: [number[]]
}

const Universe = ({ cells }: UniverseProps) => {
  return (
    <Center
      w="100vw"
      h="100vh"
    >
      <SimpleGrid
        columns={55}
        rows={30}
      >
        {
          cells.map((row: number[]) => row.map((cell: number, index: number) => {
            return (
              <Center
                key={index}
                bgColor={ cell ? "tomato" : "white" }
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