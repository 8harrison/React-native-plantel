import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Vibration,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useContext, useState } from 'react';
import { ContextValue } from '../context/contextValue';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { estilos } from '../styles/styles.recrutar';

const Recrutar = ({ navigation }) => {
  const [jogador, setJogador] = useState({
    nome: '',
    habilidade: '',
    localizacao: { latitude: 0, longitude: 0 },
    foto: '',
  });
  const [localizacao, setLocalizacao] = useState({ latitude: 0, longitude: 0 });
  const { jogadores, setJogadores } = useContext(ContextValue);
  const { getItem, setItem } = useAsyncStorage('@plantel-gremio');

  const escolherFoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      legacy: true,
    });
    if (!result.canceled) {
      setJogador({ ...jogador, foto: result.assets[0].uri });
    }
  };

  const cadatrar = async () => {
    if (jogador.nome && jogador.habilidade && jogador.foto) {
      const data = JSON.parse(await getItem());
      if (data) setItem(JSON.stringify([...data, { ...jogador, localizacao }]));
      else setItem(JSON.stringify([...jogadores, { ...jogador, localizacao }]));
      setJogadores([...jogadores, { ...jogador, localizacao }]);
      Vibration.vibrate();
      navigation.navigate('Gremio');
    }
  };

  const encontrarLocal = async () => {
    const location = {
      latitude: parseFloat(localizacao.latitude),
      longitude: parseFloat(localizacao.longitude),
    };
    const res = await Location.reverseGeocodeAsync(location);
    setLocalizacao({
      ...location,
      cidade: res[0].region,
      pais: res[0].country,
    });
  };

  return (
    <View style={estilos.container}>
      <TextInput
        style={estilos.input}
        placeholder="Nome"
        value={jogador.nome}
        onChangeText={(e) => setJogador({ ...jogador, nome: e })}
      />
      <TextInput
        style={estilos.input}
        placeholder="Habilidade"
        value={jogador.habilidade}
        onChangeText={(e) => setJogador({ ...jogador, habilidade: e })}
      />

      <TouchableOpacity onPress={escolherFoto} style={estilos.btn}>
        <Text style={estilos.btnTxt}>ESCOLHER FOTO</Text>
      </TouchableOpacity>
      <View style={estilos.imgContainer}>
        {jogador.foto && (
          <Image style={estilos.fotoEscolhida} source={{ uri: jogador.foto }} />
        )}
      </View>
      <View style={estilos.contTextInputs}>
        <Text style={estilos.nasc}>Nascimento</Text>
        <TouchableOpacity onPress={encontrarLocal}>
          <Image source={require('../search.png')} style={estilos.search} />
        </TouchableOpacity>
      </View>
      <View style={estilos.contTextInputs}>
        <TextInput
          style={estilos.input}
          placeholder="Latitude"
          value={localizacao.latitude}
          onChangeText={(e) => setLocalizacao({ ...localizacao, latitude: e })}
        />
        <TextInput
          style={estilos.input}
          placeholder="Longitude"
          value={localizacao.longitude}
          onChangeText={(e) => setLocalizacao({ ...localizacao, longitude: e })}
        />
      </View>
      <View style={estilos.imgContainer}>
        <MapView
          region={{ ...localizacao, longitudeDelta: 0.01, latitudeDelta: 0.01 }}
          style={estilos.map}>
          <Marker
            coordinate={{
              ...localizacao,
              longitudeDelta: 0.01,
              latitudeDelta: 0.01,
            }}
          />
        </MapView>
      </View>
      <TouchableOpacity onPress={cadatrar} style={estilos.btn}>
        <Text style={estilos.btnTxt}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Recrutar;
