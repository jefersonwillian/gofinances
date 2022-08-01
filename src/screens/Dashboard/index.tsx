import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Container, UserGreeting, Header, UserInfo, Photo, User, UserName, UserWrapper } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{
                            uri: 'https://avatars.githubusercontent.com/u/27971859?v=4'
                        }} />
                        <User>
                            <UserGreeting>Ola</UserGreeting>
                            <UserName>Jeferson</UserName>
                        </User>
                    </UserInfo>
                    
                </UserWrapper>
            </Header>
        </Container>
    );
}
