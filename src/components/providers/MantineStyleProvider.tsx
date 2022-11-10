import { MantineProvider as Provider } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MantineProvider = ({ children }: Props) => {
  return (
    <Provider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        primaryShade: { light: 5 },
        colorScheme: "light",
        colors: {
          background: ["#F6F6F6"],
          primary: [
            "#830f3e",
            "#760e38",
            "#690c32",
            "#5c0b2b",
            "#4f0925",
            "#42081f",
            "#340619",
            "#270413",
            "#1a030c",
            "#0d0106",
          ],
          success: [""],
        },
        components: {
          Button: {
            defaultProps: {
              radius: "md",
              size: "md",
            },
          },
        },
      }}
    >
      {children}
    </Provider>
  );
};

export default MantineProvider;
