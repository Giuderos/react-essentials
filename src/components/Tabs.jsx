export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    /** 'menu' is a default prop value */
    /** Creation of a variable which can be used as a custom component (first letter uppercase) */
    //const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}