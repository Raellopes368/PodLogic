import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: 0 10px;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
`;

export const ProgressContainer = styled.View`
  height: 10px;
  width: 80%;
  background-color: #fff2;
  border-radius: 25px;
  margin-left: 15px;
  margin-right: 15px;
  justify-content: center;
`;

export const ProgressTime = styled.View`
  background-color: #2fa0d0;
  width: ${props => props.progress};
  height: 10px;
  border-radius: 25px;
  justify-content: center;
`;

export const Circle = styled.View`
  background-color: #2fa0d0;
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  align-self: flex-end;
`;

export const Time = styled.Text`
  font-size: 12px;
  color: #fff5;
  font-weight: 600;
`;
