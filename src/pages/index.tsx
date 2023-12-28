import { MainLayout } from "@/components/layout";
import { ChatSection } from "@/components/section";
import {
  chatWithResponseProps,
  promptResponse,
  promptType,
} from "@/types/components";
import { removeStartEnd } from "@/utils/stringFormatter";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

export default function Home() {
  const [isKokomiAvailable, setIsKokomiAvailable] = useState<boolean>(false);
  const [textToTextPrompt, setTextToTextPrompt] = useState<string>("");
  const [textToImagePrompt, setTextToImagePrompt] = useState<string>("");

  const [textMessages, setTextMessages] = useState<chatWithResponseProps[]>([]);
  const [imageMessages, setImageMessages] = useState<chatWithResponseProps[]>(
    []
  );

  function handlePost(type: promptType) {
    let newList: chatWithResponseProps[] = [];

    if (type === "text") {
      setTextToTextPrompt("");
      const newData: chatWithResponseProps = {
        id: `Text${textMessages.length}`,
        type: "text",
        prompt: textToTextPrompt,
        result: "",
        isLoading: true,
      };
      newList = [...textMessages, newData];
      setTextMessages(newList);
    } else {
      const kokomiNames = [
        "kokomi",
        "sangonomiya",
        "watatsumi",
        "her excellency",
      ];
      const promptLowerCase = textToImagePrompt.toLowerCase();
      setIsKokomiAvailable(
        kokomiNames.reduce((a, c) => promptLowerCase.includes(c) || a, false)
      );
      setTextToImagePrompt("");
      const newData: chatWithResponseProps = {
        id: `Image${imageMessages.length}`,
        type: "image",
        prompt: textToImagePrompt,
        result: "",
        isLoading: true,
      };
      newList = [...imageMessages, newData];
      setImageMessages(newList);
    }

    const data = {
      type: type,
      text: type === "text" ? textToTextPrompt : textToImagePrompt,
    };

    axios
      .post("/api/inference", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res: AxiosResponse<promptResponse, promptResponse>) => {
        newList[newList.length - 1] = {
          ...newList[newList.length - 1],
          result: removeStartEnd(res.data.response),
          isLoading: false,
        };
        newList[newList.length - 1].isLoading = false;
        if (type === "text") setTextMessages([...newList]);
        else setImageMessages([...newList]);
      })
      .catch((e: AxiosError) => console.log(e));
  }

  return (
    <MainLayout
      title="TAMLOps - Tugas Akhir"
      isLoading={false}
      bg={
        isKokomiAvailable
          ? "url(/maskot.png)"
          : "linear-gradient(96deg, #121B30 7.62%, #192B34 89.09%)"
      }
      bgAttachment={isKokomiAvailable ? "fixed" : "unset"}
      bgSize={isKokomiAvailable ? "cover" : "unset"}
      px={{ base: "4", md: "16" }}
      pt={{ base: "12", md: "8" }}
    >
      <Tabs isFitted variant="tamlops" size="md" colorScheme="blue">
        <TabList>
          <Tab>Rangkum dialog</Tab>
          <Tab>Buat gambar</Tab>
        </TabList>
        <TabPanels fontSize={{ base: "sm", md: "md" }}>
          <TabPanel>
            <ChatSection
              type="text"
              data={textMessages}
              placeholder="Dialog untuk dirangkum"
              value={textToTextPrompt}
              setValue={setTextToTextPrompt}
              onClick={() => handlePost("text")}
            />
          </TabPanel>
          <TabPanel>
            <ChatSection
              type="image"
              data={imageMessages}
              placeholder="Cats chilling around"
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
