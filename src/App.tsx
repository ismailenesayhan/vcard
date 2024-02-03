import "@mantine/core/styles.css";
import "./global.css";
import classes from "./style.module.css";
import {
  Box,
  Container,
  MantineProvider,
  Avatar,
  ActionIcon,
  Center,
  Title,
  Text,
  Group,
  Button,
  Stack,
} from "@mantine/core";
import {
  Envelope,
  Github,
  Globe,
  Linkedin,
  Medium,
  PersonPlus,
  Telephone,
  Whatsapp,
} from "react-bootstrap-icons";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Box className={classes.topBox} />
      <Container size="xs" className={classes.container}>
        <Center>
          <Avatar
            src="https://www.ismailenesayhan.com/_next/image?url=%2Fassets%2Fimages%2Fiea-about.jpg&w=2048&q=75"
            size={200}
            alt="Profile Photo"
            className={classes.avatar}
          />
        </Center>
        <Title ta="center" mt="sm">
          İsmail Enes Ayhan
        </Title>
        <Text ta="center" mt="sm" px={50} c="dimmed">
          Freelance User Interface Designer and WordPress Developer
        </Text>

        <Group gap="xs" justify="center" wrap="nowrap" mt="md">
          <ActionIcon
            size="xl"
            variant="default"
            radius="xl"
            component="a"
            href="https://www.linkedin.com/in/ismailenesayhan"
            target="_blank"
          >
            <Linkedin />
          </ActionIcon>
          <ActionIcon
            size="xl"
            variant="default"
            radius="xl"
            component="a"
            href="https://github.com/ismailenesayhan"
            target="_blank"
          >
            <Github />
          </ActionIcon>
          <ActionIcon
            size="xl"
            variant="default"
            radius="xl"
            component="a"
            href="https://ismailenesayhan.medium.com/"
            target="_blank"
          >
            <Medium />
          </ActionIcon>
        </Group>

        <Stack gap="xs" justify="center" mt="xl">
          <Button
            component="a"
            href="https://www.linkedin.com/in/ismailenesayhan"
            target="_blank"
            leftSection={<PersonPlus />}
            rightSection={<span />}
            variant="default"
            fullWidth
            justify="space-between"
            radius="xl"
            className={classes.button}
          >
            Save the contact
          </Button>

          <Button
            component="a"
            href="https://www.linkedin.com/in/ismailenesayhan"
            target="_blank"
            leftSection={<Whatsapp />}
            rightSection={<span />}
            variant="default"
            fullWidth
            justify="space-between"
            radius="xl"
            className={classes.button}
          >
            Chat on WhatsApp
          </Button>

          <Button
            component="a"
            href="https://www.linkedin.com/in/ismailenesayhan"
            target="_blank"
            leftSection={<Telephone />}
            rightSection={<span />}
            variant="default"
            fullWidth
            justify="space-between"
            radius="xl"
            className={classes.button}
          >
            +90 531 387 1501
          </Button>

          <Button
            component="a"
            href="https://www.linkedin.com/in/ismailenesayhan"
            target="_blank"
            leftSection={<Envelope />}
            rightSection={<span />}
            variant="default"
            fullWidth
            justify="space-between"
            radius="xl"
            className={classes.button}
          >
            ismailenesayhan@gmail.com
          </Button>

          <Button
            component="a"
            href="https://www.linkedin.com/in/ismailenesayhan"
            target="_blank"
            leftSection={<Globe />}
            rightSection={<span />}
            variant="default"
            fullWidth
            justify="space-between"
            radius="xl"
            className={classes.button}
          >
            ismailenesayhan.com
          </Button>
        </Stack>
      </Container>
    </MantineProvider>
  );
}
