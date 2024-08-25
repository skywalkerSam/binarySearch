import { expect, test } from "vitest";

let array = ['hello', 'world', 'wtf', 'fml', 'idk'];

import { sortThis } from './src/binarySearch';
test('Sorted Array', () => {
    expect(sortThis(array)).toStrictEqual(['fml', 'hello', 'idk', 'world', 'wtf']);
})

import { binarySearch } from './src/binarySearch';
test('Binary Search', () => {
    expect(binarySearch(array, 'wtf')).toBe(2)
})


let theArray = ['Sam', 'Starboy', 'Tris', 'Stargirl', 'Life', 'Universe', '&', 'Whatever', 'tf', 'lies', 'beyond...', 'wtf, right?', 'Origins', 'Eternity', 'The Beginning of the end', 'Singularity', 'FML', 'Fuck', 'Just', 'Fuckin\'', 'Die', 'Already', '...']


import { binarySearch } from './src/binarySearch';
test('Another BS', () => {
    expect(binarySearch(theArray, 'Universe')).toBe(5)
})

