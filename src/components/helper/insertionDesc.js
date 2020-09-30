import React from 'react';
export const InsertionSortDesc = {
    title: 'Insertion Sort',
    description: (
        <p>
            <a
                href="https://www.geeksforgeeks.org/insertion-sort/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Insertion Sort
      </a>{' '}
       is a very simple comparison sort to sort an array. A comparison sort compares the current value that we are trying to sort with other values in the array. It works with one item at a time and iteratively places each item in correct place so as to get a required sorted array.
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
    bestCase: <span>O(n)</span>,
    space: <span>O(1)</span>

}