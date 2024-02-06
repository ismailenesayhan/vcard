import "@mantine/core/styles.css";
import "./global.css";
import classes from "./style.module.css";
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  MantineProvider,
  Avatar,
  Center,
  Title,
  Text,
  Button,
  Stack,
} from "@mantine/core";
import {
  Envelope,
  Globe,
  Linkedin,
  PersonPlus,
  Telephone,
  Whatsapp,
} from "react-bootstrap-icons";
import { theme } from "./theme";

interface Data {
  name: string;
  surname: string;
  title: string;
  web: string;
  webTitle: string;
  email: string;
  tel: string;
  image: string;
  linkedin: string;
}

export default function App() {
  const [data, setData] = useState<Data>();
  const fetchJson = () => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };
  useEffect(() => {
    fetchJson();
  }, []);

  function downloadVCard() {
    const vcard =
      "BEGIN:VCARD\nVERSION:3.0\nPRODID:-//Apple Inc.//iPhone OS 16.1.2//EN\nFN;CHARSET=UTF-8:" + data?.name + " " + data?.surname + "\nN;CHARSET=UTF-8:"+ data?.surname +";" + data?.name + ";;;\nTEL;type=IPHONE;type=CELL;type=VOICE:"+ data?.tel.split(" ").join("") +"\nTITLE;CHARSET=UTF-8:" + data?.title +"\nURL;CHARSET=UTF-8:" + data?.web + "\nEMAIL;type=INTERNET;type=HOME;type=pref:" + data?.email + "\nREV:2023-05-16T18:21:02.665Z\nEND:VCARD";
    const blob = new Blob([vcard], {
      type: "text/vcard;charset=utf-8",
    });

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = data?.name + ".vcf";
    link.click();
  }

  return (
    <MantineProvider theme={theme}>
      <Box className={classes.topBox} />
      <Container size="xs" mb="xl">
        <Center>
          <Avatar
            src={data?.image}
            size={200}
            alt="Profile Photo"
            className={classes.avatar}
          />
        </Center>
        <Title ta="center" mt="sm">
          {data?.name + " " + data?.surname} 
        </Title>
        <Text ta="center" mt="sm" px={50} c="dimmed">
          {data?.title}
        </Text>

        {/* <Group gap="xs" justify="center" wrap="nowrap" mt="md">
          {data?.linkedin && (
            <ActionIcon
              size="xl"
              variant="default"
              radius="xl"
              component="a"
              href={data?.linkedin}
              target="_blank"
            >
              <Linkedin />
            </ActionIcon>
          )}
         
        </Group> */}

        <Stack gap="xs" justify="center" mt="xl">
          <Button
            onClick={() => downloadVCard()}
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
            href={"https://wa.me/" + data?.tel.split(" ").join("")}
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
            href={"tel:" + data?.tel.split(" ").join("")}
            leftSection={<Telephone />}
            rightSection={<span />}
            variant="default"
            fullWidth
            justify="space-between"
            radius="xl"
            className={classes.button}
          >
            {data?.tel}
          </Button>

          <Button
            component="a"
            href={"mailto:" + data?.email}
            leftSection={<Envelope />}
            rightSection={<span />}
            variant="default"
            fullWidth
            justify="space-between"
            radius="xl"
            className={classes.button}
          >
            {data?.email}
          </Button>

          <Button
            component="a"
            href={data?.linkedin}
            target="_blank"
            leftSection={<Linkedin />}
            rightSection={<span />}
            variant="default"
            fullWidth
            justify="space-between"
            radius="xl"
            className={classes.button}
          >
            Linkedin Profile
          </Button>

          <Button
            component="a"
            href={data?.web}
            target="_blank"
            leftSection={<Globe />}
            rightSection={<span />}
            variant="default"
            fullWidth
            justify="space-between"
            radius="xl"
            className={classes.button}
          >
            {data?.webTitle}
          </Button>
        </Stack>
      </Container>
    </MantineProvider>
  );
}
