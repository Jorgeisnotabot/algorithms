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

    test('should return undefined for non-existent keys', () => {
        expect(map.get('non-existent-key')).toBeUndefined();
    });

    test('should return true for existing keys', () => {
        map.set('key1', 20);
        expect(map.delete('key1')).toBe(true);
        expect(map.has('key1')).toBe(true);
    });
});