import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Pressable, Text, HStack, Box} from 'native-base';

const Button = ({
  buttonOnPress,
  buttonText,
  buttonTextColor,
  size,
  buttonOpacity,
  loadingIndicator,
  showIcon,
  borderColor,
  customButtonStyle,
  disabled,
  ...props
}) => {
  return (
    <Pressable
      w={size == 'half' ? '49.5%' : '100%'}
      alignSelf={'center'}
      onPress={buttonOnPress}
      disabled={disabled}
      {...props}>
      {({isPressed}) => {
        return (
          <Box
            borderWidth={3}
            borderColor={borderColor}
            borderRadius={10}
            style={[
              {
                height: 55,
                opacity: buttonOpacity == 'disabled' ? 0.8 : 1,
                width: '100%',
                justifyContent: 'center',
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              },
              {...customButtonStyle},
            ]}>
            {loadingIndicator === true ? (
              <ActivityIndicator
                style={{alignItems: 'center'}}
                size={20}
                color="#1A0E72"
              />
            ) : (
              <HStack justifyContent={'center'}>
                {showIcon}
                <Text
                  fontSize={18}
                  alignSelf="center"
                  color={buttonTextColor}
                  fontWeight="700">
                  {buttonText}
                </Text>
              </HStack>
            )}
          </Box>
        );
      }}
    </Pressable>
  );
};

export {Button};
