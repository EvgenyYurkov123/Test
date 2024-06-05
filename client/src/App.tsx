import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from './pages/Home/Home';
import TaskPage from './pages/TaskPage/TaskPage';

const App: React.FC = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/task", element: <TaskPage /> },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default App;
