import React, { useState, useRef } from "react";
import { Platform } from "react-native";
import { Box, KeyboardAvoidingView, ScrollView, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/action/auth";
import { InputText, Button, Icons } from "../../components/";
import { Formik } from "formik";
import * as Yup from "yup";

const SignIn = ({ navigation, route }) => {
  const dispatch = useDispatch();
  //
  const store = useSelector((state) => ({
    SIGNIN_LOADER: state?.auth?.signInLoader,
  }));
  //
  const i1 = useRef(null);
  const i2 = useRef(null);
  //
  const [showPass, setshowPass] = useState(true);
  //
  const schema = Yup.object().shape({
    email: Yup.string().required("Required"),
    password: Yup.string()
      .matches(/^.{6,}$/, "Minimum six characters")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        email: "dung+octopus4@101digital.io",
        password: "Abc@123456",
      }}
      validationSchema={schema}
      onSubmit={(values) => dispatch(signIn(values, navigation))}
    >
      {({ handleChange, handleBlur, handleSubmit, errors, touched, values: { email, password } }) => (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} flex={1}>
          <ScrollView
            bg={"#FFF"}
            safeAreaTop
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            <Box testID="loginView" flex="1" w={"90%"} alignSelf="center" justifyContent="center">
              <Text my="10" fontSize="24" adjustsFontSizeToFit fontWeight="bold" alignSelf="center">
                Simple Invoice
              </Text>
              <InputText
                refer={i1}
                value={email}
                testID="emailInput"
                error={errors.email && touched.email}
                errorText={errors.email}
                placeholder={"Email ID"}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                returnKeyType="next"
                autoCapitalize="none"
                onSubmitEditing={() => i2.current.focus()}
              />
              <InputText
                refer={i2}
                secureTextEntry={showPass}
                value={password}
                testID="passwordInput"
                error={errors.password && touched.password}
                errorText={errors.password}
                placeholder={"Password"}
                keyboardType="default"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                returnKeyType="send"
                InputRightElement={
                  <Icons.Octicons
                    color="#555"
                    size={20}
                    name={showPass ? "eye-closed" : "eye"}
                    onPress={() => setshowPass(!showPass)}
                    style={{
                      right: 15,
                    }}
                  />
                }
                onSubmitEditing={handleSubmit}
              />
              <Button
                my={4}
                buttonOnPress={() => handleSubmit()}
                buttonTextColor="#1A0E72"
                borderColor="#1A0E72"
                buttonText={"Login"}
                customButtonStyle={{
                  height: 50,
                }}
                buttonOpacity={email.length >= 1 && password.length >= 1 ? "enabled" : "disabled"}
                loadingIndicator={store.SIGNIN_LOADER}
                testID="loginButton"
              />
            </Box>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};
export default SignIn;
