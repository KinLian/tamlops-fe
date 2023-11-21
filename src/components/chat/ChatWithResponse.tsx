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
    <Flex id={id} flexDirection="column" gap="4" mr="4">
      <Text
        alignSelf="end"
        w="fit-content"
        px="6"
        py="4"
        whiteSpace="pre-line"
        bg="blue.100"
        color="black"
        borderRadius="md"
      >
        {prompt}
      </Text>
      <Flex w="fit-content" flexDirection="column" gap="2">
        <Text>TAMLOps - Tugas Akhir</Text>
        <Text
          w="fit-content"
          px="6"
          py="4"
          bg="white"
          color="black"
          borderRadius="md"
        >
          {isLoading ? "..." : result}
        </Text>
      </Flex>
    </Flex>
  );
}

export default ChatWithResponse;
