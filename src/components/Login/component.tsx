"use client";

import { Button, Card, Stack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginRequestSchema, LoginType } from "@/schemas/auth.schema";
import { Input } from "../inputFields/Input/component";
import { PasswordInput } from "../inputFields/PasswordInput.tsx/component";

export const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(loginRequestSchema),
  });

  function onSubmit(formData: LoginType) {
    console.log(formData);
  }

  return (
    <Card.Root
      as={"form"}
      onSubmit={handleSubmit(onSubmit)}
      border={"none"}
      p={{ base: "2", md: "5" }}
      w={"full"}
      borderRadius={"2xl"}
      borderBottomRadius={{ mdDown: "0" }}
      gap={2}
    >
      <Card.Header>
        <Card.Title fontSize={{ mdDown: "1" }}>
          Faça login para acessar sua conta
        </Card.Title>
      </Card.Header>

      <Card.Body>
        <Stack gap={"3"}>
          <Input
            inputProps={{
              placeholder: "E-mail",
              ...register("email"),
            }}
            error={errors.email?.message}
          />

          <PasswordInput
            inputProps={{
              type: "button",
              placeholder: "Senha",
              ...register("email"),
            }}
            error={errors.password?.message}
          />
          <Text
            textAlign={"end"}
            fontSize={"xs"}
            color={"red.600"}
            _hover={{ color: "red.500" }}
            cursor={"pointer"}
          >
            Esqueci a senha
          </Text>
        </Stack>
      </Card.Body>

      <Card.Footer pb={{ base: 8, md: 0 }}>
        <Stack direction={"column"} w={"100%"} gap={2.5}>
          <Button
            borderRadius={"2xl"}
            fontSize={"3"}
            bg={"red.600"}
            _hover={{ bg: "red.500" }}
            type="submit"
          >
            Entrar
          </Button>

          <Button
            color={"white"}
            borderRadius={"2xl"}
            fontSize={"3"}
            variant={"outline"}
            type="button"
          >
            Não tenho uma conta
          </Button>
        </Stack>
      </Card.Footer>
    </Card.Root>
  );
};
