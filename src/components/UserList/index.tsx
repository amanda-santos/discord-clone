import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Available - 1</Role>
      <UserRow nickname="Amanda Santos" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Joseph Burne" isBot />
      <UserRow nickname="Sophie Casadevali-Cuthbert" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="Ana Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="Ana Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="Ana Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="Ana Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="Ana Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="Ana Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="Ana Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="Ana Doe" />
    </Container>
  );
}

export default UserList;