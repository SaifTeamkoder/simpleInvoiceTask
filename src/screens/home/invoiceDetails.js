import React from "react";
import { Box, Text } from "native-base";

const InvoiceDetails = ({ navigation, route }) => {
  const item = route.params.data;

  return (
    <Box flex="1" bgColor="#FFF">
      <Box w="90%" alignSelf="center">
        <Text marginTop="5" my="1" fontSize="16" fontWeight="bold">
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
        <Text marginTop="5" my="1" fontSize="16" fontWeight="bold">
          Customer Details
        </Text>
        <Text fontSize="16" color="#000">
          Customer: {item.customer.firstName} {item.customer.lastName}
        </Text>

        {/* PAYMENT DETAILS */}

        <Text marginTop="5" my="1" fontSize="16" fontWeight="bold">
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
    </Box>
  );
};
export default InvoiceDetails;
