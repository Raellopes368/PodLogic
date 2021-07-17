import React, {useState} from 'react';
import {
  Container,
  ProgressContainer,
  Time,
  Circle,
  ProgressTime,
} from './styles';
import getPercentage from '../../utils/getPercentage';
import formatTime from '../../utils/formatTime';

export default function Progress({current = 0, duration = 0}) {
  return (
    <Container>
      <Time>{formatTime(current)}</Time>
      <ProgressContainer>
        <ProgressTime progress={`${getPercentage(duration, current)}%`}>
          <Circle />
        </ProgressTime>
      </ProgressContainer>
      <Time>{formatTime(duration)}</Time>
    </Container>
  );
}
