import { defineStyleConfig, defineStyle } from "@chakra-ui/react";

const tamlops = defineStyle((props) => {
  return {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    bg: props.colorScheme,
    color: "black",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    _selected: {
      bg: props.colorScheme,
    },
    _placeholder: {
      fontWeight: "medium",
      color: "blackAlpha.500",
    },
  };
});

const textarea = defineStyleConfig({
  variants: { tamlops },
});

export default textarea;
