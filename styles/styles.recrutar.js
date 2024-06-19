import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  fotoEscolhida: {
    height: 220,
    width: 200,
  },
  contTextInputs: {
    flexDirection: 'row',
    gap: 20,
    width: '47.5%',
  },
  btn: {
    backgroundColor: '#0D80BF',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 20,
  },
  btnTxt: {
    color: 'white',
    fontWeight: 700,
  },
  input: {
    backgroundColor: '#cecece',
    borderBottomWidth: 1,
    marginVertical: 7,
    paddingVertical: 5,
    width: '100%',
    paddingStart: 5,
  },
  container: {
    padding: 20,
    maxWidth: '100%',
  },
  imgContainer: {
    height: 220,
    width: 200,
    alignSelf: 'center',
  },
  map: {
    height: 200,
    width: 200,
  },
  search: {
    width: 24,
    height: 24,
  },
  nasc: {
    fontSize: 24,
  },
});
