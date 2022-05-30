import React, { useState } from 'react';
import { Alert, ActivityIndicator} from 'react-native'
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

import { SignInSocialButton } from '../../components/SignInSocialButton'

import * as Styled from './styles';

export function SignIn(){
  const { signInWithGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true)
      return await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar a conta Google');
      setIsLoading(false)
    }
  }
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.TitleWrapper>
          <LogoSvg
            width={RFValue(120)}
            height={RFValue(68)}
          />
          
          <Styled.Title>
            Controle suas {'\n'}
            finanças de forma {'\n'}
            muito simples
          </Styled.Title>
        </Styled.TitleWrapper>

        <Styled.SignInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo
        </Styled.SignInTitle>
      </Styled.Header>

      <Styled.Footer>
        <Styled.FooterWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />

          {isLoading && (
            <ActivityIndicator
              color={theme.colors.shape}
              style={{ marginTop: 18 }}
            />
          )}
        </Styled.FooterWrapper>
      </Styled.Footer>

      

    </Styled.Container>
  );
}