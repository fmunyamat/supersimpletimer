import { createContext, useState } from "react";

export const TimerContext = createContext({
    hours: 0,
    setHours: () => null,
    minutes: 0,
    setMinutes: () => null,
    seconds: 0,
    setSeconds: () => null,
});

export const TimerProvider = ({ children }) => {
    const [timerInput, setTimerInput] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const value = {timerInput, setTimerInput};

    return (
        <TimerContext.Provider value={value}>
            { children }
        </TimerContext.Provider>
    )
}