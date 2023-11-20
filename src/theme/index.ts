import { extendTheme } from "@chakra-ui/react";
import { fonts, config } from "./foundations";
import { tabs, input } from "./components";

const overrides = {
  components: {
    Tabs: tabs,
    Input: input,
  },
  fonts: fonts,
  config: config,
};

export default extendTheme(overrides);
