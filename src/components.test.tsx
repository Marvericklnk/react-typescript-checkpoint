import { afterEach, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';
import Counter from './Counter';
afterEach(cleanup);
test('Greeting displays the supplied name',()=>{
 render(<Greeting name="Marvin"/>);
 expect(screen.getByText('Hello, Marvin!')).toBeTruthy();
});
test('Counter starts at zero and increments on repeated clicks',async()=>{
 const user=userEvent.setup();render(<Counter/>);
 expect(screen.getByText('Count: 0')).toBeTruthy();
 await user.click(screen.getByRole('button',{name:'Increment'}));
 expect(screen.getByText('Count: 1')).toBeTruthy();
 await user.click(screen.getByRole('button',{name:'Increment'}));
 await user.click(screen.getByRole('button',{name:'Increment'}));
 expect(screen.getByText('Count: 3')).toBeTruthy();
});
