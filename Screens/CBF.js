import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { ContextValue } from '../context/contextValue';
import Card from '../components/Card';
import { useContext, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { styles } from '../styles/styles.cbf';

const escudo = require('../Escudo-Gremio-Png-1024x1024.png');

const CBF = ({ navigation }) => {
  const { jogadores, setJogadores } = useContext(ContextValue);
  const { getItem, setItem } = useAsyncStorage('@plantel-gremio');

  const sorter = () => {
    const newOrder = jogadores.sort((a, b) => {
      return (
        parseFloat(b.habilidade.replace('.', '')) -
        parseFloat(a.habilidade.replace('.', ''))
      );
    });
    return newOrder;
  };

  const readDb = async () => {
    const data = await getItem();
    if (data) setJogadores(JSON.parse(data));
    else setJogadores([...jogadores]);
  };

  const exclud = (item) => {
    const list = jogadores.filter((e) => e !== item);
    setJogadores(list);
    setItem(JSON.stringify(list));
  };

  useEffect(() => {
    readDb();
  });
  return (
    <View style={styles.container}>
      <Image source={escudo} style={styles.escudo} />
      <FlatList
        data={sorter()}
        renderItem={({ item }) => (
          <TouchableOpacity onLongPress={() => exclud(item)} delayLongPress={2000}>
            <Card item={item} />
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Recrutar')}
          style={styles.btn}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CBF;
