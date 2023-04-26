import {Provider} from 'react-redux';
import {
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';

import {Cripto} from './src/types/cripto';
import {fetchCryptoData, selectCryptoData} from './src/store/criptoSlice';
import {useAppDispatch, useAppSelector} from './src/store/hooks';

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
  CryptoList,
} from './styles';

const App = () => {
  const dispatch = useAppDispatch();
  const cryptoData = useAppSelector(selectCryptoData);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  const renderItem = ({item}: ListRenderItemInfo<Cripto>) => {
    return (
      <CryptoContainer>
        <CryptoSymbol>
          <CryptoImage
            source={{
              uri: `https://messari.io/asset-images/${item.id.toLowerCase()}/64.png`,
            }}
          />
          <View>
            <CryptoName>{item.name}</CryptoName>
            <CryptoAbreviation>{item.symbol}</CryptoAbreviation>
          </View>
        </CryptoSymbol>
      </CryptoContainer>
    );
  };

  return (
    <Container>
      <BannerContainer>
        <Title>CryptoTracker Pro</Title>
        <ProfileImage source={require('./src/assets/perfil.png')} />
      </BannerContainer>
      <CryptoListContainer>
        <FlatList
          data={cryptoData.slice(0, 3)}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 10}}
        />
      </CryptoListContainer>
      <ButtonContainer>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => console.log('Pressed!')}>
          <ButtonText>+ Add a Cryptocurrency</ButtonText>
        </TouchableOpacity>
      </ButtonContainer>
    </Container>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
