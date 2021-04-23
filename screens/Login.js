import React, {useState} from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
const Login = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState(null);
  const [isSelected, setSelection] = useState(false);

  return (
    <View>
      <SafeAreaView>
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://static-cse.canva.com/blob/211916/30-50-logotipos-que-te-inspiraran.png',
          }}
        />
        <Text style={styles.text}>UserName</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="UserName"
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Password"
          keyboardType="visible-password"
          secureTextEntry={true}
        />
      </SafeAreaView>

      <Button title="Sing in" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  text: {
    marginLeft: 12,
    marginTop: 10,
    marginBottom: -10,
  },
  tinyLogo: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    marginLeft: 150,
  },
});
export default Login;
