import { extendTheme } from "@chakra-ui/react";
import borders from "./foundations/borders";
import breakpoints from "./foundations/breakpoints";
import colors from "./foundations/colors";
import radii from "./foundations/radii";
import shadows from "./foundations/shadows";
import sizes from "./foundations/sizes";
import space from "./foundations/space";
import textStyles from "./foundations/textStyles";
import layerStyles from "./foundations/layerStyles";
import typography from "./foundations/typography";
import zIndices from "./foundations/zIndices";
import fonts from "./foundations/fonts";

import Badge from "./components/Badge";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Divider from "./components/Divider";
import Editable from "./components/Editable";
import FormLabel from "./components/FormLabel";
import Heading from "./components/Heading";
import IconBadge from "./components/IconBadge";
import Link from "./components/Link";
import Menu from "./components/Menu";
import Radio from "./components/Radio";
import Tabs from "./components/Tabs";
import Tag from "./components/Tag";
import Text from "./components/Text";
import Textarea from "./components/Textarea";
import TextButton from "./components/TextButton";
import Toast from "./components/Toast";
import Progress from "./components/Progress";

const styles = {
  global: {
    html: {
      color: "text.primary",
      fontFamily: "Inter, sans-serif",
      fontSize: ["lg", null, "md"],
      lineHeight: ["short", null, "base"],
      letterSpacing: "base",
    },
    body: {
      lineHeight: "unset",
    },
    "*::placeholder": {
      color: "neutral.600",
    },
    "*, *::before, &::after": {
      borderColor: "neutral.600",
    },
    _disabled: {
      cursor: "auto !important",
    },
  },
};

const theme = {
  ...borders,
  colors,
  breakpoints,
  radii,
  ...typography,
  sizes,
  space,
  shadows,
  zIndices,
  // global styles
  styles,
  // text styles
  textStyles,
  // layer styles
  layerStyles,
  fonts,
  // components overwrites
  components: {
    Badge,
    Button,
    Checkbox,
    Divider,
    Editable,
    FormLabel,
    Heading,
    IconBadge,
    Link,
    Menu,
    Progress,
    Radio,
    Tabs,
    Tag,
    Text,
    Textarea,
    TextButton,
    Toast,
  },
};

const defaultTheme = extendTheme(theme);

export type DefaultTheme = typeof theme;

export default defaultTheme;
