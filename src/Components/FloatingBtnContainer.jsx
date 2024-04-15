export const FloatingButtonContainer = ({ children }) => {
    return (
        <>
            <div className="fixed bottom-5 right-5 z-50">
                {children}
            </div>
        </>
    )
}