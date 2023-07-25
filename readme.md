# My personal Eslint config

## Installation

Add this line to `package.json`:
```javascript
    "@bartoszosn/eslint-config-personal": "https://github.com/bartoszOsn/eslint-config-personal.git#v0.0.5"
```

then run:

```shell
yarn install
```

Then add this to your .eslintrc.json:
```json
      "extends": ["@bartoszosn/personal/core"],
```

If you already have this section, add `"@bartoszosn/personal"` at the end of the array.

## Summary

It is a little bit inspired by Airbnb style guide. I ommited rules that I usually not break, because if I break it, I surely means that it is intentional.

### Deciding if rule should be added here

While I'm composing this config I follow simple algorithm to decide if rule should be added here

```mermaid
graph TD
    A[Does this rule prohibits something that I believe shouldn't be done?] -->|no| NOT_INCLUDE(Do not include this rule)
    A -->|yes| B(Does this rule prohibits something that I do often?)

    B -->|no| C(Is is probable that only time I do it is intentional, because of some cornercase?)
    B -->|yes| INCLUDE(include this rule)

    C --> |no| INCLUDE
    C -->|yes| NOT_INCLUDE
```

## Typescript

All rules here are from `@typescript-eslint/...`

### array-type

### explicit-function-return-type

Try to not setup it so it doesn't need type when function is immidiately assigned to some variable.

### member-delimiter-style

### member-ordering

### no-explicit-any

### no-non-null-assertion ?

Omitted by now, because:
 - Does this rule prohibits something that I believe shouldn't be done? **YES**
 - Does this rule prohibits something that I do often? **NO**
 - Is it probable that only time I do it is intentional, because of some cornercase? **YES**
 - **Do not include this rule**

### prefer-ts-expect-error

As a warning for now. I believe I never had to use `@ts-ignore`, so it's possible that this rule is completely redundant, but it might prevent some serious bugs.

## References

### prefer-const

### no-var

## Objects

### no-new-object

### object-shorthand

To consider — maybe I prefer longer, but consistent syntax? 

Can I configure it in such a way, that methods that are just that – methods – are shorthand, but methods that are values, eg. passed as callbacks etc. are declared with arrow?

Do I have a lot of cases like that to waste time on thinking of that?

### find rule – https://github.com/airbnb/javascript#objects--grouped-shorthand

Ignored for now.

### quote-props

Do I want it to allow qouting only invalid identifiers, or all?

I prefer to qoute all identifiers if there is at least one invalid identifier in the object, so all identifiers looks the same.

### prefer-object-spread

Ignored for now.

### object-curly-newline

### object-curly-spacing

## Arrays

### find rule – https://github.com/airbnb/javascript#arrays--bracket-newline

Ignored by now.

## Strings

### quotes

Use single qoutes whenever possible. Template literals must contain interpolation or new lines.

### prefer-template

For now warn.
I can see a case where I would prefer to use "+", mainly in situations when my perception of current action is not "I'm creating new string from existing other strings", but "I modify existing string"

So, for example:
```typescript
const domain = 'example.com';
const path = '/asd/asd';
    
const fullPath = `${domain}${path}`
```

But:
```typescript
const pathSegments = ['https://', 'example.com', '/asd/asd']
let path = '';

for (const segment of pathSegments) {
    path = path + segment;
}
```

## Functions

### no-loop-func

### prefer-rest-params

### space-before-blocks

### no-param-reassign

### function-paren-newline

### prefer-arrow-callback

### arrow-parens

Do I really need it? Is argument without parentheses really bad?

Ignored for now.

## Modules

### import/order

With the `groups` option set to `["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"]` the order is as shown in the following example:

```ts
// 1. node "builtin" modules
import fs from 'fs';
import path from 'path';
// 2. "external" modules
import _ from 'lodash';
import chalk from 'chalk';
// 3. "internal" modules
// (if you have configured your path or webpack to handle your internal paths differently)
import foo from 'src/foo';
// 4. modules from a "parent" directory
import foo from '../foo';
import qux from '../../foo/qux';
// 5. "sibling" modules from the same or a sibling's directory
import bar from './bar';
import baz from './bar/baz';
// 6. "index" of the current directory
import main from './';
// 7. "object"-imports (only available in TypeScript)
import log = console.log;
// 8. "type" imports (only available in Flow and TypeScript)
import type { Foo } from 'foo';
```

## Variables

### no-unused-vars

## Comparison Operators & Equality

### eqeqeq

## Blocks

### brace-style

## Whitespace

### indent

Use tabs

### space-infix-ops

### eol-last

### max-len

### no-trailing-spaces

