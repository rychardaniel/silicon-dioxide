import { Applications } from "./data/applications";
import { Properties } from "./data/properties";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export const Content = () => {
    return (
        <Tabs defaultValue="properties" className="">
            <TabsList>
                <TabsTrigger value="properties">Propriedades</TabsTrigger>
                <TabsTrigger value="applications">Aplicações</TabsTrigger>
                <TabsTrigger value="image">Imagem</TabsTrigger>
            </TabsList>
            <TabsContent value="properties">
                <Properties />
            </TabsContent>
            <TabsContent value="applications">
                <Applications />
            </TabsContent>
            <TabsContent value="image">
                <img
                    src="https://thumbs.dreamstime.com/b/di%C3%B3xido-de-silicone-da-mol%C3%A9cula-sio-86641435.jpg"
                    alt=""
                    width={"400"}
                />
            </TabsContent>
        </Tabs>
    );
};
