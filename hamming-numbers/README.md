### Hamming Numbers

A [Hamming number][1] is a positive integer of the form 2<sup>i</sup>3<sup>j</sup>5<sup>k</sup>, for some non-negative integers i, j, and k.

Write a function that computes the nth smallest Hamming number.

Specifically:

    The first smallest Hamming number is 1 = 203050
    The second smallest Hamming number is 2 = 213050
    The third smallest Hamming number is 3 = 203150
    The fourth smallest Hamming number is 4 = 223050
    The fifth smallest Hamming number is 5 = 203051

The 20 smallest Hamming numbers are given in example test fixture.

Your code should be able to compute all of the smallest 5,000 (Clojure: 2000) Hamming numbers without timing out.

[1]: https://en.wikipedia.org/wiki/Regular_number