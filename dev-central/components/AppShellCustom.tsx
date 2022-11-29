import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
  Button,
  Container,
  MantineProvider
} from '@mantine/core';
import LightDarkButton from './LightDarkButton';
import styled from '@emotion/styled';
import Title from './Title';
import SearchBox from './SearchBox';
import NewLightDark from "./NewLightDark"
import CustomButton from './CustomButton';
import Navbar1 from "./Navbar1"
import { width } from '@mui/system';
import Navbar3 from "./Navbar3";



export default function AppShellDemo({children}: any) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>

          </Aside>
        </MediaQuery>
      }
      navbar={
        <Navbar3 opened={opened}/>
      }
      header={
        <Header height={70} p="md" style={{backgroundColor: "#4051b5", display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
          <div style={{ display: 'flex', alignItems: "center"}}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="lg"
                color={theme.colors.gray[6]}
                mr="sm"
              />
            </MediaQuery>
            {/* <div style={{marginTop: "10px"}}>
          <Title name="DevCentral"></Title>
          </div> */}
          
          
          </div>
          <div>
          <SearchBox />
          </div>
         
          
          
            <div style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
              
              {/* this section will have the notifications icons */}
              
            <NewLightDark />
            </div>
            
          
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}