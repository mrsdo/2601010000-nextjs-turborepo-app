// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation
export default function generator(plop) {
    // A simple generator to add a new React component to the internal UI library
    plop.setGenerator("react-component", {
        description: "Adds a new react component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is the name of the component?",
            },
        ],
        actions: [
            {
                type: "add",
                path: "components/{{pascalCase name}}.tsx",
                templateFile: "templates/component.hbs",
            },
            {
                type: "append",
                path: "index.tsx",
                pattern: /(\/\/ component exports)/g,
                template: 'export * from "./components/{{pascalCase name}}";',
            },
        ],
    });
}
