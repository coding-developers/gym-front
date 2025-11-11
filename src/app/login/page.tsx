import { chessHallLogo } from "@/assets";
import LoginComponent from "@/components/Login";
import { Box, Flex, Image, Stack } from "@chakra-ui/react";

function Login() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg={"#020202"}
      h={"100svh"}
      w={"full"}
      align={"center"}
      justify={{ base: "space-between", md: "center" }}
      gap={{ md: 14, lg: 24 }}
      p={{ md: 12 }}
    >
      <Box display={"block"} my={"auto"}>
        <Image
          src={chessHallLogo.src}
          fit={"contain"}
          w={"auto"}
          maxH={{ base: "240px", sm: "280px", md: "300px" }}
        >
        </Image>
      </Box>
      <Stack w={"full"} maxW={{ sm: "400px", md: "420px" }}>
        <LoginComponent />
      </Stack>
    </Flex>
  );
}

export default Login;
