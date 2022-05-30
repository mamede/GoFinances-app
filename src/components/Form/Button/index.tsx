import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as Styled from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export function Button({
  title,
  onPress,
  ...rest
}: Props){
  return (
    <Styled.Container onPress={onPress} {...rest}>
      <Styled.Title>
        { title }
      </Styled.Title>
    </Styled.Container>
  )
}