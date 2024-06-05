import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import { Container } from '@chakra-ui/react';

export const Layout = () => {
    return (
        <Container className={styles.container} minH={'100vh'} minW={'100vw'} p={'0'}>
            <Outlet />
        </Container>
    );
};
