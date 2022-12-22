import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';

// Más instrucciones en https://yanatechnologies.notion.site/Frontend-Challenge-9427a4f79be54b5bb8c3ace2dd93a414
const Challenge = () => {
  return (
    // <RoundedContainer bgColor={'white'} padding={12} >
    //   <FlexRowVCenter>
    //     <YanaAvatar source={yanaAvatar}/>
    //     <TextInstructionsContainer>
    //       <BigText>Instrucciones:</BigText>
    //       <Text>Comienza editando el archivo <CodeText>src/index.tsx</CodeText></Text>
    //     </TextInstructionsContainer>
    //   </FlexRowVCenter>
    // </RoundedContainer>
  );
};

export default Challenge;

const BigText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;
const CodeText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #a33;
  background-color: #eee;
  padding: 0 4px;
`;
const YanaAvatar = styled(Image)`
  width: 100px;
  height: 100px;
`;
const FlexRowVCenter = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TextInstructionsContainer = styled.View`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const RoundedContainer = styled.View<{bgColor: string; padding: number}>`
    background-color: ${(props) => props.bgColor ?? 'transparent'};
    border-radius: 6px;
    padding: ${(props) => props.padding ?? 0}px;
`;
