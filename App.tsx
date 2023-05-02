import {Provider} from 'react-redux';
import {FlatList, ImageSourcePropType, ListRenderItemInfo, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import colorTheme from './syled-themes/theme'
import {fetchCryptoData, selectCryptoData} from './src/store/criptoSlice';
import {useAppDispatch, useAppSelector} from './src/store/hooks';
import { Dimensions, StatusBar } from "react-native";
import {store} from './src/store/store';

import {
  Container,
  BannerContainer,
  ProfileImage,
  Title,
  CryptoContainer,
  CryptoName,
  CryptoImage,
  CryptoSymbol,
  ButtonContainer,
  ButtonText,
  CryptoAbreviation,
  CryptoListContainer,
} from './styles';
import { ThemeProvider } from 'styled-components/native';

const Main = () => {
  const dispatch = useAppDispatch();
  const cryptoData = useAppSelector(selectCryptoData);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);
  
  const mockData = [
    { id: 'BTC', name: 'Bitcoin', symbol: 'BTC',image: require('./src/assets/bitcoin.png')  },
    { id: 'ETH', name: 'Ethereum', symbol: 'ETH',image: require('./src/assets/etereo.png') },
    { id: 'DOG', name: 'Dogecoin', symbol: 'DOG',image: require('./src/assets/dogecoin.png') },
  ];
  const renderItem = ({ item: { id, name, symbol, image } }: ListRenderItemInfo<{ id: string, name: string, symbol: string, image: ImageSourcePropType }>) => (
    <CryptoContainer>
      <CryptoSymbol>
        <CryptoImage
          source={image}
        />
        <View>
          <CryptoName>{name}</CryptoName>
          <CryptoAbreviation>{symbol}</CryptoAbreviation>
        </View>
      </CryptoSymbol>
    </CryptoContainer>
  );

  return (
    
      <Container>
        <StatusBar backgroundColor="#1c1c1e"  />
        <ThemeProvider theme={colorTheme}>
        
        <BannerContainer>
          <Title>CryptoTracker Pro</Title>
          <ProfileImage source={require('./src/assets/perfil.png')} />
        </BannerContainer>
        <CryptoListContainer>
          <FlatList
            data={mockData}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </CryptoListContainer>
        <ButtonContainer>
          <TouchableOpacity activeOpacity={0.7}>
            <ButtonText>+ Add a Cryptocurrency</ButtonText>
          </TouchableOpacity>
        </ButtonContainer>
        </ThemeProvider>
      </Container>
  );
}
  const App = () => (
  <Provider store={store}>
    <Main/>
  </Provider>
);

export default App;