import React from 'react';

import * as Styled from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({
  title,
  onPress
}: Props){
  return(
    <Styled.Container onPress={onPress}>
      <Styled.Category>{title}</Styled.Category>
      <Styled.Icon name="chevron-down"/>
    </Styled.Container>
  )
}