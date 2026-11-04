import { Component } from 'react';

// Step 1: Describe the state. count can only hold a number.
type CounterState = {
  count: number;
};

// Step 2: This component accepts no props.
type CounterProps = Record<string, never>;

// Step 3: Give React.Component its props and state types.
// Keep the class component structure used in the original exercise.
class Counter extends Component<CounterProps, CounterState> {
  // Step 4: Type the state and keep its initial count of zero.
  state: CounterState = {
    count: 0,
  };

  // Step 5: void means this handler does not return a value.
  // The arrow function keeps this bound to the component instance.
  increment = (): void => {
    // Calculate from the previous state so queued updates remain correct.
    this.setState(previousState => ({ count: previousState.count + 1 }));
  };

  render() {
    // Step 6: Keep ( on the same line as return. A line break after return
    // would insert a semicolon and prevent the JSX from being returned.
    return (
      <div>
        <p aria-live="polite">Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
