import React from 'react';
export  const SelectionSortDesc = {
    title: 'Selection Sort',
    description: (
        <p>
            <a
                href="https://en.wikipedia.org/wiki/Selection_sort"
                target="_blank"
                rel="noopener noreferrer"
            >
                Selection Sort
      </a>{' '}
      is an in-place comparison sorting algorithm that divides the input
      list into two parts: the sublist of items already sorted, which is
      built up from left to right at the front (left) of the list, and
      the sublist of items remaining to be sorted that occupy the rest
      of the list. Initially, the sorted sublist is empty and the
      unsorted sublist is the entire input list. The algorithm proceeds
      by finding the smallest element in the unsorted sublist,
      exchanging (swapping) it with the leftmost unsorted element
      (putting it in sorted order), and moving the sublist boundaries
      one element to the right.
        </p>
    ),
    worstCase: (
        <span>
            O(n<sup>2</sup>)
        </span>
    ),
    avgCase: (
        <span>
            O(n<sup>2</sup>)
        </span>
    ),
    bestCase: (
        <span>
            O(n<sup>2</sup>)
        </span>
    ),
    space: <span>O(1)</span>
};