import { Flex, Icon } from '@chakra-ui/react';
import { AiOutlinePause } from 'react-icons/ai';
import { VscDebugStart } from 'react-icons/vsc';

interface MenuProps {
  isStopped: boolean,
  start: Function,
  stop: Function
}

const Menu = ({ isStopped, start, stop }: MenuProps) => {
  return (
    <Flex
      position="absolute"
      top={0}
      h="3.5rem"
      w="100%"
      align="center"
      justify="center"
      borderWidth="1px"
    >
      {
        isStopped ? (
          <Icon
            as={VscDebugStart}
            w={10}
            h={10}
            cursor="pointer"
            onClick={() => start()}
          />
        ) : (
          <Icon
            as={AiOutlinePause}
            w={10}
            h={10}
            cursor="pointer"
            onClick={() => stop()}
          />
        )
      }
    </Flex>
  );
}

export default Menu;