import { mainLayoutProps } from "@/types/global";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";
import LoadingLayout from "./LoadingLayout";

function MainLayout(props: mainLayoutProps): ReactNode {
  return (
    <Box bg="blue.100" p="4" minH="100vh" {...props}>
      <Head>
        <title>{props.title ?? "KukusanFinder"}</title>
      </Head>
      {props.isLoading ? <LoadingLayout /> : <Box>{props.children}</Box>}
    </Box>
  );
}

export default MainLayout;
