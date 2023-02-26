import * as React from 'react';
import {
  Flex,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import SideBar from './SideBar';
import Content from './Content';
import { MotionFlex, itemAnimationX } from '../../components/Animation';
import { observer } from 'mobx-react-lite';

 const App = () => {
  const [isLargerThan991] = useMediaQuery('(min-width: 992px)');

return(
    
)