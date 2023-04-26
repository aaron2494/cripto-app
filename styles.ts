import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const BannerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #385775;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  width: 100%;
  height: 120px;
`;

export const ProfileImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 25px;
  margin-right: 10px;
  
`;

export const Title = styled.Text`
  margin-top: 10px;
  margin-left: 15px;
  font-size: 25px;
  flex: 1;
  color: #fff;
`;

export const CryptoContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 10px;
  border-bottom-color: #ccc;
  margin-left: 30px;
  margin-bottom: 15px;
  border-bottom-width: 1px;
  width: 90%;
`;


export const CryptoName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-right: 10px;
`;

export const CryptoImage = styled.Image`
  width: 50px;
  height: 50px;
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
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
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
