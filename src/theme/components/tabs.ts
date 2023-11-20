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
      color: mode(`${c}.700`, `${c}.700`)(props),
      _selected: {
        bg: mode(`${c}.700`, `${c}.700`)(props),
        color: mode(`white`, `${c}.700`)(props),
      },
    },
    tabpanels: {
      h: "calc(100vh - 186px)",
    },
    tabpanel: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      h: "full",
    },
  };
});

const variants = {
  tamlops: tamlopsVariant,
};

const tabs = defineMultiStyleConfig({ variants });

export default tabs;
