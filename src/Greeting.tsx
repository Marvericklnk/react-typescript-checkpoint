// Step 1: Use .tsx because this file contains TypeScript and JSX.
// Step 2: Define the component's props. The name must be a string.
type GreetingProps = {
  name: string;
};

// Step 3: Apply the props type to the destructured parameter.
// TypeScript infers the returned JSX, so no extra return annotation is needed.
const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};

// Step 4: Keep the default export from the original component.
export default Greeting;
