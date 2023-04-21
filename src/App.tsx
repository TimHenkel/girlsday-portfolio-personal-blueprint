import "./App.css";
import { AiFillGithub, AiFillTwitterCircle, TiSocialLinkedinCircular }  from "react-icons/all"
import { ActionIcon, Container, Group, Image, MantineProvider, Stack, Text, Title } from "@mantine/core";

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
          <Image src="/girlsday-portfolio-blueprint/profile-image.jpeg" maw={240} radius="120px" />
        </Group>
      </Container>
    </MantineProvider>
  );
}

export default App;
