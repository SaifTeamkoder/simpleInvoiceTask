import React, {useEffect, useState, useCallback, memo} from 'react';
import {Box, Text, HStack, Pressable, Button} from 'native-base';
import {FlashList} from '@shopify/flash-list';
import {useDispatch, useSelector} from 'react-redux';
import {fetchInvoice} from '../../redux/action/invoice';
import {ActivityIndicator} from 'react-native';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  //
  const store = useSelector(state => ({
    INVOICE_LIST_DATA: state?.invoice?.fetchedInvoiceData?.data,
    INVOICE_LIST_PAGE: state?.invoice?.fetchInvoiceTotalPages,
    INVOICE_LIST_NEXT_PAGE_LOADER: state?.invoice?.fetchInvoicePageLoader,
  }));
  console.log(store.INVOICE_LIST_PAGE, 'INVOICE_LIST_PAGE');
  //
  const [pageNo, setPageNo] = useState(1);
  const [invoiceDate, setInvoiceDate] = useState('INVOICE_DATE');
  const [createdDate, setCreatedDate] = useState('CREATED_DATE');
  const [listOrder, setListOrder] = useState('ASCENDING');

  useEffect(() => {
    dispatch(
      fetchInvoice({pageNo, invoiceDate, createdDate, listOrder}, navigation),
    );
  }, [pageNo]);

  const renderItem = useCallback(
    ({item, index}) => (
      <Pressable
        key={item.invoiceId}
        onPress={() => navigation.navigate('InvoiceDetails', {data: item})}>
        {({isPressed}) => {
          return (
            <Box
              p="5"
              my="2"
              rounded="5"
              bg={isPressed ? 'red.200' : 'coolGray.100'}
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.98 : 1,
                  },
                ],
              }}>
              <Text color="#000">Invoice Date: {item.invoiceDate}</Text>
              <Text color="#000">Invoice Number: {item.invoiceNumber}</Text>
              <Text color="#000">Customer: {item.customer.firstName}</Text>
              <Text color="#000">Total Amount: {item.totalAmount}</Text>
            </Box>
          );
        }}
      </Pressable>
    ),
    [],
  );

  const keyExtractor = useCallback((item, index) => String(index), []);

  const fetchMoreData = () => {
    if (store?.INVOICE_LIST_PAGE >= pageNo) {
      setPageNo(pageNo++);
    }
  };

  return (
    <Box flex="1" bgColor="#FFF">
      <Box w="90%" flex="1" alignSelf="center">
        <HStack my="2" justifyContent={'space-between'}>
          <Text alignSelf={'center'} my="1" fontSize="18" fontWeight="bold">
            Invoice Lists!
          </Text>
          <Button onPress={() => navigation.navigate('Create Invoice')}>
            <Text color="#FFF" fontWeight="bold">
              Create Invoice
            </Text>
          </Button>
        </HStack>
        <FlashList
          data={store.INVOICE_LIST_DATA}
          removeClippedSubviews
          // refreshControl={refreshControl}
          ListFooterComponent={
            <Box marginBottom={200}>
              {store.INVOICE_LIST_NEXT_PAGE_LOADER && (
                <ActivityIndicator size="large" color="red" />
              )}
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

export default memo(Home);
