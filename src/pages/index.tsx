import { MainLayout } from "@/components/layout";
import { ChatSection } from "@/components/section";
import { chatWithResponseProps } from "@/types/components";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import axios, { AxiosError } from "axios";
import { useState } from "react";

export default function Home() {
  const [textToTextPrompt, setTextToTextPrompt] = useState<string>("");
  const [textToImagePrompt, setTextToImagePrompt] = useState<string>("");

  function handlePost(type: "text" | "image") {
    axios
      .post("http://35.208.32.246:8000/inference", {
        type: type,
        text: type === "text" ? textToTextPrompt : textToImagePrompt,
      })
      .then((res) => console.log("Success"))
      .catch((e: AxiosError) => console.log(e));
  }

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
      prompt: `Hannah: Hey, do you have Betty's number?
      Amanda: Lemme check
      Hannah: <file_gif>`,
      result:
        "Hannah needs Betty's number but Amanda doesn't have it. She needs to contact Larry.",
    },
  ];

  return (
    <MainLayout
      title="TAMLOps - Tugas Akhir"
      isLoading={false}
      px={{ base: "4", md: "16" }}
      pt={{ base: "12", md: "16" }}
    >
      <Tabs isFitted variant="tamlops" size="md" colorScheme="blue">
        <TabList>
          <Tab>Rangkum dialog</Tab>
          <Tab>Buat gambar</Tab>
        </TabList>
        <TabPanels fontSize={{ base: "sm", md: "md" }}>
          <TabPanel>
            <ChatSection
              data={dummy}
              placeholder="Dialog untuk dirangkum"
              value={textToTextPrompt}
              setValue={setTextToTextPrompt}
              onClick={() => handlePost("text")}
            />
          </TabPanel>
          <TabPanel>
            <ChatSection
              data={[]}
              placeholder="Coba “create me an image of a cat”"
              value={textToImagePrompt}
              setValue={setTextToImagePrompt}
              onClick={() => handlePost("image")}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  );
}
