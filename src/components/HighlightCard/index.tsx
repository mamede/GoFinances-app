import React from 'react';
import * as Styled from './styles'

interface Props {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lastTransaction: string;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export function HighlightCard({
  type,
  title,
  amount,
  lastTransaction
} : Props){
  return (
    <Styled.Container type={type}>
      <Styled.Header>
        <Styled.Title type={type}>
          {title}
        </Styled.Title>
        <Styled.Icon
          name={icon[type]}
          type={type}
        />
      </Styled.Header>

      <Styled.Footer>
        <Styled.Amount type={type}>
          {amount}
        </Styled.Amount>
        <Styled.LastTransaction type={type}>
          {lastTransaction}
        </Styled.LastTransaction>
      </Styled.Footer>

    </Styled.Container>
  )
}