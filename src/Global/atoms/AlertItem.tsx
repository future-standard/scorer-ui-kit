import React from 'react';
import styled from 'styled-components';
import { IAlertItem } from '../index';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 20px 12px 20px;
  height: 122px;
`;

const ImgWrapper = styled.div`
  border-radius: 5px;
  overflow: hidden;
  height: 40px;
  width: 40px;
  flex-shrink: 0;
`;

const EmptyImg = styled.div`
  background-color: hsl(210, 22%, 91%);
  width: 100%;
  height: 100%;
`;

const Image = styled.div<{ image?: string }>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url(${p => p.image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat; 
  display: ${p => p.image ? 'block' : 'none'};
`;

const InfoContainer = styled.div`
  margin-left: 20px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: hsl(0, 0%, 34%);
`;

const Message = styled.div`
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  color: hsl(0, 0%, 34%);
  margin: 4px 0;
  height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
`;

const TimeMsg = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: hsl(0, 0%, 67%);
  margin-top: 15px;
`;


const AlertItem: React.FC<IAlertItem> = ({ imgUrl, title, message, time }) => {
  return (
    <Container>
      <ImgWrapper>
        {imgUrl
          ? <Image image={imgUrl} />
          : <EmptyImg />}
      </ImgWrapper>
      <InfoContainer>
        <Title>{title}</Title>
        <Message>{message}</Message>
        <TimeMsg>{time}</TimeMsg>
      </InfoContainer>
    </Container>
  );
};

export default AlertItem;