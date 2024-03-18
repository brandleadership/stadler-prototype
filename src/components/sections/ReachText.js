const RichTextRenderer = ({ text }) => {
    return (
        <>
            {render(text, {
                defaultBlokResolver: (name, props) => (
                    <StoryblokComponent blok={{ component: name, ...props }} />
                ),
            })}
        </>
    );
};

export default RichTextRenderer;
