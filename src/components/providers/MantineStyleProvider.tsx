import { MantineProvider as Provider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
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
          background: ["#FFF"],
          primary: [
            "#830f3e",
            "#8f2751",
            "#9c3f65",
            "#a85778",
            "#b56f8b",
            "#c1879f",
            "#cd9fb2",
            "#dab7c5",
            "#e6cfd8",
            "#f3e7ec",
          ],
          secondary: [
            "#ffd700",
            "#da8b05",
            "#de971e",
            "#e1a237",
            "#e5ae50",
            "#e9b969",
            "#edc582",
            "#f0d19b",
            "#f4dcb4",
            "#f8e8cd",
          ],
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
      <NotificationsProvider
        style={{ margin: "0 10px 10px 0 " }}
        autoClose={3000}
      >
        {children}
      </NotificationsProvider>
    </Provider>
  );
};

export default MantineProvider;
