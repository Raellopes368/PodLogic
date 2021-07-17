/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Container,
  List,
  EpisodeContainer,
  Image,
  Title,
  InfoContainer,
  EpisodeName,
  Time,
} from './styles';

import formatTime from '../../utils/formatTime';

export default function Episodes({episodes, to}) {
  return (
    <Container>
      <Title>LISTA DE EPISÓDIOS</Title>
      <List
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
        data={episodes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <EpisodeContainer onPress={() => to(item.id)}>
            <Image source={{uri: item.cover}} />
            <InfoContainer>
              <EpisodeName>{item.name}</EpisodeName>
              <Time>{formatTime(item.duration)}</Time>
            </InfoContainer>
          </EpisodeContainer>
        )}
      />
    </Container>
  );
}
