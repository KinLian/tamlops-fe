import { tabsAnatomy } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools"; // import utility to set light and dark mode props
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const tamlopsVariant = definePartsStyle((props) => {
  const { colorScheme: c } = props;

  return {
    tab: {
      borderRadius: "lg",
      fontWeight: "semibold",
      color: mode(`white`, `${c}.700`)(props),
      _selected: {
        bg: mode(`${c}.800`, `${c}.800`)(props),
        color: mode(`white`, `${c}.700`)(props),
      },
      h: "full"
    },
    tabpanels: {
      px: "0",
      minH: { base: "calc(100vh - 180px)", md: "calc(100vh - 224px)" },
      h: "full",
    },
    tabpanel: {
      display: "flex",
      position: "relative",
      flexDirection: "column",
      justifyContent: "space-between",
      px: "0",
      color: mode(`white`, `${c}.700`)(props),
      h: "full",
    },
  };
});

const variants = {
  tamlops: tamlopsVariant,
};

const tabs = defineMultiStyleConfig({
  defaultProps: {
    size: "md",
    variant: "tamlops",
    colorScheme: "blue",
  },
  variants,
});

export default tabs;
