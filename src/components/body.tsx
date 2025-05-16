import { Content } from "./content";
import { Title } from "./title";

export const Body = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <Title>SiO₂</Title>
            <div className="bg-zinc-900 p-4 rounded-md w-full max-w-[700px]">
                <Content />
            </div>
        </div>
    );
};
