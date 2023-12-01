import { MainLayout } from "@/components/layout";
import { ChatSection } from "@/components/section";
import { chatWithResponseProps } from "@/types/components";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import axios, { AxiosError } from "axios";
import { MutableRefObject, useRef, useState } from "react";

export default function Home() {
  const [textToTextPrompt, setTextToTextPrompt] = useState<string>("");
  const [textToImagePrompt, setTextToImagePrompt] = useState<string>("");

  const [textMessages, setTextMessages] = useState<chatWithResponseProps[]>([]);
  const [imageMessages, setImageMessages] = useState<chatWithResponseProps[]>(
    []
  );

  function handlePost(type: "text" | "image") {
    if (type === "text") {
      setTextToTextPrompt("");
      const newData = {
        id: `Text${textMessages.length}`,
        prompt: textToTextPrompt,
        result: "",
        isLoading: true,
      };
      const newList = [...textMessages, newData];
      setTextMessages(newList);

      new Promise(function (resolve: (value: string) => void) {
        setTimeout(() => resolve("Kamu keren banget!!"), 3000);
      }).then((res: string) => {
        newList[newList.length - 1] = {
          ...newList[newList.length - 1],
          result: res,
          isLoading: false,
        };
        newList[newList.length - 1].isLoading = false;
        setTextMessages([...newList]);
      });
    } else {
      setTextToImagePrompt("");
      const newData = {
        id: `Image${imageMessages.length}`,
        prompt: textToImagePrompt,
        result: "",
        isLoading: true,
      };
      const newList = [...imageMessages, newData];
      setImageMessages(newList);

      new Promise(function (resolve: (value: string) => void) {
        setTimeout(() => resolve("Kamu keren banget!!"), 3000);
      }).then((res: string) => {
        newList[newList.length - 1] = {
          ...newList[newList.length - 1],
          result: res,
          isLoading: false,
        };
        newList[newList.length - 1].isLoading = false;
        setTextMessages([...newList]);
      });
    }

    // axios
    //   .post("http://35.208.32.246:8000/inference", {
    //     type: type,
    //     text: type === "text" ? textToTextPrompt : textToImagePrompt,
    //   })
    //   .then((res) => console.log("Success"))
    //   .catch((e: AxiosError) => console.log(e));
  }

  const dummy: chatWithResponseProps[] = [
    {
      id: "Text1",
      prompt:
        "Hannah: Hey, do you have Betty's number?\nAmanda: Lemme check\nHannah: <file_gif>\nAmanda: Sorry, can't find it.\nAmanda: Ask Larry\nAmanda: He called her last time we were at the park together\nHannah: I don't know him well\nHannah: <file_gif>\nAmanda: Don't be shy, he's very nice\nHannah: If you say so..\nHannah: I'd rather you texted him\nAmanda: Just text him 🙂\nHannah: Urgh.. Alright\nHannah: Bye\nAmanda: Bye bye",
      result:
        "Hannah needs Betty's number but Amanda doesn't have it. She needs to contact Larry.",
      isLoading: false,
    },
    {
      id: "Text2",
      prompt:
        "Hannah: Hey, do you have Betty's number?\nAmanda: Lemme check\nHannah: <file_gif>\nAmanda: Sorry, can't find it.\nAmanda: Ask Larry\nAmanda: He called her last time we were at the park together\nHannah: I don't know him well\nHannah: <file_gif>\nAmanda: Don't be shy, he's very nice\nHannah: If you say so..\nHannah: I'd rather you texted him\nAmanda: Just text him 🙂\nHannah: Urgh.. Alright\nHannah: Bye\nAmanda: Bye bye",
      result:
        "Hannah needs Betty's number but Amanda doesn't have it. She needs to contact Larry.",
      isLoading: false,
    },
    {
      id: "Text3",
      prompt:
        "Hannah: Hey, do you have Betty's number?\nAmanda: Lemme check\nHannah: <file_gif>\nAmanda: Sorry, can't find it.\nAmanda: Ask Larry\nAmanda: He called her last time we were at the park together\nHannah: I don't know him well\nHannah: <file_gif>\nAmanda: Don't be shy, he's very nice\nHannah: If you say so..\nHannah: I'd rather you texted him\nAmanda: Just text him 🙂\nHannah: Urgh.. Alright\nHannah: Bye\nAmanda: Bye bye",
      result:
        "Hannah needs Betty's number but Amanda doesn't have it. She needs to contact Larry.",
      isLoading: false,
    },
    {
      id: "Text4",
      prompt: `Hannah: Hey, do you have Betty's number?
      Amanda: Lemme check
      Hannah: <file_gif>`,
      result:
        "Hannah needs Betty's number but Amanda doesn't have it. She needs to contact Larry.",
      isLoading: false,
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
              data={textMessages}
              placeholder="Dialog untuk dirangkum"
              value={textToTextPrompt}
              setValue={setTextToTextPrompt}
              onClick={() => handlePost("text")}
            />
          </TabPanel>
          <TabPanel>
            <ChatSection
              data={imageMessages}
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
