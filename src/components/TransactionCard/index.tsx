import React from 'react';
import * as Styled from './styles'
import { categories } from '../../utils/categories';

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps
}

export function TransactionCard({ data }: Props){
  const [ category ] = categories.filter(
    item => item.key === data.category
  );

  return (
    <Styled.Container>
      <Styled.Title>{data.name}</Styled.Title>

      <Styled.Amount type={data.type}>
        { data.type === 'negative' && '- ' }
        { data.amount }
      </Styled.Amount>

      <Styled.Footer>
        <Styled.Category>
          <Styled.Icon name={category.icon} />
          <Styled.CategoryName>
            {category.name}
          </Styled.CategoryName>
        </Styled.Category>

        <Styled.Date>
         {data.date}
        </Styled.Date>
      </Styled.Footer>
    </Styled.Container>
  )
}