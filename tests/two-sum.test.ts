import { TwoSum } from '../src/algorithms/two-sum';

describe('TwoSum', () => {
    const twoSum = new TwoSum();

    it('should find two numbers that add up to the targe', () => {
        expect(twoSum.findTwoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
        expect(twoSum.findTwoSum([3, 2, 4], 6)).toEqual([1, 2]);
        expect(twoSum.findTwoSum([3, 3], 6)).toEqual([0, 1]);
    })

  

 
})