import Wrapper from "./Wrapper";
import Block from "./Block";

const Blocks = (props) => {
    return (
        <Wrapper {...props}>
            {props.items.map((blockItems) => {
                return (
                    <Block
                        padding={blockItems.padding}
                        background={blockItems.background}
                    >
                        {blockItems.label}
                    </Block>
                );
            })}
        </Wrapper>
    );
};

export default Blocks;
