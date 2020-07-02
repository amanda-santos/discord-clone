import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  // para colocar o scroll automaticamente na mensagem mais recente quando alguém abre a página
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            author="Amanda Santos"
            date="01/01/2020"
            content="This is a message."
          />
        ))}
        <ChannelMessage
          author="Amanda Santos"
          date="05/10/2020"
          content="Today is my birthday!"
        />
        <ChannelMessage
          author="John Bourne"
          date="05/10/2020"
          content={
            <>
              <Mention>@Amanda Santos</Mention>,
              happy birthday!
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Chat on #free-chat" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;