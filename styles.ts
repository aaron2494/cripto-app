import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const BannerContainer = styled.View`

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.blue};
  padding-vertical: 10px;
  padding-horizontal: 20px;
  width: 100%;
  height: 120px;
  left: 0px;
  top: 0px;
`;

export const ProfileImage = styled.Image`
  width: 55px;
  height:55px;
  border-radius: 25px;
  margin-right: 10px;
  
`;

export const Title = styled.Text`
  margin-top: 10px;
  margin-left: 15px;
  font-size: 20px;
  color: #fff;
`;

export const CryptoContainer = styled.View`
font-size: 16px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-self: center;
padding: 20px 10px;
width: 90%;
border-color: ${({theme}) => theme.grey};
border-bottom-width: 1px;
border-style: solid;
background-color: ${({theme}) => theme.primary};
`;


export const CryptoName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-right: 10px;
`;

export const CryptoImage = styled.Image`
  width: 60px;
  height: 60px;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const CryptoAbreviation = styled.Text`
  font-size: 16px;
  font-weight: normal;
  color: #333;
`;

export const CryptoSymbol = styled.View`
justify-content: flex-start;
align-items: center;
flex-direction: row;
`;


export const CryptoListContainer = styled.View`
  flex: 1;
  margin-top: 20px;
  max-height: 500px; 
  overflow-y: scroll; 
`;

export const CryptoList = styled.FlatList`
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
width: 100%;
align-items: center;
justify-content: center;
padding: 10px; 
background-color: #fff; 
position: relative; 
bottom: 70px;
`;


export const ButtonText = styled.Text`
color: #385775;
font-size: 18px;
padding: 6px 8px;
background-color: white;
border-radius: 5px;

`;
