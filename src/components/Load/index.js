/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

import {Container} from './styles';

export default function Load() {
  return (
    <Container>
      <Spinner
        visible={true}
        textContent={'Aguarde...'}
        textStyle={{
          color: '#fff',
        }}
      />
    </Container>
  );
}
