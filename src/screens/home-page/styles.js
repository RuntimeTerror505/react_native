import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 0.8,
    paddingHorizontal: 23,
  },
  content: {
    position: 'absolute',
    bottom: 35,
    width: '100%',
    alignSelf: 'center',
  },
  image: {
    position: 'relative',
    top: 0,
    alignSelf: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 39.85,
  },
  orangeBg: {
    backgroundColor: '#FF9534',
    borderRadius: 111,
    paddingHorizontal: 10,
  },
  violetBg: {
    backgroundColor: '#B730E1',
    borderRadius: 111,
    paddingHorizontal: 10,
  },
  bottomSection: {
    backgroundColor: 'white',
    flex: 0.3,
    paddingHorizontal: 23,
    paddingVertical: 43,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  sectionBottomText: {
    marginTop: 24,
    alignItems: 'center',
  },
  sectionText: {
    flexDirection: 'row',
  },
  boldText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
export default style;
