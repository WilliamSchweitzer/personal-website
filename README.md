Frontend: Next.JS

We use Next.JS instead of vanilla react because Next is the industry standard now and gives you:
- Built-in routing so you no longer need to use React Router
- Server components for better performance
- Automatic code splitting (Only the essential code is sent to the user's browser)
- Great developer experience due to hot reloading
- Easy deployment

We use TypeScript over JavaScript which is the default for React development. It let's us catch bugs earlier while making the code more maintainable.

Development practices:
- Use functional components with hooks because class components are outdated
- Keep the components small and focused
- Use [[Composition]] over [[Prop Drilling]] - Composition lets you build your UI like LEGO blocks! You don't create dependencies between components through props, you let the parent decide what goes inside each component. This in turn makes your code more maintainable, testable, and easier to understand.

Use Tailwind CSS.

Server: Go with Gin at home lab, Netlify for 100% up-time
Database: MongoDB
