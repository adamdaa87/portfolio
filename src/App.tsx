import React from 'react';
import './App.css';
import {Flex} from '@chakra-ui/react';

import SideBar from './app/layout/SideBar';

const App = ()=> {
  
  return (
    <Flex h={'100vh'} bgGradient={'linear(to-l, #92FE9D, #00C9FF)'} p='3' justifyContent='center' alignItems='center'>
      <SideBar/>
    </Flex>
  );
};

export default App;
