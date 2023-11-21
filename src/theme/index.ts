import { extendTheme } from "@chakra-ui/react";
import { fonts, config } from "./foundations";
import { tabs, textarea, button } from "./components";

const overrides = {
  components: {
    Tabs: tabs,
    Textarea: textarea,
    Button: button,
  },
  fonts: fonts,
  config: config,
};

export default extendTheme(overrides);
