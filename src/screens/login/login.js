import { KeyboardAvoidingView, Text, View } from 'react-native';
import style from './styles';
import Triangle from '../../../public/assets/svg/triangle';
import FlowerSvg from '../../../public/assets/svg/flower';
import Button from '../../componets/button/button';
import PhoneInput from 'react-phone-number-input/react-native-input';
import { useState } from 'react';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidNumber, setIsValidNumber] = useState(true);
  const handlePhoneNumberChange = value => {
    setPhoneNumber(value);
    const isNumberInDatabase = checkPhoneNumberInDatabase(value);
    setIsValidNumber(isNumberInDatabase);
  };

  const checkPhoneNumberInDatabase = value => {
    const phoneNumbersInDatabase = ['111111111', '9876543210'];
    return phoneNumbersInDatabase.includes(value);
  };
  return (
    <KeyboardAvoidingView style={style.container} behavior="padding" enabled>
      <View style={style.topImage}>
        <Triangle />
      </View>
      <View style={style.topConatiner}>
        <Text style={style.title}>Welcome back</Text>
        <View style={{ flexDirection: 'row', position: 'relative' }}>
          <View style={style.flowerSvg}>
            <FlowerSvg />
          </View>
          <Text style={style.title}>to</Text>
          <View style={style.violetBg}>
            <Text style={style.title}>sip</Text>
          </View>
          <Text style={style.title}>social</Text>
        </View>
      </View>
      <View style={style.descriptionBlock}>
        <Text style={style.descriptionText}>
          Enter your mobile number to login
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold', marginTop: 48 }}>MOBILE NUMBER</Text>
        <PhoneInput
          defaultCountry="US"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          style={style.phone}
          textInputProps={{
            maxLength: 16,
          }}
          keyboardType="phone-pad"
        />
        {!isValidNumber && (
          <Text style={{ color: 'red', marginTop: 5 }}>
            The mobile number is not registered to any account
          </Text>
        )}
        <Text style={{ textDecorationLine: 'underline', marginTop: 16 }}>
          Changed number? Contact Us
        </Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Button
          color={'violet'}
          title={'Login'}
          onClick={() => console.log('sdg')}
        />
        <Text style={style.infoText}>
          By continuing you will receive an SMS for
        </Text>

        <Text style={style.infoText}>
          verification. Message and data rates may apply.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Login;
