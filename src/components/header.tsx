import { PopoverHeader } from "./popover-header";

export const Header = () => {
    return (
        <header className="w-full flex justify-center p-4 font-bold bg-zinc-900">
            <div className="flex flex-row justify-between w-full max-w-[1400px] px-4 items-center">
                <h3>DIÓXIDO DE SILÍCIO</h3>
                <div className="flex gap-2">
                    <PopoverHeader title={"Integrantes"}>
                        <ul>
                            <li>Rychard</li>
                            <li>Guilherme</li>
                            <li>Kauã</li>
                            <li>Arthur</li>
                        </ul>
                    </PopoverHeader>
                    <PopoverHeader title={"Referências"}>
                        <ul>
                            <li>
                                <a href="https://google.com">
                                    Link da referência 1
                                </a>
                            </li>
                            <li>
                                <a href="https://google.com">
                                    Link da referência 2
                                </a>
                            </li>
                        </ul>
                    </PopoverHeader>
                </div>
            </div>
        </header>
    );
};
