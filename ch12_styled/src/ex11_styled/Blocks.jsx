import Wrapper from "./Wrapper";
import Block from "./Block";

const blockItems = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor: "red",
    },
    {
        label: "2",
        padding: "2rem",
        backgroundColor: "turquoise",
    },
    {
        label: "3",
        padding: "3rem",
        backgroundColor: "navy",
    },
];

const Blocks = (props) => {
    return (
        <Wrapper {...props}>
            {blockItems.map((blockItems) => {
                return (
                    <Block
                        padding={blockItems.padding}
                        backgroundColor={blockItems.backgroundColor}
                    >
                        {blockItems.label}
                    </Block>
                );
            })}
        </Wrapper>
    );
};

export default Blocks;
