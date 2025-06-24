// src/Countdown.jsx
import { useEffect, useState } from "react";
export default function Countdown({ time }) {
    const [t, setT] = useState(time);
    useEffect(() => {
        if (t <= 0) return;
        const timer = setTimeout(() => setT(t - 1), 1000);
        return () => clearTimeout(timer);
    }, [t]);
    return <div data-testid="count">{t}</div>
}
