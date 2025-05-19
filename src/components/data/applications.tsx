import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export const Applications = () => {
    const [application, setApplication] = useState(
        "ind-materials-construction"
    );

    function renderContent(application: string) {
        switch (application) {
            case "ind-materials-construction":
                return (
                    <>
                        <h2 className="text-xl font-bold">
                            Indústria de Materiais e Construção
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                <strong>Vidro:</strong> Componente principal na
                                fabricação de vidros comuns, especiais e fibras
                                ópticas.
                            </li>
                            <li>
                                <strong>Cimento e Concreto:</strong> Aditivo
                                (microsílica) para aumentar resistência e
                                durabilidade.
                            </li>
                            <li>
                                <strong>Cerâmicas e Porcelanas:</strong>{" "}
                                Matéria-prima essencial.
                            </li>
                            <li>
                                <strong>Refratários:</strong> Utilizado em
                                materiais resistentes a altas temperaturas.
                            </li>
                        </ul>
                    </>
                );
            case "ind-electronics-tech":
                return (
                    <>
                        <h2 className="text-xl font-bold">
                            Indústria Eletrônica e Tecnologia
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                <strong>Microeletrônica:</strong> Substrato
                                isolante e dielétrico em chips.
                            </li>
                            <li>
                                <strong>Fibras ópticas:</strong> Essencial para
                                telecomunicações.
                            </li>
                            <li>
                                <strong>Painéis solares:</strong> Usado na
                                produção de células fotovoltaicas.
                            </li>
                        </ul>
                    </>
                );
            case "ind-chemical":
                return (
                    <>
                        <h2 className="text-xl font-bold">Indústria Química</h2>
                        <ul className="list-disc list-inside">
                            <li>
                                <strong>Catalisadores:</strong> Suporte para
                                reações químicas.
                            </li>
                            <li>
                                <strong>Sílica gel:</strong> Dessecante e usada
                                em cromatografia.
                            </li>
                            <li>
                                <strong>Sílica pirogênica:</strong> Agente
                                espessante e de controle reológico.
                            </li>
                        </ul>
                    </>
                );
            case "ind-pharma":
                return (
                    <>
                        <h2 className="text-xl font-bold">
                            Indústria Farmacêutica
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                <strong>Excipiente:</strong> Agente
                                antiaglomerante ou dessecante.
                            </li>
                            <li>
                                <strong>Suplementos:</strong> Aditivo alimentar
                                (ex: E551).
                            </li>
                            <li>
                                <strong>Formulações tópicas:</strong> Presente
                                em cremes e géis.
                            </li>
                        </ul>
                    </>
                );
            case "ind-cosmetics-hygiene":
                return (
                    <>
                        <h2 className="text-xl font-bold">
                            Indústria Cosmética e de Higiene
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                <strong>Cuidados pessoais:</strong> Presente em
                                pastas de dente, esfoliantes, pós.
                            </li>
                            <li>
                                <strong>Matificante:</strong> Usado em
                                maquiagens para dispersão de luz.
                            </li>
                        </ul>
                    </>
                );
            case "ind-food":
                return (
                    <>
                        <h2 className="text-xl font-bold">
                            Indústria Alimentícia
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                <strong>Aditivo (E551):</strong> Antiumectante
                                em sal, leite em pó, temperos.
                            </li>
                            <li>
                                <strong>Clarificação:</strong> Usado na
                                filtração de cervejas e vinhos.
                            </li>
                        </ul>
                    </>
                );
            case "ind-rubber-plastics":
                return (
                    <>
                        <h2 className="text-xl font-bold">
                            Indústria de Borracha e Plásticos
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                <strong>Carga reforçante:</strong> Em pneus,
                                mangueiras e vedações.
                            </li>
                            <li>
                                <strong>Plásticos e resinas:</strong> Melhora
                                resistência mecânica e térmica.
                            </li>
                        </ul>
                    </>
                );
            case "other-applications":
                return (
                    <>
                        <h2 className="text-xl font-bold ">
                            Outras Aplicações Relevantes
                        </h2>
                        <ul className="list-disc list-inside ">
                            <li>
                                <strong>Filtragem de água:</strong> Meio
                                filtrante em purificação.
                            </li>
                            <li>
                                <strong>Indústria petrolífera:</strong> Em
                                fluidos de perfuração.
                            </li>
                            <li>
                                <strong>Papel e tintas:</strong> Melhora
                                qualidade e absorção.
                            </li>
                            <li>
                                <strong>Nanotecnologia:</strong> Aplicações em
                                materiais avançados.
                            </li>
                        </ul>
                    </>
                );
            default:
                break;
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
                <div className="h-9 px-3 flex items-center rounded-md border bg-zinc-800 text-sm">
                    Setor:
                </div>
                <Select
                    onValueChange={(value) => setApplication(value)}
                    value={application}
                >
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="ind-materials-construction">
                            Indústria de Materiais e Construção
                        </SelectItem>
                        <SelectItem value="ind-electronics-tech">
                            Indústria Eletrônica e Tecnologia
                        </SelectItem>
                        <SelectItem value="ind-chemical">
                            Indústria Química
                        </SelectItem>
                        <SelectItem value="ind-pharma">
                            Indústria Farmacêutica
                        </SelectItem>
                        <SelectItem value="ind-cosmetics-hygiene">
                            Indústria Cosmética e de Higiene
                        </SelectItem>
                        <SelectItem value="ind-food">
                            Indústria Alimentícia
                        </SelectItem>
                        <SelectItem value="ind-rubber-plastics">
                            Indústria de Borracha e Plásticos
                        </SelectItem>
                        <SelectItem value="other-applications">
                            Outras aplicações relevantes
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <section className="bg-zinc-950 p-4 rounded-md">
                {renderContent(application)}
            </section>
        </div>
    );
};
