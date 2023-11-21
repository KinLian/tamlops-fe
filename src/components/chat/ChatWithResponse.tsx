import { chatWithResponseProps } from "@/types/components";
import { Flex, Text } from "@chakra-ui/react";

function ChatWithResponse({
  id,
  number,
  prompt,
  result,
  isLoading,
}: chatWithResponseProps) {
  return (
    <Flex id={id} flexDirection="column" gap="4">
      <Text
        w="fit-content"
        px="4"
        py="2"
        fontWeight="semibold"
        bg="blue.600"
        borderRadius="md"
      >
        Prompt: {number}
      </Text>
      <Text
        w="fit-content"
        px="4"
        py="2"
        whiteSpace="pre-line"
        bg="white"
        color="black"
        borderRadius="md"
      >
        {prompt}
      </Text>
      <Text
        w="fit-content"
        px="4"
        py="2"
        bg="white"
        color="black"
        borderRadius="md"
      >
        {isLoading ? "..." : result}
      </Text>
    </Flex>
  );
}

export default ChatWithResponse;
