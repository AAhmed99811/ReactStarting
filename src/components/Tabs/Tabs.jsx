
const Tabs = ({ children, button, ButtonContainer = 'menu'}) => {

    return (
        <>
            <ButtonContainer>
                {button}
            </ButtonContainer>
            {children}
        </>
    );
}

export default Tabs;