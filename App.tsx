import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  FlatList,
  ListRenderItemInfo,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { styles } from "./styles";
import { Cripto } from "./src/types/cripto";
import { fetchCryptoData, selectCryptoData } from "./src/store/criptoSlice";
import { useAppDispatch, useAppSelector } from "./src/store/hooks";

import { store } from "./src/store/store";

const App = () => {
  const dispatch = useAppDispatch();
  const cryptoData = useAppSelector(selectCryptoData);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  const renderItem = ({ item }: ListRenderItemInfo<Cripto>) => {
    const price = item.metrics.market_data.price_usd.toFixed(4);
    
    return (
      <View style={styles.cryptoContainer}>
        <View style={styles.cryptoSymbol}>
          <Image
            source={{
              uri: `https://messari.io/asset-images/${item.id.toLowerCase()}/64.png`,
            }}
            style={styles.cryptoImage}
          />
          <View>
            <Text style={styles.cryptoName}>{item.name}</Text>
            <Text style={styles.cryptoAbreviation}>{item.symbol}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.tittle}>CryptoTracker Pro</Text>
        <Image
          source={require("./assets/perfil.png")}
          style={styles.profileImage}
        />
      </View>
      <FlatList
        data={cryptoData.slice(0, 3)}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+ Add a Cryptocurrency</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;