import React, {useEffect, useState} from 'react';
import {Container, Image, TitleContainer, Title, SubTitle} from './styles';
import Episodes from '../../components/Episodes';
import Load from '../../components/Load';
import api from '../../services/api';

export default function Home({navigation}) {
  const [info, setInfo] = useState({
    name: '',
    cover: '',
    description: '',
  });
  const [load, setLoad] = useState(true);
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const {data} = await api.get('/podcast/details.json');
        setInfo(data);
        setEpisodes(data.episodes);
      } catch (error) {
        console.log('Not possible get data for api');
      } finally {
        setLoad(false);
      }
    }
    getData();
  }, []);

  function to(id) {
    navigation.navigate('episode', {id});
  }
  return (
    <>
      {load ? (
        <Load />
      ) : (
        <Container>
          <Image
            source={{
              uri: info.cover,
            }}>
            <TitleContainer>
              <Title>{info.name}</Title>
              <SubTitle>{episodes.length || 0} episódios</SubTitle>
            </TitleContainer>
          </Image>
          <Episodes episodes={episodes} to={to} />
        </Container>
      )}
    </>
  );
}
