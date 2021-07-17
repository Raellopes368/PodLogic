import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['rgba(36, 72, 87, 1)', 'rgba(40, 115, 147, 1)'],
})`
  flex: 1;
  padding: 15px;
`;

export const List = styled.FlatList`
  padding-top: 15px;
`;

export const EpisodeContainer = styled.TouchableOpacity`
  height: 70px;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Image = styled.Image`
  height: 70px;
  resize-mode: cover;
  width: 70px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  font-size: 10px;
  color: #fff5;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const InfoContainer = styled.View`
  flex: 1;
  padding-left: 15px;
  justify-content: center;
  align-items: flex-start;
  margin-left: 5px;
`;

export const Time = styled.Text`
  color: #fff5;
  font-size: 12px;
`;
export const EpisodeName = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
