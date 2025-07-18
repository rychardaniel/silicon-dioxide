import { PopoverHeader } from "./popover-header";

export const Header = () => {
    return (
        <header className="w-full flex justify-center p-4 font-bold bg-zinc-900">
            <div className="flex flex-col sm:flex-row gap-2 justify-between w-full max-w-[1400px] px-4 items-center">
                <h3
                    onDoubleClick={() => {
                        navigator.clipboard.writeText(
                            "https://docs.google.com/presentation/d/1mA21dcCKB-EW9uvZfNMhy0htklfgJILK-cFH3SBoZdk/edit?usp=sharing"
                        );
                    }}
                >
                    DIÓXIDO DE SILÍCIO
                </h3>
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
                            <li>
                                <a
                                    href="https://www-sciencedirect-com.translate.goog/topics/chemistry/silicon-dioxide?_x_tr_sl=auto&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=tc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ScienceDirect
                                </a>
                            </li>
                        </ul>
                    </PopoverHeader>
                </div>
            </div>
        </header>
    );
};
