import { useState } from 'react';
export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1 data-testid="display">{count}</h1>
            <button type="button" onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}
