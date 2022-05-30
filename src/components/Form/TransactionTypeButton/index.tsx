import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as Styled from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface Props extends TouchableOpacityProps {
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

export function TransactionTypeButton({
  type,
  title,
  isActive,
  ...rest
}: Props){
  return(
    <Styled.Container
      isActive={isActive}
      type={type}
      {...rest}
    >
      <Styled.Icon
        name={icons[type]}
        type={type}
      />
      <Styled.Title>
        {title}
      </Styled.Title>

    </Styled.Container>
  );
}