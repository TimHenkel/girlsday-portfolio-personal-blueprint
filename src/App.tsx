import "./App.css";
import { AiFillGithub, AiFillTwitterCircle, TiSocialLinkedinCircular }  from "react-icons/all"
import { Container, Group, Image, MantineProvider, Stack, Text, Title } from "@mantine/core";

function App() {

  
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container bg={"dark"} fluid={true} h={"100%"}>
        <Group position="center">
          <Stack h={300}>
            <Title mt="xl" order={1} c="dimmed">
              Matthias Hempel
            </Title>
            <Text mt="sm" c="#fff">
              Senior Software Developer<br/> (aka. Swiss Army knife Developer) <br/> cyclist, father, husband, open-minded & considerate 
            </Text>
            <Group>
              <AiFillGithub color="#fff"/>
              <AiFillTwitterCircle color="#fff"/>
              <TiSocialLinkedinCircular color="#fff"/>
            </Group>
          </Stack>
          <Image src="/profile-image.jpeg" maw={240} radius="120px" />
        </Group>
      </Container>
    </MantineProvider>
  );
}

export default App;
