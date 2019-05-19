import React from 'react';
import {shallow} from 'enzyme';
import SkeletonLoader from '../skeleton';

describe('Skeleton loading', () => {
    describe('Rendering', () => {
        it('should match to snapshot - square', () => {
            const square = shallow(<SkeletonLoader type='square' loading={true} />)
            expect(square).toMatchSnapshot()
        });

        it('should match to snapshot - rectange', () => {
            const rectangle = shallow(<SkeletonLoader type='rectangle' loading={true} />)
            expect(rectangle).toMatchSnapshot()
        });

        it('should match to snapshot - circle', () => {
            const circle = shallow(<SkeletonLoader type='circle' loading={true} />)
            expect(circle).toMatchSnapshot()
        });
    });
});