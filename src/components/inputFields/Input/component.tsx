import { IInputBaseProps } from "@/components/inputFields/interface";
import { Field, Input as ChakraInput, InputProps } from "@chakra-ui/react";
import { FieldValues } from "react-hook-form";

interface IInputProps<T extends FieldValues> extends IInputBaseProps<T> {
    inputProps?: InputProps
}

export const Input = <T extends FieldValues>({
  rootProps,
  inputProps,
  register,
  error,
  ...rest
}: IInputProps<T>) => {
  return (
    <Field.Root {...rootProps} invalid={Boolean(error)}>
      <ChakraInput
        type="email"
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
