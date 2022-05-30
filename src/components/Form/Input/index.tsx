import React from 'react';
import { TextInputProps } from 'react-native';

import * as Styled from './styles';

type Props = TextInputProps;

export function Input({...rest} : Props){
  return(
    <Styled.Container {...rest} />
  );
}