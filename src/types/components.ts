import { BoxProps } from "@chakra-ui/react";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface mainLayoutProps extends BoxProps {
  title: string;
  isLoading: boolean;
}

export interface chatWithResponseProps {
  id: string;
  number: number;
  prompt: string;
  result: string;
  isLoading?: boolean;
}

export interface chatSectionProps {
  data: chatWithResponseProps[];
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
