import type { NextPage } from "next";
import {
  ColorSchemeProvider,
  ColorScheme,
  Paper,
  Box,
  Container,
} from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import AppShellCustom from "../components/AppShellCustom";
import ThemeWrapper from "../components/ThemeWrapper";
import Cardlist from "../components/Cardlist";

import styled from "@emotion/styled";


const Home: NextPage = () => {

  return (
      <Paper>
        <AppShellCustom>
          <Cardlist />
        </AppShellCustom>
      </Paper>
    
  );
};

export default Home;
