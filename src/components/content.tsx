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
                <TabsTrigger value="images">Imagens</TabsTrigger>
                <TabsTrigger value="3d-model">Modelo 3D</TabsTrigger>
            </TabsList>
            <TabsContent value="properties">
                <Properties />
            </TabsContent>
            <TabsContent value="applications">
                <Applications />
            </TabsContent>
            <TabsContent value="images">
                <div className="h-[60vh] w-full overflow-hidden">
                    <div className="h-full overflow-y-auto w-full">
                        <div className="flex flex-col items-center space-y-4 p-4">
                            <img
                                src="public/cristal.jpeg"
                                alt="Cristal"
                                className="w-full h-auto object-contain"
                            />
                            <img
                                src="public/areia.jpeg"
                                alt="Areia"
                                className="w-full h-auto object-contain"
                            />
                            <img
                                src="public/gel.jpeg"
                                alt="Gel"
                                className="w-full h-auto object-contain"
                            />
                            <img
                                src="public/raiox.jpeg"
                                alt="Raio X"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="3d-model">
                <MoleculeModel />
            </TabsContent>
        </Tabs>
    );
};
