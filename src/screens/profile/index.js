import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { Box } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../../components";

const Profile = ({ navigation }) => {
  return (
    <Box bgColor="#FFF" flex="1" justifyContent="center">
      <Box w="90%" alignSelf="center">
        <Button
          my={4}
          buttonOnPress={() =>
            AsyncStorage.removeItem("accessToken").then(async () => {
              navigation.reset({
                routes: [{ name: "Auth" }],
              });
            })
          }
          buttonTextColor="#1A0E72"
          borderColor="#1A0E72"
          buttonText={"Log Out"}
          customButtonStyle={{
            height: 50,
          }}
        />
      </Box>
    </Box>
  );
};

export default Profile;
