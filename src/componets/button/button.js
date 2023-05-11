import { Text, TouchableOpacity, View } from 'react-native';
import style from './styles';

const Button = ({ title, color, onClick }) => {
  const renderBgStyle = () => {
    switch (color) {
      case 'violet':
        return style.violet;
      case 'white':
        return style.white;
      default:
        return style.violet;
    }
  };
  const renderTextStyle = () => {
    switch (color) {
      case 'white':
        return style.blackText;
      case 'violet':
        return style.whiteText;
      default:
        return style.blackText;
    }
  };
  return (
    <TouchableOpacity style={style.container} onPress={onClick}>
      <View style={[style.button, renderBgStyle()]}>
        <Text style={[style.text, renderTextStyle()]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Button;
