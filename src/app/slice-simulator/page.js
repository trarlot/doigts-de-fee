import {
    SliceSimulator,
    getSlices,
} from '@slicemachine/adapter-next/simulator';
import { SliceZone } from '@prismicio/react';

export default async function SliceSimulatorPage({ searchParams }) {
    const { state } = await searchParams;
    const slices = getSlices(state);

    return (
        <SliceSimulator>
            <SliceZone slices={slices} />
        </SliceSimulator>
    );
}
