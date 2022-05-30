import React from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../components/Form/Button';
import { categories } from '../../utils/categories';

import * as Styled from './styles';

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory
}: Props){

  function handleCategorySelect(category: Category){
    setCategory(category);
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Categoria</Styled.Title>
      </Styled.Header>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Styled.Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Styled.Icon name={item.icon} />
            <Styled.Name>{item.name}</Styled.Name>
          </Styled.Category>
        )}
        ItemSeparatorComponent={() => <Styled.Separator />}
      />

      <Styled.Footer>
        <Button
          title="Selecionar"
          onPress={closeSelectCategory}
        />
      </Styled.Footer>
    </Styled.Container>
  );
}