### Brief

To try and encourage more sales from a popular 5 piece fashion collection, a store owner has decided to offer discounts for customers that buy multiple shirts.

One of any of the five shirts costs $8.

If, however, you buy two different shirts, you get a 5%
discount on those two shirts.

If you buy 3 different shirts, you get a 10% discount.

If you buy 4 different shirts, you get a 20% discount.

If you buy all 5, you get a 25% discount.

Note that if you buy four shirts, of which 3 are
different, you get a 10% discount on the 3 that
form part of a set, but the fourth shirt still costs $8.

Your mission is to write a piece of code to calculate the
price of any conceivable shopping basket (containing only
shirts of the same collection), giving as big a discount as
possible.

For example, how much does this basket of shirts cost?

-   2 of the first shirt
-   2 of the second shirt
-   2 of the third shirt
-   1 of the fourth shirt
-   1 of the fifth shirt

One way of grouping these 8 shirts is:

-   1 group of 5 --> 25% discount (1st,2nd,3rd,4th,5th)
-   +1 group of 3 --> 10% discount (1st,2nd,3rd)

This would give a total of:

-   5 shirts at a 25% discount
-   +3 shirts at a 10% discount

Resulting in:

-   5 x (8 - 2.00) == 5 x 6.00 == $30.00
-   +3 x (8 - 0.80) == 3 x 7.20 == $21.60

For a total of $51.60

However, a different way to group these 8 shirts is:

-   1 group of 4 shirts --> 20% discount (1st,2nd,3rd,4th)
-   +1 group of 4 shirts --> 20% discount (1st,2nd,3rd,5th)

This would give a total of:

-   4 shirts at a 20% discount
-   +4 shirts at a 20% discount

Resulting in:

-   4 x (8 - 1.60) == 4 x 6.40 == $25.60
-   +4 x (8 - 1.60) == 4 x 6.40 == $25.60

For a total of $51.20

And $51.20 is the price with the biggest discount.


## Setup

First, install the assignment dependencies:

```bash
$ npm install
```

## Making the test suite pass

You may execute the tests with:

```bash
$ npm test
```

### Evaluation Criteria

- JavaScript best practices
- Show us your work through your commit history
- Completeness: did you complete the features? Are all the tests running?
- Correctness: does the functionality act in sensible, thought-out ways?
- Maintainability: is it written in a clean, maintainable way?


### CodeSubmit

Please organize, design, and document your code as if it were going into production - then push your changes 
to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

All the best and happy coding,

The Perfectstay Team