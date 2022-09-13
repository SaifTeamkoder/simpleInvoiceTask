/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Platform } from 'react-native';
import { extendTheme, NativeBaseProvider, v3CompatibleTheme } from 'native-base';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/navigation';




const App = () => {
  const theme = {
    colors: {
      primary: '#00A89C',
      text: '#231A00BD',
      backdrop: '#0005',
      disabled: '#aaa5',
      accent: '#DCDCDC',
      background: '#fff',
      placeholder: '#231A008A'
    }
  };
  const themeNativeBase = extendTheme(v3CompatibleTheme, {
    components: {
      Image: { defaultProps: { alt: 'no image' } },
      ScrollView: { defaultProps: { keyboardShouldPersistTaps: 'handled' } },
      Stack: { baseStyle: { overflow: Platform.OS == 'ios' ? 'visible' : 'hidden' } },
      KeyboardAvoidingView: { defaultProps: { behavior: Platform.OS === 'ios' ? 'padding' : 'height' } },
      Button: {
        baseStyle: {
          size: 'full',
          rounded: 5,
          _text: { color: '#fff' },
          _spinner: { color: '#fff' }
        },
        defaultProps: {
          bgColor: '#00A89C'
        }
      },
      Pressable: {
        baseStyle: {
          borderless: false,
          android_ripple: { color: theme.colors.disabled }
        }
      },
      Checkbox: {
        defaultProps: {
          rounded: '5'
        }
      },
      Text: { defaultProps: { color: '#231A00BD' } }
    },
    // fontConfig: {
    //   RobotoSlab: {
    //     400: {
    //       normal: 'RobotoSlab-Regular'
    //     },
    //     700: {
    //       normal: 'RobotoSlab-Bold'
    //     }
    //   }
    // },

    fonts: {
      // heading: 'RobotoSlab',
      // body: 'RobotoSlab'
    }
  });
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={themeNativeBase}>
        <AppNavigator />
      </NativeBaseProvider>
      <App />
    </Provider>
  );
};



export default App;
