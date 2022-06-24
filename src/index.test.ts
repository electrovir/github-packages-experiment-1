import {doAThing} from './index';

describe(doAThing.name, () => {
    it('should return the string', () => {
        expect(doAThing()).toBe('hello there');
    });
});
