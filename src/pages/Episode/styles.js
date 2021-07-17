import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #205065;
`;

export const Image = styled.ImageBackground`
  height: 320px;
  resize-mode: cover;
  border-radius: 4px;
`;
export const Close = styled.TouchableOpacity`
  background-color: #205065;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  position: absolute;
  top: 15px;
  right: 15px;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  flex: 2;
  background-color: #27657f;
  align-items: center;
  padding: 25px;
`;

export const AudioContainer = styled.View`
  flex: 1;
  background-color: #15475b;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const ReadMoreContainer = styled.View`
  align-items: flex-start;
  margin-top: ${props => (props.p ? '-5px' : '0px')};
  background-color: #27657f;
  padding-top: 10px;
`;

export const Participants = styled.Text`
  font-size: 10px;
  color: #fff5;
`;

export const ReadMoreText = styled.Text`
  color: #4dc1f2;
  font-size: 14px;
`;

export const ReadMoreButton = styled.TouchableOpacity`
  flex-direction: row;
`;
