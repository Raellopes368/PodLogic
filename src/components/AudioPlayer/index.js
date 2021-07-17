import React from 'react';
import {Container, ContainerButtons, Button} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Progress from '../Progress';

export default function AudioPlayer({
  play,
  next,
  previous,
  status,
  currentTime,
  duration,
}) {
  return (
    <Container>
      <Progress duration={duration} current={currentTime} />
      <ContainerButtons>
        <Button size={42} color="#fff" onPress={previous}>
          <MaterialIcons name="skip-previous" color="#329ECB" size={24} />
        </Button>
        <Button size={60} color="#329ECB" onPress={play}>
          <FontAwesome5
            name={status === 'playing' ? 'pause' : 'play'}
            color="#fff"
            size={28}
          />
        </Button>
        <Button size={42} color="#fff" onPress={next}>
          <MaterialIcons name="skip-next" color="#329ECB" size={24} />
        </Button>
      </ContainerButtons>
    </Container>
  );
}
