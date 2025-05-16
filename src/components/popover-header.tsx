import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
    title: string;
    children: React.ReactNode;
};

export const PopoverHeader = (props: Props) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">{props.title}</Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto">{props.children}</PopoverContent>
        </Popover>
    );
};
