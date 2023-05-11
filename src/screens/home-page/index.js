import { Image, Text, View } from 'react-native';
import Button from '../../componets/button/button';
import style from './styles';
import HomeImg from '../../../public/assets/png/Img.png';
const HomePage = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.topSection}>
        <Image source={HomeImg} style={style.image} />
        <View style={style.content}>
          <Text style={[style.title, { fontSize: 11 }]}>WHERE MIGHT</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View>
              <Text style={style.title}>Your next</Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={style.orangeBg}>
                  <Text style={style.title}>sip</Text>
                </View>
                <Text style={style.title}>take you?</Text>
              </View>
            </View>
          </View>
          <Text style={{ marginTop: 20, fontSize: 16 }}>
            Get Ready to discover a world of
          </Text>
          <Text style={{ fontSize: 16 }}>
            drinks, connections, and adventure.
          </Text>
        </View>
      </View>
      <View style={style.bottomSection}>
        <View style={{ gap: 16 }}>
          <Button title={'Get Started'} color={'violet'} />
          <Button
            title={'Already a Member? Log in'}
            color={'white'}
            onClick={() => navigation.navigate('Login')}
          />
        </View>
        <View style={style.sectionBottomText}>
          <Text>By continuing you agree with Sip Social’s</Text>
          <View style={style.sectionText}>
            <Text style={style.boldText}>Terms of service </Text>
            <Text>and </Text>
            <Text style={style.boldText}>Privacy Policy.</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default HomePage;
