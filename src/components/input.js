import React from 'react';
import {Text, Input, Box} from 'native-base';

const InputText = ({
  error,
  errorText = 'This field is empty!',
  refer,
  ...props
}) => {
  return (
    <Box>
      <Input
        ref={refer}
        height={50}
        borderWidth={0}
        fontSize={16}
        clearButtonMode="while-editing"
        error={error}
        selectionColor={'#93B0F5'}
        {...props}
      />
      {error && (
        <Text left={3} color={'red.500'}>
          {errorText}
        </Text>
      )}
    </Box>
  );
};

export {InputText};
