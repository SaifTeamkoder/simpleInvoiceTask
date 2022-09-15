import React, { useEffect, useState } from "react";
import { Box, Text, HStack, Pressable, Modal, Button } from "native-base";
import { FlashList } from "@shopify/flash-list";
import { useDispatch, useSelector } from "react-redux";
import { fetchInvoice } from "../../redux/action/invoice";
import { ActivityIndicator, Platform } from "react-native";
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
  const [showModal, setShowModal] = useState(false);
  const [searchInput, setSearchInput] = useState('')
  const [data, setData] = useState(store.INVOICE_LIST_DATA);

  const listOrderFilter = [{ order: "ASCENDING" }, { order: "DESCENDING" }];

  useEffect(() => {
    dispatch(fetchInvoice({ pageNo, invoiceDate, createdDate, listOrder }, navigation));
  }, [pageNo]);

  useEffect(() => {
    setData(store.INVOICE_LIST_DATA)
  }, [store.INVOICE_LIST_DATA]);

  function callAPI() {
    dispatch(fetchInvoice({ pageNo, invoiceDate, createdDate, listOrder }, navigation));
    setShowModal(false);
  }
  const updateSearchInput = (input) => {
    setSearchInput(input);
    const searchInput = input.trim().toLowerCase();
    const newSearchData = store.INVOICE_LIST_DATA.filter((item) => {
      return (
        (item.invoiceId !== null && item.invoiceId !== undefined) &&
        item.invoiceId
          .trim()
          .toLowerCase()
          .includes(searchInput) ||
        (item.invoiceNumber !== null && item.invoiceNumber !== undefined) &&
        item.invoiceNumber
          .toString()
          .trim()
          .toLowerCase()
          .includes(searchInput) ||
        (item.firstName !== null && item.firstName !== undefined) &&
        item.firstName
          .trim()
          .toLowerCase()
          .includes(searchInput) ||
        (item.totalAmount !== null && item.totalAmount !== undefined) &&
        item.totalAmount
          .toString()
          .trim()
          .toLowerCase()
          .includes(searchInput)
      );
    });
    if (searchInput === '') {
      setData(store.INVOICE_LIST_DATA)
    } else {
      setData(newSearchData)
    }
  }
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
          {store.INVOICE_LIST_NEXT_PAGE_LOADER === true ? "LOADING DATA" : "NO DATA FOUND"}
        </Text>
      </Box>
    );
  }

  return (
    <Box flex="1" bgColor="#FFF">
      <Box w="90%" flex="1" alignSelf="center">
        <HStack marginTop="2" justifyContent="space-between">
          <Box w="80%">
            <InputText placeholder="Search Invoice"
              value={searchInput}
              onChangeText={(text) => { updateSearchInput(text) }}
            />
          </Box>
          <Pressable
            onPress={() => {
              setShowModal(true)
            }

            }
            borderRadius="5"
            borderWidth="1"
            p="2"
            alignSelf="center"
          >
            <Icons.Ionicons name={"filter-outline"} color="#272727" size={30} />
          </Pressable>
        </HStack>

        <FlashList
          data={data}
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

      {/* FILTER MODAL */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Filter Invoice List</Modal.Header>
          {/* 
          fromDate/toDate : represented in YYYY-MM-dd, i.e: 2018-12-20
          Order by : ASCENDING or DESCENDING,
          sortBy :  Sort the result,  i.e CREATED_DATE,etc
          status : Paid
          keyword : For search, i.e ‘IV1649318870503' <invoiceNumber>
          */}
          <Modal.Body>
            <Text fontWeight={"bold"}>Order by</Text>
            <HStack my="2" justifyContent="space-between">
              {listOrderFilter.map((item, index) => {
                return (
                  <Button
                    bg={listOrder === item.order ? "red.500" : "coolGray.500"}
                    onPress={() => setListOrder(item.order)}
                  >
                    <Text color="#FFF">{item.order}</Text>
                  </Button>
                );
              })}
            </HStack>

            {/* <Text>Sort by</Text>
            <Text>Date by</Text> */}
          </Modal.Body>
          <Modal.Footer justifyContent="space-between">
            <Button onPress={() => setShowModal(false)} w="48%">
              <Text color="#FFF">Cancel</Text>
            </Button>
            <Button onPress={() => callAPI()} w="48%">
              <Text color="#FFF">Apply</Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default InvoiceList;
