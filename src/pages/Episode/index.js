import React, {useEffect, useState} from 'react';
import {
  Container,
  Image,
  Close,
  InfoContainer,
  AudioContainer,
  Name,
  Description,
  ReadMoreContainer,
  ReadMoreButton,
  ReadMoreText,
  Participants,
} from './styles';

import Load from '../../components/Load';
import DescriptionContainer from 'react-native-read-more-text';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Sound from 'react-native-sound';
import AudioPlayer from '../../components/AudioPlayer';
import api from '../../services/api';

export default function Episode({route, navigation}) {
  const [load, setLoad] = useState(true);
  const [sound, setSound] = useState(null);
  const [status, setStatus] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (sound && status === 'playing') {
        sound.getCurrentTime(seconds => {
          setCurrentTime(seconds);
        });
      }
    }, 100);

    return () => clearInterval(interval);
  });
  const [info, setInfo] = useState({
    id: 0,
    name: '',
    description: '',
    duration: 0,
    participants: [],
    episodeNumber: 0,
    cover: '',
    audio: '',
  });

  function goBack() {
    sound.stop();
    navigation.goBack();
  }
  useEffect(() => {
    async function getDetailsEpisode() {
      try {
        const {id} = route.params;
        const {data} = await api.get(`/podcast/episodes/${id}/details.json`);
        setInfo(data);
        const whoosh = new Sound(data.audio, '', error => {
          if (error) {
            return;
          }
        });

        setSound(whoosh);
      } catch (e) {
        //
      } finally {
        setLoad(false);
      }
    }
    getDetailsEpisode();
  }, [route]);

  function _renderTruncatedFooter(handlePress, text, more, iconName) {
    return (
      <ReadMoreContainer p={more}>
        <ReadMoreButton onPress={handlePress}>
          <ReadMoreText>{text}</ReadMoreText>
          <Feather name={iconName} size={23} color="#4dc1f2" />
        </ReadMoreButton>
        {info.participants.length && (
          <Participants>
            {info.participants.length > 1 ? 'Participantes' : 'Participante'}:{' '}
            {info.participants.join(', ')}
          </Participants>
        )}
      </ReadMoreContainer>
    );
  }

  function _handleTextReady() {
    // ...
  }
  function playPause() {
    if (sound) {
      if (status !== 'playing') {
        sound.play();
        setStatus('playing');
      } else {
        sound.pause();
        setStatus('paused');
      }
    }
  }

  function increaseTime() {
    const timeRate = 5;
    const duration = info.duration;
    if (sound) {
      sound.getCurrentTime(seconds => {
        if (seconds + timeRate < duration) {
          seekToTime(seconds + timeRate);
        } else {
          seekToTime(duration);
        }
      });
    }
  }

  function decreaseTime() {
    const timeRate = 5;
    if (sound) {
      sound.getCurrentTime(seconds => {
        if (seconds - timeRate > 0) {
          seekToTime(seconds - timeRate);
        } else {
          seekToTime(0);
        }
      });
    }
  }

  function seekToTime(seconds) {
    if (sound) {
      sound.setCurrentTime(seconds);
      setCurrentTime(seconds);
    }
  }

  return (
    <>
      {load ? (
        <Load />
      ) : (
        <Container>
          <Image source={{uri: info.cover}}>
            <Close onPress={goBack}>
              <Icon name="close" size={25} color="#fff" />
            </Close>
          </Image>
          <InfoContainer>
            <Name>
              Episódio {info.episodeNumber}- {info.name}
            </Name>
            <DescriptionContainer
              numberOfLines={6}
              renderTruncatedFooter={handlePress =>
                _renderTruncatedFooter(
                  handlePress,
                  'Ler mais',
                  true,
                  'chevron-down',
                )
              }
              renderRevealedFooter={handlePress =>
                _renderTruncatedFooter(
                  handlePress,
                  'Ler menos',
                  false,
                  'chevron-up',
                )
              }
              onReady={_handleTextReady}>
              <Description>{info.description}</Description>
            </DescriptionContainer>
          </InfoContainer>
          <AudioContainer>
            <AudioPlayer
              play={playPause}
              next={increaseTime}
              previous={decreaseTime}
              status={status}
              duration={info.duration}
              currentTime={currentTime}
            />
          </AudioContainer>
        </Container>
      )}
    </>
  );
}
