import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 26,
    paddingVertical: 25,
    backgroundColor: '#F3F1ED',
  },
  topConatiner: {
    alignItems: 'center',
  },
  topImage: {
    alignItems: 'flex-end',
    paddingRight: 26,
    marginBottom: 26,
  },
  title: {
    fontWeight: '800',
    fontSize: 39.85,
  },
  violetBg: {
    backgroundColor: '#B730E1',
    borderRadius: 111,
    paddingHorizontal: 10,
  },
  flowerSvg: {
    position: 'absolute',
    left: -45,
    bottom: 5,
  },
  descriptionBlock: {
    alignItems: 'center',
    marginTop: 40,
  },
  descriptionText: {
    fontSize: 16,
  },
  infoText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  phone: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    marginTop: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
});
export default style;
