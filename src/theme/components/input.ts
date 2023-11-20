import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const tamlops = definePartsStyle((props) => {
  return {
    field: {
      width: "100%",
      minWidth: 0,
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
      bg: props.colorScheme,
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
    },
  };
});

const input = defineMultiStyleConfig({
  variants: { tamlops },
});

export default input;
