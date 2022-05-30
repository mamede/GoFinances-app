import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

import * as Styled from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>
}

export function SignInSocialButton({
  title,
  svg: Svg,
  ...rest
}: Props){
  return(
    <Styled.Button {...rest}>
      <Styled.ImageContainer>
        <Svg />
      </Styled.ImageContainer>

      <Styled.Text>
        {title}
      </Styled.Text>
    </Styled.Button>

  );
}