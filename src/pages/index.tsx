import MainLayout from "@/components/layout/MainLayout";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <MainLayout title="TAMLOps - Tugas Akhir" isLoading={false} px="16" py="16">
      <Tabs isFitted variant="tamlops" size="md" colorScheme="blue">
        <TabList>
          <Tab>Hasil rangkuman</Tab>
          <Tab>Hasil gambar</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Medium size with blue color scheme</p>
            <Input
              variant="tamlops"
              placeholder="Dialog untuk dirangkum"
              position="relative"
              bottom="0"
            />
          </TabPanel>
          <TabPanel>
            <p>Tab panel two</p>
            <Input
              variant="tamlops"
              placeholder="Dialog untuk dirangkum"
              position="relative"
              bottom="0"
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  );
}
