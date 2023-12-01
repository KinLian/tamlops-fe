import { chatSectionProps, chatWithResponseProps } from "@/types/components";
import { Box, Button, Textarea, Flex, Text, Heading } from "@chakra-ui/react";
import { ChatWithResponse } from "../chat";
import { MutableRefObject, useEffect, useRef } from "react";

function ChatSection({
  data,
  placeholder,
  value,
  setValue,
  onClick,
}: chatSectionProps) {
  const ref = useRef<HTMLElement>();
  const resultRef = useRef<HTMLElement>();

  function handleAutosizeTextarea(textareaRef: any, resultRef: any) {
    textareaRef.current.style.height = "0px";
    resultRef.current.style.height = "calc(100vh - 228px)";
    const scrollHeight =
      textareaRef.current.scrollHeight > 0
        ? textareaRef.current.scrollHeight
        : 56;
    textareaRef.current.style.height = scrollHeight + "px";
    resultRef.current.style.height = `calc(100vh - ${
      scrollHeight > 142 ? 314 : scrollHeight + 172
    }px)`;
  }

  function handleAutoScroll(refX: MutableRefObject<HTMLElement | undefined>) {
    if (refX && refX.current) {
      const lastChildElement = refX.current?.lastElementChild;
      lastChildElement?.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    if (ref && ref.current && resultRef && resultRef.current) {
      handleAutosizeTextarea(ref, resultRef);
    }
  }, [value]);

  useEffect(() => {
    if (ref && ref.current) {
      handleAutoScroll(resultRef);
    }
  }, [data]);

  const contentScrollStyle = {
    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-track": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "white",
      borderRadius: "24px",
    },
  };

  const textAreaScrollStyle = {
    ...contentScrollStyle,
    "&::-webkit-scrollbar-thumb": {
      background: "gray",
      borderRadius: "24px",
    },
  };

  return (
    <>
      <Flex
        ref={resultRef as any}
        position="relative"
        zIndex="1"
        gap="4"
        flexDirection="column"
        h="calc(100vh - 228px)"
        overflowY="auto"
        css={contentScrollStyle}
      >
        {data.length > 0 ? (
          data.map((item: chatWithResponseProps) => (
            <ChatWithResponse key={item.id} {...item} />
          ))
        ) : (
          <Box m="auto">
            <Heading textAlign="center" mb="4">
              TAMLOps - Tugas Akhir
            </Heading>
            <Text textAlign="center">
              Rangkum suatu dialog atau buatlah gambar disini
            </Text>
          </Box>
        )}
      </Flex>
      <Flex
        bottom="8"
        w={{ base: "calc(100% - 32px)", md: "calc(100% - 128px)" }}
        mt="4"
        position="fixed"
        zIndex="99"
        overflowY="auto"
        bg="white"
        borderRadius="md"
        css={contentScrollStyle}
      >
        <Textarea
          resize="none"
          variant="tamlops"
          placeholder={placeholder}
          minH="56px"
          maxH="140px"
          mr="-28"
          pr="32"
          py="4"
          bottom="0"
          zIndex="1"
          ref={ref as any}
          value={value}
          onChange={(e) => {
            if (e.target.value !== "\n") setValue(e.target.value);
          }}
          css={textAreaScrollStyle}
        />
        <Button
          alignSelf="end"
          zIndex="99"
          right="3"
          bottom="2"
          onClick={onClick}
        >
          Rangkum
        </Button>
      </Flex>
    </>
  );
}

export default ChatSection;
