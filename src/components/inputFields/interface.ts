import { FieldValues, UseFormRegister } from "react-hook-form";
import type { FieldRootProps } from "@chakra-ui/react";

export interface IInputBaseProps<T extends FieldValues> {
  rootProps?: FieldRootProps
  register?: UseFormRegister<T>;
  error?: string;
}


