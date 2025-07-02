import { Applications } from "./data/applications";
import { Properties } from "./data/properties";
import MoleculeModel from "./MoleculeModel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export const Content = () => {
    return (
        <Tabs defaultValue="properties" className="">
            <TabsList>
                <TabsTrigger value="properties">Propriedades</TabsTrigger>
                <TabsTrigger value="applications">Aplicações</TabsTrigger>
                <TabsTrigger value="image">Imagem</TabsTrigger>
                <TabsTrigger value="3d-model">Modelo 3D</TabsTrigger>
            </TabsList>
            <TabsContent value="properties">
                <Properties />
            </TabsContent>
            <TabsContent value="applications">
                <Applications />
            </TabsContent>
            <TabsContent value="image">
                <div className="flex justify-center items-center h-full">
                    <img
                        src="https://thumbs.dreamstime.com/b/di%C3%B3xido-de-silicone-da-mol%C3%A9cula-sio-86641435.jpg"
                        alt=""
                        width={"400"}
                    />
                </div>
            </TabsContent>
            <TabsContent value="3d-model">
                <MoleculeModel />
            </TabsContent>
        </Tabs>
    );
};
