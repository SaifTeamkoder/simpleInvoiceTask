import React, { useState, useRef } from "react";
import { Platform } from "react-native";
import { Box, HStack, KeyboardAvoidingView, ScrollView, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { createInvoice } from "../../redux/action/invoice";
import { InputText, Button, Icons } from "../../components/";
import { Formik } from "formik";
import * as Yup from "yup";

const CreateInvoice = ({ navigation, route }) => {
  const dispatch = useDispatch();
  //
  const store = useSelector((state) => ({
    SIGNIN_LOADER: state?.auth?.signInLoader,
  }));
  //
  const i1 = useRef(null);
  const i2 = useRef(null);
  const i3 = useRef(null);
  const i4 = useRef(null);
  const i5 = useRef(null);
  const i6 = useRef(null);
  const i7 = useRef(null);
  const i8 = useRef(null);
  const i9 = useRef(null);
  const i10 = useRef(null);
  const i11 = useRef(null);
  const i12 = useRef(null);
  const i13 = useRef(null);
  const i14 = useRef(null);
  const i15 = useRef(null);
  const i16 = useRef(null);
  const i17 = useRef(null);
  const i18 = useRef(null);
  const i19 = useRef(null);
  const i20 = useRef(null);

  //
  const [showPass, setshowPass] = useState(true);
  //
  const schema = Yup.object().shape({
    bankId: Yup.string().required("Required"),
    bankSortCode: Yup.string().required("Required"),
    bankAccountName: Yup.string().required("Required"),
    bankAccountNumber: Yup.string().required("Required"),
    //
    custFirstName: Yup.string().required("Required"),
    custLastName: Yup.string().required("Required"),
    custEmailID: Yup.string().required("Required"),
    custMobileNumber: Yup.string().required("Required"),
    //
    addrPremise: Yup.string().required("Required"),
    addrCountryCode: Yup.string().required("Required"),
    addrPostCode: Yup.string().required("Required"),
    addrCountry: Yup.string().required("Required"),
    addrCity: Yup.string().required("Required"),
    //
    invInvoiceRef: Yup.string().required("Required"),
    invInvoiceNumber: Yup.string().required("Required"),
    invInvoiceDate: Yup.string().required("Required"),
    invDueDate: Yup.string().required("Required"),
    invDescription: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={{
        bankId: "", // 455
        bankSortCode: "", // 998
        bankAccountName: "", // hdfc
        bankAccountNumber: "", // 676734637483467
        //
        custFirstName: "", // abcuo
        custLastName: "", // xyzxsx
        custEmailID: "", // prox@yopmail.com
        custMobileNumber: "", // 9988778877
        //
        addrPremise: "", // 45 Extr Resi - acd
        addrCountryCode: "", // IN
        addrPostCode: "", // 954786
        addrCountry: "", // India
        addrCity: "", // Delhi
        //
        invInvoiceRef: "", // d7fbvfdgnhbv45n
        invInvoiceNumber: "", // 7524398
        invInvoiceDate: "", // 2022-12-1
        invDueDate: "", // 2022-12-10
        invDescription: "", // descii
      }}
      validationSchema={schema}
      onSubmit={(values) => dispatch(createInvoice(values, navigation))}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
        values: {
          bankId,
          bankSortCode,
          bankAccountName,
          bankAccountNumber,
          //
          custFirstName,
          custLastName,
          custEmailID,
          custMobileNumber,
          //
          addrPremise,
          addrCountryCode,
          addrPostCode,
          addrCountry,
          addrCity,
          //
          invInvoiceRef,
          invInvoiceNumber,
          invInvoiceDate,
          invDueDate,
          invDescription,
        },
      }) => (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} flex={1}>
          <ScrollView
            bg={"#FFF"}
            safeAreaTop
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            <Box flex="1" w={"90%"} alignSelf="center">
              <Text my="2" fontSize="16" fontWeight="bold">
                Add Bank Account Details
              </Text>
              <HStack justifyContent="space-between">
                <Box w="48%">
                  <InputText
                    refer={i1}
                    value={bankId}
                    error={errors.bankId && touched.bankId}
                    errorText={errors.bankId}
                    placeholder={"Bank ID"}
                    onChangeText={handleChange("bankId")}
                    onBlur={handleBlur("bankId")}
                    returnKeyType="next"
                    autoCapitalize="none"
                    maxLength={20}
                    keyboardType="numeric"
                    onSubmitEditing={() => i2.current.focus()}
                  />
                </Box>
                <Box w="48%">
                  <InputText
                    refer={i2}
                    value={bankSortCode}
                    error={errors.bankSortCode && touched.bankSortCode}
                    errorText={errors.bankSortCode}
                    placeholder={"Sort Code"}
                    onChangeText={handleChange("bankSortCode")}
                    onBlur={handleBlur("bankSortCode")}
                    returnKeyType="next"
                    autoCapitalize="none"
                    maxLength={20}
                    keyboardType="numeric"
                    onSubmitEditing={() => i3.current.focus()}
                  />
                </Box>
              </HStack>

              <InputText
                refer={i3}
                value={bankAccountName}
                error={errors.bankAccountName && touched.bankAccountName}
                errorText={errors.bankAccountName}
                placeholder={"Account Name"}
                keyboardType="default"
                onChangeText={handleChange("bankAccountName")}
                onBlur={handleBlur("bankAccountName")}
                returnKeyType="next"
                autoCapitalize="none"
                maxLength={40}
                onSubmitEditing={() => i4.current.focus()}
              />
              <InputText
                refer={i4}
                value={bankAccountNumber}
                error={errors.bankAccountNumber && touched.bankAccountNumber}
                errorText={errors.bankAccountNumber}
                placeholder={"Account Number"}
                onChangeText={handleChange("bankAccountNumber")}
                onBlur={handleBlur("bankAccountNumber")}
                returnKeyType="next"
                autoCapitalize="none"
                maxLength={30}
                keyboardType="numeric"
                onSubmitEditing={() => i5.current.focus()}
              />
              <Text my="2" fontSize="16" fontWeight="bold">
                Add Customer Details
              </Text>
              <HStack justifyContent="space-between">
                <Box w="48%">
                  <InputText
                    refer={i5}
                    value={custFirstName}
                    error={errors.custFirstName && touched.custFirstName}
                    errorText={errors.custFirstName}
                    placeholder={"First Name"}
                    onChangeText={handleChange("custFirstName")}
                    onBlur={handleBlur("custFirstName")}
                    returnKeyType="next"
                    autoCapitalize="none"
                    maxLength={25}
                    onSubmitEditing={() => i6.current.focus()}
                  />
                </Box>
                <Box w="48%">
                  <InputText
                    refer={i6}
                    value={custLastName}
                    error={errors.custLastName && touched.custLastName}
                    errorText={errors.custLastName}
                    placeholder={"Last Name"}
                    keyboardType="default"
                    onChangeText={handleChange("custLastName")}
                    onBlur={handleBlur("custLastName")}
                    returnKeyType="next"
                    autoCapitalize="none"
                    maxLength={25}
                    onSubmitEditing={() => i7.current.focus()}
                  />
                </Box>
              </HStack>
              <HStack justifyContent="space-between">
                <Box w="48%">
                  <InputText
                    refer={i7}
                    value={custEmailID}
                    error={errors.custEmailID && touched.custEmailID}
                    errorText={errors.custEmailID}
                    placeholder={"custEmailID ID"}
                    onChangeText={handleChange("custEmailID")}
                    onBlur={handleBlur("custEmailID")}
                    returnKeyType="next"
                    autoCapitalize="none"
                    maxLength={35}
                    keyboardType="email-address"
                    onSubmitEditing={() => i8.current.focus()}
                  />
                </Box>
                <Box w="48%">
                  <InputText
                    refer={i8}
                    value={custMobileNumber}
                    error={errors.custMobileNumber && touched.custMobileNumber}
                    errorText={errors.custMobileNumber}
                    placeholder={"Mobile Number"}
                    onChangeText={handleChange("custMobileNumber")}
                    onBlur={handleBlur("custMobileNumber")}
                    returnKeyType="next"
                    autoCapitalize="none"
                    maxLength={14}
                    keyboardType="phone-pad"
                    onSubmitEditing={() => i9.current.focus()}
                  />
                </Box>
              </HStack>

              <Text my="2" fontSize="16" fontWeight="bold">
                Add Address
              </Text>
              <InputText
                refer={i9}
                value={addrPremise}
                error={errors.addrPremise && touched.addrPremise}
                errorText={errors.addrPremise}
                placeholder={"Premise"}
                onChangeText={handleChange("addrPremise")}
                onBlur={handleBlur("addrPremise")}
                returnKeyType="next"
                autoCapitalize="none"
                maxLength={60}
                keyboardType="default"
                onSubmitEditing={() => i10.current.focus()}
              />
              <HStack justifyContent="space-between">
                <Box w="48%">
                  <InputText
                    refer={i10}
                    value={addrCountryCode}
                    error={errors.addrCountryCode && touched.addrCountryCode}
                    errorText={errors.addrCountryCode}
                    placeholder={"Country Code"}
                    onChangeText={handleChange("addrCountryCode")}
                    onBlur={handleBlur("addrCountryCode")}
                    returnKeyType="next"
                    autoCapitalize="none"
                    maxLength={4}
                    keyboardType="default"
                    onSubmitEditing={() => i11.current.focus()}
                  />
                </Box>
                <Box w="48%">
                  <InputText
                    refer={i11}
                    value={addrPostCode}
                    error={errors.addrPostCode && touched.addrPostCode}
                    errorText={errors.addrPostCode}
                    placeholder={"Post Code"}
                    onChangeText={handleChange("addrPostCode")}
                    onBlur={handleBlur("addrPostCode")}
                    returnKeyType="next"
                    autoCapitalize="none"
                    maxLength={10}
                    keyboardType="default"
                    onSubmitEditing={() => i12.current.focus()}
                  />
                </Box>
              </HStack>
              <HStack justifyContent="space-between">
                <Box w="48%">
                  <InputText
                    refer={i12}
                    value={addrCountry}
                    error={errors.addrCountry && touched.addrCountry}
                    errorText={errors.addrCountry}
                    placeholder={"Country"}
                    onChangeText={handleChange("addrCountry")}
                    onBlur={handleBlur("addrCountry")}
                    returnKeyType="next"
                    autoCapitalize="none"
                    maxLength={50}
                    keyboardType="default"
                    onSubmitEditing={() => i13.current.focus()}
                  />
                </Box>
                <Box w="48%">
                  <InputText
                    refer={i13}
                    value={addrCity}
                    error={errors.addrCity && touched.addrCity}
                    errorText={errors.addrCity}
                    placeholder={"City"}
                    onChangeText={handleChange("addrCity")}
                    onBlur={handleBlur("addrCity")}
                    returnKeyType="next"
                    autoCapitalize="none"
                    maxLength={50}
                    keyboardType="default"
                    onSubmitEditing={() => i14.current.focus()}
                  />
                </Box>
              </HStack>

              {/* <Text my="2" fontSize="16" fontWeight="bold">
                Add Documents
              </Text> */}

              <Text my="2" fontSize="16" fontWeight="bold">
                Add Invoice Details
              </Text>
              <HStack justifyContent="space-between">
                <Box w="48%">
                  <InputText
                    refer={i14}
                    value={invInvoiceRef}
                    error={errors.invInvoiceRef && touched.invInvoiceRef}
                    errorText={errors.invInvoiceRef}
                    placeholder={"Invoice Ref."}
                    onChangeText={handleChange("invInvoiceRef")}
                    onBlur={handleBlur("invInvoiceRef")}
                    returnKeyType="next"
                    autoCapitalize="none"
                    maxLength={50}
                    keyboardType="numeric"
                    onSubmitEditing={() => i15.current.focus()}
                  />
                </Box>
                <Box w="48%">
                  <InputText
                    refer={i15}
                    value={invInvoiceNumber}
                    error={errors.invInvoiceNumber && touched.invInvoiceNumber}
                    errorText={errors.invInvoiceNumber}
                    placeholder={"Invoice No."}
                    onChangeText={handleChange("invInvoiceNumber")}
                    onBlur={handleBlur("invInvoiceNumber")}
                    returnKeyType="next"
                    autoCapitalize="none"
                    maxLength={50}
                    keyboardType="numeric"
                    onSubmitEditing={() => i16.current.focus()}
                  />
                </Box>
              </HStack>
              <HStack justifyContent="space-between">
                <Box w="48%">
                  <InputText
                    refer={i16}
                    value={invInvoiceDate}
                    error={errors.invInvoiceDate && touched.invInvoiceDate}
                    errorText={errors.invInvoiceDate}
                    placeholder={"Invoice Date"}
                    onChangeText={handleChange("invInvoiceDate")}
                    onBlur={handleBlur("invInvoiceDate")}
                    returnKeyType="next"
                    autoCapitalize="none"
                    maxLength={20}
                    keyboardType="numeric"
                    onSubmitEditing={() => i17.current.focus()}
                  />
                </Box>
                <Box w="48%">
                  <InputText
                    refer={i17}
                    value={invDueDate}
                    error={errors.invDueDate && touched.invDueDate}
                    errorText={errors.invDueDate}
                    placeholder={"Due Date"}
                    onChangeText={handleChange("invDueDate")}
                    onBlur={handleBlur("invDueDate")}
                    returnKeyType="next"
                    autoCapitalize="none"
                    maxLength={20}
                    keyboardType="numeric"
                    onSubmitEditing={() => i18.current.focus()}
                  />
                </Box>
              </HStack>

              <InputText
                refer={i18}
                value={invDescription}
                error={errors.invDescription && touched.invDescription}
                errorText={errors.invDescription}
                placeholder={"Description"}
                onChangeText={handleChange("invDescription")}
                onBlur={handleBlur("invDescription")}
                returnKeyType="next"
                autoCapitalize="none"
                maxLength={80}
                keyboardType="default"
                onSubmitEditing={handleSubmit}
              />

              <Button
                my={4}
                buttonOnPress={() => handleSubmit()}
                buttonTextColor="#1A0E72"
                borderColor="#1A0E72"
                buttonText={"Submit"}
                customButtonStyle={{
                  height: 50,
                }}
                // loadingIndicator={store.SIGNIN_LOADER}
              />
            </Box>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};
export default CreateInvoice;
