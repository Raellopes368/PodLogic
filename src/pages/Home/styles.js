import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.ImageBackground`
  height: 331px;
  resize-mode: cover;
  justify-content: flex-end;
`;
export const TitleContainer = styled(LinearGradient).attrs({
  colors: ['rgba(68, 68, 68, 0)', 'rgba(68, 68, 68, 0.72)'],
})`
  justify-content: center;
  width: 100%;
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 34px;
  font-weight: bold;
  font-style: italic;
  color: #fff;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
