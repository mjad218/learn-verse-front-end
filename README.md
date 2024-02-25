# Learn Verse Front End Application 

LearnVerse is a platform to help publish online courses and enhance the learning journey.

## Best Practises to follow 
### File Structure 
- `app` directory is for the Routes that translate to actual pages in the application.
- `components` is for all components in the applications.
- `services` is for data fetching logic.
- `hooks` is for custom React hooks.
- `constants ` is for shared Global variables.

### Naming Conventions 
- Variables => Camel Case `learnVerse instead of learn_verse`
- Constants => ALL upper case `LEARNVERSE or LEARN_VERSE`
- Components => React components have to start with an upper case letter `Header not header`
- please use lowercase for all folders or directories in the source code.


### Quotes
please use double quotes `"learn verse"` instead of single ones `'learn verse'` 
you can install The Prettier VS Code plugin to do that automatically [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Useful VS Code Plugins 
1. Prettier  [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2. Auto Close Tag [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
3. Auto Rename Tag [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
4. ESLint  [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
5. ES7+ React/Redux/React-Native snippets [React Snippets ](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
6. JavaScript and TypeScript Nightly [TypeScript Nightly ](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
7. Tailwind Docs  [Tailwind  ](https://marketplace.visualstudio.com/items?itemName=austenc.tailwind-docs)
8. Import Cost  [Import Cost  ](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

## Arrow Function 
for consistency and simplicity always prefer the Arrow function. 
```
const printHello => () => {
  console.log("Hello Learn Verse");
};
```
instead of 
```
function printHello() {
  console.log("Hello Learn Verse");
}
```

## Default Export 

Outside the `app directory` don't use default exports. 
```
export const printHello => () => {
  console.log("Hello Learn Verse");
};
```
instead of 
```
const printHello => () => {
  console.log("Hello Learn Verse");
};

export default printHello;
```
## Variable Declarations 
DO NOT use var! ❌❌❌
```
var title = "Learn Verse";
```
- Prefer using `const` whenever possible unless the variable needs to change, in that case use `let`;
```
const GRADUATION_YEAR = 2024;

let daysRemaining = 90;

@EveryMorning
daysRemaining = daysRemaining - 1 // or daysRemaining--

```
