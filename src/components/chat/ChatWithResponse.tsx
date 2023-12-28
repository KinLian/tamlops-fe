import { chatWithResponseProps } from "@/types/components";
import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

function ChatWithResponse({
  id,
  type,
  prompt,
  result,
  isLoading,
}: chatWithResponseProps) {
  return (
    <Flex id={id} flexDirection="column" gap="4" mr="4">
      <Text
        as={motion.p}
        alignSelf="end"
        w="fit-content"
        px="6"
        py="4"
        whiteSpace="pre-line"
        bg="blue.100"
        color="black"
        borderRadius="md"
        initial={{
          clipPath: "inset(0% 0% 100% 100% round 10px)",
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.5,
          },
        }}
      >
        {prompt}
      </Text>
      <Flex w="fit-content" flexDirection="column" gap="2">
        <Text>TAMLOps - Tugas Akhir</Text>
        {isLoading || type === "text" ? (
          <Text
            as={motion.p}
            w="fit-content"
            px="6"
            py="4"
            bg="white"
            color="black"
            borderRadius="md"
            initial={{
              clipPath: "inset(0% 100% 100% 0% round 10px)",
            }}
            animate={{
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.5,
              },
            }}
          >
            {isLoading ? "Menunggu jawaban..." : result}
          </Text>
        ) : (
          <Image
            as={motion.img}
            alt={id}
            src={result}
            w="fit-content"
            px="6"
            py="4"
            bg="white"
            color="black"
            borderRadius="md"
            initial={{
              clipPath: "inset(0% 100% 100% 0% round 10px)",
            }}
            animate={{
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.5,
              },
            }}
          />
        )}
      </Flex>
    </Flex>
  );
}

export default ChatWithResponse;
