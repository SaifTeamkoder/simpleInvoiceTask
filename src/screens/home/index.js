import React from "react";
import { Box, Text, HStack, Pressable, VStack } from "native-base";
import { Icons } from "../../components";

const Home = ({ navigation }) => {
  const list = [
    { id: 1, title: "Create Invoice", icon: "add-outline", nav: "Create Invoice" },
    { id: 2, title: "View Invoice List", icon: "chevron-forward-outline", nav: "Invoice List" },
    { id: 3, title: "My Profile", icon: "chevron-forward-outline", nav: "Profile" },
  ];

  return (
    <Box flex="1" bgColor="#FFF" justifyContent="center">
      <Text my="10" fontSize="24" adjustsFontSizeToFit fontWeight="bold" alignSelf="center">
        Welcome
      </Text>

      {list.map((item, index) => {
        return (
          <VStack w="90%" alignSelf="center">
            <Pressable
              p="5"
              my="2"
              key={item.id}
              borderRadius="20"
              bgColor="red.100"
              onPress={() => navigation.navigate(item.nav)}
            >
              <HStack justifyContent={"space-between"}>
                <Text alignSelf="center" fontWeight="bold" color="#272727" fontSize="18">
                  {item.title}
                </Text>
                <Icons.Ionicons name={item.icon} color="#272727" size={26} />
              </HStack>
            </Pressable>
          </VStack>
        );
      })}
    </Box>
  );
};

export default Home;
