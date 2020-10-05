# Typescript with JEST

This is simply a harness/blueprint for creating pure Typescript functionality and write tests in Jest. Includes one
example simple stub to show it working from initial setup.

## Pre-requirements
```
node version >= v10.16.0 (created with this version but also tested on node 14)
```

## Setup
```
npm i
```

## Run tests (watch by default)
```
npm run test
```

### Example output
```
PASS  src/example/index.test.ts
  Example function simple
    √ should add one to input (5 ms)
    √ should add one to negatives (1 ms)
    √ should throw an error on incorrect inputs (4 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        3.674 s
Ran all test suites.

Watch Usage: Press w to show more.
```

## Common utils 

If you're going to extend this out with mutiple exercises but want a place to put common utils you can put these
in the `utils/` folder. Importing from this can be done using :

```
import x from '@utils/x'
```