import React from 'react';
import {Box, Text} from 'native-base';

const InvoiceDetails = ({navigation, route}) => {
  const item = route.params.data;
  // {"balanceAmount": 991, "createdAt": "2022-05-10T17:57:32.968", "currency": "GBP", "customFields": [{"key": "invoiceCustomField", "value": "value"}, {"key": "createdBy", "value": "d2258c8d-96b2-48e4-9e4f-0316e3f98059"}], "customer": {"addresses": [], "firstName": "Nguyen", "id": "b605ad26-dd5d-4ea3-a7de-a0b7c5219528", "lastName": "Dung 2", "name": "Dung 2"}, "description": "", "dueDate": "2021-06-04", "extensions": [], "invoiceDate": "2022-05-11", "invoiceGrossTotal": 1000, "invoiceId": "3967f1e8-c3c3-4616-823c-6bd09f5f0c01", "invoiceNumber": "INV1652205443342", "invoiceSubTotal": 910, "merchant": {"id": "6bf32cc4-2dfb-40c6-bd41-a6aea55fd4dc"}, "numberOfDocuments": 1, "referenceNo": "1652205446300", "status": [{"key": "Overdue", "value": true}], "subStatus": [], "totalAmount": 991, "totalDiscount": 110, "totalPaid": 0, "totalTax": 101, "type": "TAX_INVOICE", "version": "1"}

  return (
    <Box flex="1" bgColor="#FFF" p="5">
      <Text my="1" fontSize="16" fontWeight="bold">
        Invoice Details
      </Text>
      <Text fontSize="16" my="1" color="#000">
        Invoice Date: {item.invoiceDate}
      </Text>
      <Text fontSize="16" my="1" color="#000">
        Invoice ID: {item.invoiceId}
      </Text>
      <Text fontSize="16" my="1" color="#000">
        Invoice Number: {item.invoiceNumber}
      </Text>
      <Text fontSize="16" my="1" color="#000">
        Invoice Sub Total: {item.invoiceSubTotal}
      </Text>
      <Text fontSize="16" my="1" color="#000">
        Invoice Gross Total: {item.invoiceGrossTotal}
      </Text>
      <Text my="1" fontSize="16" fontWeight="bold">
        Customer Details
      </Text>
      <Text fontSize="16" color="#000">
        Customer: {item.customer.firstName} {item.customer.lastName}
      </Text>
      <Text my="1" fontSize="16" fontWeight="bold">
        Payment Details
      </Text>
      <Text fontSize="16" my="1" color="#000">
        Invoice Type: {item.type}
      </Text>
      <Text fontSize="16" my="1" color="#000">
        Total Tax: {item.totalTax}
      </Text>
      <Text fontSize="16" my="1" color="#000">
        Total Discount: {item.totalDiscount}
      </Text>
      <Text fontSize="16" my="1" color="#000">
        Total Amount: {item.totalAmount}
      </Text>
    </Box>
  );
};
export default InvoiceDetails;
