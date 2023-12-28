import { BoxProps } from "@chakra-ui/react";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

export type promptType = "text" | "image";

export interface mainLayoutProps extends BoxProps {
  title: string;
  isLoading: boolean;
}

export interface chatWithResponseProps {
  id: string;
  type: promptType;
  prompt: string;
  result: string;
  isLoading?: boolean;
}

export interface chatSectionProps {
  type: promptType;
  data: chatWithResponseProps[];
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onClick: () => void;
}
export interface promptResponse {
  error: boolean;
  response: string;
}
