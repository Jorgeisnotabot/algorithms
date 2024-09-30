import { HashMap } from '../src/algorithms/hashmap';

describe('HashMap', () => {
    let map: HashMap<string, number>;

    beforeEach(() => {
        map = new HashMap<string, number>();
    });

    test('should set and get values correctly', () => {
        map.set('key1', 20);
        expect(map.get('key1')).toBe(20);
    });

   
});