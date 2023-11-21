import { mainLayoutProps } from "@/types/components";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";
import LoadingLayout from "./LoadingLayout";

function MainLayout(props: mainLayoutProps): ReactNode {
  return (
    <Box
      bg="linear-gradient(96deg, #121B30 7.62%, #192B34 89.09%)"
      p="4"
      minH="100vh"
      {...props}
    >
      <Head>
        <title>{props.title ?? "KukusanFinder"}</title>
      </Head>
      {props.isLoading ? <LoadingLayout /> : <Box>{props.children}</Box>}
    </Box>
  );
}

export default MainLayout;
