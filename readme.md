# babel-101

Learning ES6 and Babel via [tower-of-babel](https://github.com/yosuke-furukawa/tower-of-babel).

## random notes taken

- My first impression to Template String is meh. But it comes pretty handy for printing a string that contains many variables in it.
- `extends` and `super` reminds me of Java somehow...
- A module can export `const` and `function`.
- ES6: `export`, CommonJS: `exports`
- ES6: `import {} from <PATH>`, CommonJS: `require()`
- `export default` so importing doesn't require `{}`.
- `let` and `const` are simple but pretty useful I think.
- Computed property is kinda cool. Not sure if I will be using it that much though.
- I don't think I understand Iteratable really well. `for..of` is OK.
- Generator: feeling much better than Iteratable! At least generators don't require confusing boilerplate code.
- `function*(){}()` <- there are parentheses after function declaration to make it work. Generators are objects, not functions.
- I got more understandings from [this video tutorial about Generators](https://egghead.io/lessons/ecmascript-6-generators) at Egghead.io.
- Destructure: from the tutorial, I quite understand what destructure is. but the exercise re-confused me. To me, destructure is useful for swapping variables.
- Destructure chapter should be before Iteratables and Generators. Seeing a destructure usage in chapter 8 also confused me.
- Arrow functions - can be super short yet not that easy to understand. (or i just need more time with them actually)
- For the first time I use `Array.prototype.reduce()` actually.
- Spread call is kinda cool too. Combining with `Array.prototype.reduce()` can simplify the function quite well.