'use client';
import H2 from '../../components/typography/H2';
import SmallWidth from '../layouts/SmallWidth';

export default function MapTextTitle() {
    return (
        <section className="bg-white">
            <SmallWidth>
                <div className="mx-auto mb-2 max-w-4xl text-center text-4xl font-bold">
                    <H2>Standorte</H2>
                </div>
            </SmallWidth>
        </section>
    );
}
