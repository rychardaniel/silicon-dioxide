import { PopoverHeader } from "./popover-header";

export const Header = () => {
    return (
        <header className="w-full flex justify-center p-4 font-bold bg-zinc-900">
            <div className="flex flex-col sm:flex-row gap-2 justify-between w-full max-w-[1400px] px-4 items-center">
                <h3>DIÓXIDO DE SILÍCIO</h3>
                <div className="flex gap-2">
                    <PopoverHeader title={"Integrantes"}>
                        <ul>
                            <li>Rychard</li>
                            <li>Guilherme</li>
                            <li>Kauã</li>
                            {/* <li>Arthur</li> */}
                        </ul>
                    </PopoverHeader>
                    <PopoverHeader title={"Referências"}>
                        <ul>
                            <li>
                                <a
                                    href="https://pt.wikipedia.org/wiki/Di%C3%B3xido_de_sil%C3%ADcio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Wikipédia
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://avanziquimica.com.br/blog/blog-p/cuidados-produtos-quimicos/tudo-sobre-o-dioxido-de-silicio-silica-aplicacoes-uso-seguro-e-cuidados"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Avanzi
                                </a>
                            </li>
                        </ul>
                    </PopoverHeader>
                </div>
            </div>
        </header>
    );
};
