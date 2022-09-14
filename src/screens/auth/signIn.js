import React, {useState, useRef} from 'react';
import {ActivityIndicator} from 'react-native';
import {Box, Text, ScrollView, Pressable, Input, Button} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import login from "../../config/apiCall";
import {Formik} from 'formik';
import * as Yup from 'yup';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  //
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(true);
  //
  const i1 = useRef(null);
  const i2 = useRef(null);

  function signIn() {
    dispatch(login())
    console.log('login api call');
  }

  if (loading) {
    return (
      <Box flex="1" justifyContent="center">
        <ActivityIndicator size="large" color="blue" />
      </Box>
    );
  }

  return (
    <Box flex="1" bgColor="#E9EFFD"  justifyContent="center">
        <Input
          my={2}
          h={60}
          fontSize={16}
          value={username}
          autoCapitalize="none"
          placeholder="Email ID"
          onChangeText={text => setUsername(text)}
        />
        <Input
          my={2}
          h={60}
          fontSize={16}
          secureTextEntry
          value={password}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={text => setPassword(text)}
        />
        <Button my="2" h="60" onPress={() => signIn()}>
          <Text fontSize="16" color="#FFF">
            LOGIN
          </Text>
        </Button>
        <Pressable my="6" onPress={() => navigation.navigate('SignUp')}>
          <Text textAlign={'center'}>Dont't have a account? Sign up here!</Text>
        </Pressable>
      </Box>
  );
};

export default SignIn;
