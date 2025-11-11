import { Field } from "@chakra-ui/react";
import { PasswordInput as ChakraPasswordInput, PasswordInputProps } from "@/components/ui/password-input";
import { FieldValues } from "react-hook-form";
import { IInputBaseProps } from "../interface";

interface IPasswordInputProps<T extends FieldValues> extends IInputBaseProps<T> {
    inputProps?: PasswordInputProps
}

export const PasswordInput = <T extends FieldValues>({
  rootProps,
  inputProps,
  register,
  error,
  ...rest
}: IPasswordInputProps<T>) => {
  return (
    <Field.Root {...rootProps} invalid={Boolean(error)}>
      <ChakraPasswordInput
        size={{ base: "sm", md: "md" }}
        border={"none"}
        bg={"white"}
        color={"black"}
        borderBottomRadius={0}
        _placeholder={{ color: "gray.500" }}
        css={{
          "&:-webkit-autofill": {
            boxShadow: "0 0 0px 1000px white inset",
            WebkitTextFillColor: "black",
          },
        }}
        {...inputProps}
      />
      <Field.ErrorText color={"red.500"}>{error}</Field.ErrorText>
    </Field.Root>
  );
};
