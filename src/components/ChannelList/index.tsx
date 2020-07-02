import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Text Channels</span> 
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="faq" />
      <ChannelButton channelName="rules" />
      <ChannelButton channelName="free-chat" />
      <ChannelButton channelName="work" />
    </Container>
  );
}

export default ChannelList;