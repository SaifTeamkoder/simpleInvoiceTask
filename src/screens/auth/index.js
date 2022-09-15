import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {Box} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  const checkToken = async () => {
    token = await AsyncStorage.getItem('accessToken');
    if (token === null) {
      navigation.reset({routes: [{name: 'SignIn'}]});
    } else {
      navigation.reset({routes: [{name: 'Home'}]});
    }
  };

  useEffect(() => {
    checkToken();
  }, [navigation]);

  return (
    <Box flex="1" alignSelf="center" justifyContent="center">
      <ActivityIndicator size="large" color="1A0E72" />
    </Box>
  );
};

export default Splash;
