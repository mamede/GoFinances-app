import React from 'react';

import * as Styled from './styles';

interface Props {
  title: string;
  amount: string;
  color: string;
}

export function HistoryCard({
  title,
  amount,
  color
}: Props){
  return(
    <Styled.Container color={color}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Amount>{amount}</Styled.Amount>
    </Styled.Container>
  );
}