export const Properties = () => {
    return (
        <>
            <h2 className="font-bold mb-2">Propriedades Físico-Químicas</h2>
            <div className="flex flex-col md:flex-row w-full border rounded-lg overflow-hidden shadow-md divide-y md:divide-y-0 md:divide-x divide-gray-300">
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-lg font-semibold mb-2">
                        Propriedades Físicas
                    </h2>
                    <ul className="list-disc list-inside text-sm space-y-1">
                        <li>
                            <strong>Estado físico:</strong> Sólido
                        </li>
                        <li>
                            <strong>Cor:</strong> Incolor ou branco (puro)
                        </li>
                        <li>
                            <strong>Densidade:</strong> 2,65 g/cm³ (cristalina),
                            2,2 g/cm³ (amorfa)
                        </li>
                        <li>
                            <strong>Ponto de fusão:</strong> ~1.710 °C
                        </li>
                        <li>
                            <strong>Ponto de ebulição:</strong> ~2.230 °C
                        </li>
                        <li>
                            <strong>Solubilidade em água:</strong> Insolúvel
                        </li>
                        <li>
                            <strong>Dureza:</strong> 7 (escala de Mohs)
                        </li>
                        <li>
                            <strong>Estrutura:</strong> Tetraédrica (Si ligado a
                            4 O)
                        </li>
                        <li>
                            <strong>Índice de refração:</strong> ~1,544 – 1,553
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-lg font-semibold mb-2">
                        Propriedades Químicas
                    </h2>
                    <ul className="list-disc list-inside text-sm space-y-1">
                        <li>
                            <strong>Fórmula molecular:</strong> SiO₂
                        </li>
                        <li>
                            <strong>Estabilidade:</strong> Muito estável
                            quimicamente
                        </li>
                        <li>
                            <strong>Reatividade:</strong> Resistente à maioria
                            dos ácidos (exceto HF)
                        </li>
                        <li>
                            <strong>Reage com bases:</strong> Forma silicatos
                        </li>
                        <li>
                            <strong>Inflamabilidade:</strong> Não inflamável
                        </li>
                        <li>
                            <strong>Natureza:</strong> Óxido ácido
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
