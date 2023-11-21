import { chatSectionProps, chatWithResponseProps } from "@/types/components";
import { Box, Button, Textarea, Flex } from "@chakra-ui/react";
import { ChatWithResponse } from "../chat";
import { useEffect, useRef } from "react";

function ChatSection({ data, value, setValue }: chatSectionProps) {
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

  useEffect(() => {
    if (ref && ref.current && resultRef && resultRef.current) {
      handleAutosizeTextarea(ref, resultRef);
    }
  }, [value]);

  const contentScrollStyle = {
    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-track": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#2C5282",
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
        {data.map((item: chatWithResponseProps) => (
          <ChatWithResponse key={item.id} {...item} isLoading={false} />
        ))}
      </Flex>
      <Box
        bottom="8"
        w="calc(100% - 128px)"
        pt="4"
        position="fixed"
        zIndex="99"
        overflowY="auto"
        css={contentScrollStyle}
      >
        <Textarea
          resize="none"
          variant="tamlops"
          placeholder="Dialog untuk dirangkum"
          minH="56px"
          maxH="140px"
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
        <Button position="absolute" zIndex="99" right="4" bottom="2">
          Rangkum
        </Button>
      </Box>
    </>
  );
}

export default ChatSection;
