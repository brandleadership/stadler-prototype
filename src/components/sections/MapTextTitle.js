import H2 from '../../components/typography/H2';
import Text from '../../components/typography/Text';
import SmallWidth from '../layouts/SmallWidth';

export default function MapTextTitle(props) {
    return (
        <section className="bg-white  dark:bg-gray-900 ">
            <SmallWidth>
                <div className="max-w-4xl mx-auto">
                    <H2
                        styles="text-center mb-2 text-4xl font-bold "
                        resetStyles={true}
                    >
                        Standorte
                    </H2>
                </div>
            </SmallWidth>
        </section>
    );
}
