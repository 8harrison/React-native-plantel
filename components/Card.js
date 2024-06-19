import {View, Text, Image, StyleSheet} from 'react-native'

export default function Card ({item}) {
  return (
     <View style={estilos.container}>
              <Image style={estilos.fotoJogador} source={{ uri: item.foto }} />
            <View style={estilos.txtContainer}>
              <Text style={estilos.nomeJogador}>{item.nome}</Text>
              <Text style={estilos.habilidadeJogador}> Habilidade {item.habilidade} </Text>
              <Text style={estilos.localizacaoJogador}> {item.localizacao.cidade}, {item.localizacao.pais} </Text>
            </View>
          </View>
  )
}

const estilos = StyleSheet.create({
  fotoJogador: {
    height: 85,
    width: 75,
    marginLeft: 20
  },
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    backgroundColor: '#a1a1a1',
    padding: 10,
    marginBottom: 10
  },
  txtContainer: {
    justifyContent: 'center',
    marginStart: 10
  },
  nomeJogador: {
    fontSize: 18,
    fontWeight: 700
  },
  habilidadeJogador: {
    color: '#cecece'
  },
  localizacaoJogador: {
    color: '#dadada'
  }
})