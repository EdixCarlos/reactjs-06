import {StyleSheet} from 'react-native';
export const global = StyleSheet.create({
  container: {},
  flatList: {
    color: 'green',
    padding: 20,
    fontSize: 3,
    backgroundColor: 'powderblue',
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    flex: 1,
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 60,
    height: 100,
    flexDirection: 'column',
  },
  normalLogo: {
    width: 500,
    height: 800,
    flexDirection: 'column',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  titulos: {
    fontSize: 20,
    fontWeight: 'bold',

    textAlign: 'center',
  },
  text: {
    fontSize: 20,
  },
  columna: {
    flex: 1,
    padding: 5,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
