import H2 from '../typography/H2';
import Text from '../typography/Text';
import {
    MARK_LINK,
    MARK_UNDERLINE,
    NODE_HEADING,
    NODE_HR,
    NODE_IMAGE,
    NODE_LI,
    NODE_OL,
    NODE_PARAGRAPH,
    NODE_QUOTE,
    NODE_UL,
    render,
} from 'storyblok-rich-text-react-renderer';
import H3 from '../typography/H3';
import H1 from '../typography/H1';
import H4 from '../typography/H4';
import Blockquote from '../typography/Blockquote';
import ButtonPrimary from '../elements/ButtonPrimary';
import ButtonUrlRenderer from './ButtonUrlRenderer';

const RichTextRenderer = (props) => {
    return (
        <div className={'richtext ' + props.customStyles}>
            {render(props.text, {
                markResolvers: {
                    [MARK_UNDERLINE]: (children) => (
                        <span className="underline underline-offset-4">
                            {children}
                        </span>
                    ),
                    [MARK_LINK]: (children, props) => {
                        const { linktype, href, target } = props;
                        if (linktype === 'email') {
                            // Email links: add `mailto:` scheme and map to <a>
                            return (
                                <a
                                    href={`mailto:${href}`}
                                    className="text-primary"
                                >
                                    {children}
                                </a>
                            );
                        }
                        if (href.match(/^(https?:)?\/\//)) {
                            // External links: map to <a>
                            return (
                                <a
                                    tabIndex="1"
                                    className="text-primary"
                                    href={href}
                                    target={target}
                                >
                                    {children}
                                </a>
                            );
                        }
                        // Internal links: map to <Link>
                        return (
                            <a
                                tabIndex="1"
                                className="text-primary"
                                target={target}
                                href={href}
                            >
                                {children}
                            </a>
                        );
                    },
                },
                blokResolvers: {
                    ['cta-small']: (props) => (
                        <ButtonPrimary
                            position="left"
                            buttonText={props.CTA_text}
                            href={ButtonUrlRenderer(props.CTA_link)}
                        />
                    ),
                },
                nodeResolvers: {
                    [NODE_IMAGE]: (children, props) => (
                        <img
                            src={props?.src}
                            title={props.title}
                            alt={props.alt}
                            className="my-6"
                        />
                    ),
                    [NODE_QUOTE]: (children) => (
                        <Blockquote>{children}</Blockquote>
                    ),
                    [NODE_HR]: () => <hr className="my-6 bg-greySolid-100" />,
                    [NODE_PARAGRAPH]: (children) => (
                        <Text styles={props.customStyles}>{children}</Text>
                    ),
                    [NODE_UL]: (children) => (
                        <ul className="my-6 list-inside list-disc">
                            {children}
                        </ul>
                    ),
                    [NODE_OL]: (children) => (
                        <ol className="my-6 list-inside list-decimal">
                            {children}
                        </ol>
                    ),
                    [NODE_LI]: (children) => (
                        <li className="px-2 py-2">{children}</li>
                    ),
                    [NODE_HEADING]: (children, props) => {
                        switch (props.level) {
                            case 1:
                                return <H1>{children}</H1>;
                            case 2:
                                return (
                                    <div className="mt-12 first:mt-0">
                                        <H2>{children}</H2>
                                    </div>
                                );
                            case 3:
                                return (
                                    <div className="mb-4 mt-12 first:mt-0">
                                        <H3>{children}</H3>
                                    </div>
                                );
                            case 4:
                                return (
                                    <div className="mb-3 mt-5 first:mt-1">
                                        <H4 styles="font-bold break-words text-base lg:text-xl">
                                            {children}
                                        </H4>
                                    </div>
                                );
                        }
                    },
                },
            })}
        </div>
    );
};

export default RichTextRenderer;
