import { ChatWithResponse } from "@/components/chat";
import MainLayout from "@/components/layout/MainLayout";
import { ChatSection } from "@/components/section";
import { chatWithResponseProps } from "@/types/components";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const textToImageRef = useRef<HTMLElement>();
  const textToImageResultsRef = useRef<HTMLElement>();

  const [textToTextPrompt, setTextToTextPrompt] = useState<string>("");
  const [textToImagePrompt, setTextToImagePrompt] = useState<string>("");

  const dummy: chatWithResponseProps[] = [
    {
      id: "Text1",
      number: 1,
      prompt:
        "Hannah: Hey, do you have Betty's number?\nAmanda: Lemme check\nHannah: <file_gif>\nAmanda: Sorry, can't find it.\nAmanda: Ask Larry\nAmanda: He called her last time we were at the park together\nHannah: I don't know him well\nHannah: <file_gif>\nAmanda: Don't be shy, he's very nice\nHannah: If you say so..\nHannah: I'd rather you texted him\nAmanda: Just text him 🙂\nHannah: Urgh.. Alright\nHannah: Bye\nAmanda: Bye bye",
      result:
        "Hannah needs Betty's number but Amanda doesn't have it. She needs to contact Larry.",
    },
    {
      id: "Text2",
      number: 1,
      prompt:
        "Hannah: Hey, do you have Betty's number?\nAmanda: Lemme check\nHannah: <file_gif>\nAmanda: Sorry, can't find it.\nAmanda: Ask Larry\nAmanda: He called her last time we were at the park together\nHannah: I don't know him well\nHannah: <file_gif>\nAmanda: Don't be shy, he's very nice\nHannah: If you say so..\nHannah: I'd rather you texted him\nAmanda: Just text him 🙂\nHannah: Urgh.. Alright\nHannah: Bye\nAmanda: Bye bye",
      result:
        "Hannah needs Betty's number but Amanda doesn't have it. She needs to contact Larry.",
    },
    {
      id: "Text3",
      number: 1,
      prompt:
        "Hannah: Hey, do you have Betty's number?\nAmanda: Lemme check\nHannah: <file_gif>\nAmanda: Sorry, can't find it.\nAmanda: Ask Larry\nAmanda: He called her last time we were at the park together\nHannah: I don't know him well\nHannah: <file_gif>\nAmanda: Don't be shy, he's very nice\nHannah: If you say so..\nHannah: I'd rather you texted him\nAmanda: Just text him 🙂\nHannah: Urgh.. Alright\nHannah: Bye\nAmanda: Bye bye",
      result:
        "Hannah needs Betty's number but Amanda doesn't have it. She needs to contact Larry.",
    },
    {
      id: "Text4",
      number: 1,
      prompt:
        "Hannah: Hey, do you have Betty's number?\nAmanda: Lemme check\nHannah: <file_gif>\nAmanda: Sorry, can't find it.\nAmanda: Ask Larry\nAmanda: He called her last time we were at the park together\nHannah: I don't know him well\nHannah: <file_gif>\nAmanda: Don't be shy, he's very nice\nHannah: If you say so..\nHannah: I'd rather you texted him\nAmanda: Just text him 🙂\nHannah: Urgh.. Alright\nHannah: Bye\nAmanda: Bye bye",
      result:
        "Hannah needs Betty's number but Amanda doesn't have it. She needs to contact Larry.",
    },
  ];

  return (
    <MainLayout title="TAMLOps - Tugas Akhir" isLoading={false} px="16" pt="16">
      <Tabs isFitted variant="tamlops" size="md" colorScheme="blue">
        <TabList>
          <Tab>Hasil rangkuman</Tab>
          <Tab>Hasil gambar</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ChatSection
              data={dummy}
              value={textToTextPrompt}
              setValue={setTextToTextPrompt}
            />
          </TabPanel>
          <TabPanel>
            <ChatSection
              data={dummy}
              value={textToTextPrompt}
              setValue={setTextToTextPrompt}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  );
}
