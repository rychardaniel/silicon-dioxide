import { Title } from "./title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export const Body = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <Title>SiO₂</Title>
            <div className="bg-zinc-900 p-4 rounded-md w-full max-w-[700px]">
                <Tabs defaultValue="properties" className="">
                    <TabsList>
                        <TabsTrigger value="properties">
                            Propriedades
                        </TabsTrigger>
                        <TabsTrigger value="image">Imagem</TabsTrigger>
                    </TabsList>
                    <TabsContent value="properties">
                        <h2 className="font-bold mb-2">
                            Propriedades Físico-Químicas
                        </h2>
                        <p>
                            The standard chunk of Lorem Ipsum used since the
                            1500s is reproduced below for those interested.
                            Sections 1.10.32 and 1.10.33 from "de Finibus
                            Bonorum et Malorum" by Cicero are also reproduced in
                            their exact original form, accompanied by English
                            versions from the 1914 translation by H. Rackham.
                        </p>
                    </TabsContent>
                    <TabsContent value="image">
                        <img
                            src="https://thumbs.dreamstime.com/b/di%C3%B3xido-de-silicone-da-mol%C3%A9cula-sio-86641435.jpg"
                            alt=""
                            width={"400"}
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};
