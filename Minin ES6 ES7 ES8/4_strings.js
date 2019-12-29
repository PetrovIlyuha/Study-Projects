const title = "New Project";
const isVisible = () => Math.random() > 0.5;
const template = `
${isVisible() ? `<p>Visible</p>` : ""}
  <div id="title" style="color: blue">
    ${title}
  </div>
`;

console.log(template);

// Methods
const str = "  *Hello* ";

console.log(str.startsWith("  *H"));
console.log(str.includes("lo"));
console.log(str.repeat(3));

console.log(str.trim().startsWith("*H"));
console.log(str.trimStart());
console.log(str.trimEnd());

console.log(str.padStart(10, "*"));
console.log(str.padEnd(4, "D"));
