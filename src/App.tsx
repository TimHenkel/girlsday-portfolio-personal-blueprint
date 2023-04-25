import "./App.css";
import { AiFillGithub, AiFillTwitterCircle, TiSocialLinkedinCircular }  from "react-icons/all"
import { ActionIcon, Avatar, Box, Container, Group, Image, MantineProvider, Space, Stack, Text, Title } from "@mantine/core";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container bg={"dark"} fluid={true} h={"100%"}>
      <Space h={50} />
        <Image src="/girlsday-portfolio-personal-blueprint/girlsday-pic.jpeg" height={250} fit="fill" mb={50}/>
        <Container>

        </Container>
        <Container fluid={true} h={500} bg={"red"} mb={50}>
          <Stack h={300} align="center" spacing="sm">
            <Space h={50} />
            <Group position="center" spacing={80}>
              <Avatar component="a" href="https://www.nevermoreacademy.com/" target="_blank" src="/girlsday-portfolio-personal-blueprint/nevermore-logo.jpeg" size={200} radius={100}/>
              <Avatar component="a" href="https://www.bitgrip.com/de/home" target="_blank" src="/girlsday-portfolio-personal-blueprint/bitgrip-logo.jpeg" size={200} radius={100}/>
            </Group>
            <Title mt="xl" order={1} weight={500} color="dark.6" align="center">
              NEVERMORE ACADEMY <br/> & <br/> BITGRIP
            </Title>
          </Stack>
        </Container>
        <Group position="center">
          <Stack h={300}>
            <Text mt="sm" c="#fff">
              Senior Software Developer<br/> (aka. Swiss Army knife Developer) <br/> cyclist, father, husband, open-minded & considerate 
            </Text>
            <Group>
              <ActionIcon variant="transparent" component="a" href="https://github.com/fotopixel" target="_blank">
                <AiFillGithub href="https://github.com/fotopixel" color="#fff"/>
              </ActionIcon> 
              <ActionIcon variant="transparent" component="a" href="https://twitter.com/Fotopixel2010" target="_blank">
                <AiFillTwitterCircle color="#fff"/>
              </ActionIcon>
              <ActionIcon variant="transparent" component="a" href="https://www.linkedin.com/in/matthias-hempel-62327678/" target="_blank">
                <TiSocialLinkedinCircular color="#fff"/>
              </ActionIcon>
            </Group>
          </Stack>
        </Group>
      </Container>
    </MantineProvider>
  );
}

export default App;
