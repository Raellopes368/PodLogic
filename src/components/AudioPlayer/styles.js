import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

export const ContainerButtons = styled.View`
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 200px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props => props.color};
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: ${props => `${props.size / 2}px`};
  justify-content: center;
  align-items: center;
`;
