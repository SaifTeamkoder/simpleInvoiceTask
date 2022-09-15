import React, { useEffect, useState } from "react";
import { Box, Text, HStack, Pressable, Button } from "native-base";
import { FlashList } from "@shopify/flash-list";
import { useDispatch, useSelector } from "react-redux";
import { fetchInvoice } from "../../redux/action/invoice";
import { ActivityIndicator } from "react-native";
import { Icons, InputText } from "../../components";

const InvoiceList = ({ navigation }) => {
  const dispatch = useDispatch();
  //
  const store = useSelector((state) => ({
    INVOICE_LIST_DATA: state?.invoice?.fetchedInvoiceData?.data,
    INVOICE_LIST_PAGE: state?.invoice?.fetchInvoiceTotalPages,
    INVOICE_LIST_NEXT_PAGE_LOADER: state?.invoice?.fetchInvoicePageLoader,
  }));
  //
  let [pageNo, setPageNo] = useState(1);
  const [invoiceDate, setInvoiceDate] = useState("INVOICE_DATE");
  const [createdDate, setCreatedDate] = useState("CREATED_DATE");
  const [listOrder, setListOrder] = useState("ASCENDING");

  useEffect(() => {
    dispatch(fetchInvoice({ pageNo, invoiceDate, createdDate, listOrder }, navigation));
  }, [pageNo]);

  const renderItem = ({ item, index }) => (
    <Pressable key={item.invoiceId} onPress={() => navigation.navigate("Invoice Details", { data: item })}>
      {({ isPressed }) => {
        return (
          <Box
            p="5"
            my="2"
            rounded="5"
            bg={isPressed ? "red.200" : "coolGray.100"}
            style={{
              transform: [
                {
                  scale: isPressed ? 0.98 : 1,
                },
              ],
            }}
          >
            <Text color="#000">Invoice Date: {item.invoiceDate}</Text>
            <Text color="#000">Invoice Number: {item.invoiceNumber}</Text>
            <Text color="#000">Customer: {item.customer.firstName}</Text>
            <Text color="#000">Total Amount: {item.totalAmount}</Text>
          </Box>
        );
      }}
    </Pressable>
  );

  const keyExtractor = (item, index) => index;

  const fetchMoreData = () => {
    if (store?.INVOICE_LIST_PAGE >= pageNo) {
      setPageNo(pageNo++);
    }
  };

  if (store.INVOICE_LIST_DATA === undefined) {
    return (
      <Box flex="1" bgColor="#FFF" justifyContent={"center"}>
        <Text fontSize="16" textAlign="center" color={"#000"}>
          NO DATA FOUND
        </Text>
      </Box>
    );
  }

  return (
    <Box flex="1" bgColor="#FFF">
      <Box w="90%" flex="1" alignSelf="center">
        {/* <Box marginTop="2">
          <InputText placeholder="Search Invoice" />
        </Box> */}

        <FlashList
          data={store.INVOICE_LIST_DATA}
          removeClippedSubviews
          ListFooterComponent={
            <Box marginBottom={200}>
              {store.INVOICE_LIST_NEXT_PAGE_LOADER && <ActivityIndicator size="large" color="red" />}
            </Box>
          }
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreData}
          estimatedItemSize={200}
        />
      </Box>
    </Box>
  );
};

export default InvoiceList;
