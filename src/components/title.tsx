type Props = {
    children: React.ReactNode;
};

export const Title = (props: Props) => {
    return <h2 className="p-4 font-bold text-5xl">{props.children}</h2>;
};
