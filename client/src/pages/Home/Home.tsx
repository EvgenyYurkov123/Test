import { Flex, Link } from '@chakra-ui/react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <Flex className={styles.Home} bg="skyblue" w="100vw" h="100vh" justifyContent="center" alignItems={'center'} p={'0'}>
      
      <Link href="/task" fontSize={'xxx-large'}>Блокнот</Link>
    </Flex>
  );
}
