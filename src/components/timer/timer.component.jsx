import { useContext, useState } from "react";
import { TimerContext } from "../../contexts/timer.context";
import TimerNumber from "../timer-number/timer-number.component";
import TimerToggles from "../timer-toggles/timer-toggles.component";
import ActionButtons from "../action-buttons/action-buttons.component";
import './timer.styles.scss';

const Timer = () => {
    const defaultFields = {
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    const { timerInput, setTimerInput } = useContext(TimerContext);
    const { hours, minutes, seconds } = timerInput;

    const [intervalId, setIntervalId] = useState(null); // To store the interval ID
    const [isRunning, setIsRunning] = useState(false); // To track if the timer is running
    
    const separatorBlink = isRunning ? 'blink' : null;

    const startTimer = () => {
        if (isRunning) return; // Prevent starting a new interval if already running

        const timerInterval = setInterval(() => {
            setTimerInput(({ hours, minutes, seconds }) => {
                if (seconds > 0) return { hours, minutes, seconds: seconds - 1 };
                if (minutes > 0) return { hours, minutes: minutes - 1, seconds: 59 };
                if (hours > 0) return { hours: hours - 1, minutes: 59, seconds: 59 };
                if (seconds == 0 && minutes == 0 && hours ==0) {resetTimer()};
        
                clearInterval(timerInterval);
                return { ...defaultFields };
              });
            }, 1000);

        setIntervalId(timerInterval); // Save the interval ID
        setIsRunning(true); // Set running to true
    };

    const pauseTimer = () => {
        clearInterval(intervalId); // Stop the interval
        setIsRunning(false); // Set running to false
    };

    const resetTimer = () => {
        clearInterval(intervalId); // Clear the interval if running
        setTimerInput(defaultFields); // Reset to default values
        setIsRunning(false); // Stop the timer
    };

    const toggleButtons = (event) => {
    const timerType = event.target.getAttribute('data-time');
    const toggleType = event.target.getAttribute('data-toggle');
    
    // Assuming you know which button corresponds to which key (e.g., hours, minutes, seconds)
    // Find the timerType based on event.target (e.g., by using the button's name, class, or another attribute)
    
    if (timerType) {
        setTimerInput((prevTimerInput) => {
            // Increment or decrement the corresponding timer value
            const updatedValue = () => {
                if (toggleType === 'decrement') {
                return Math.max(prevTimerInput[timerType] - 1, 0);
                }
                return prevTimerInput[timerType] + 1;
            }
    
            return { 
                ...prevTimerInput, 
                [timerType]: updatedValue()
            };
        });
    }
    };

    console.log(timerInput['hours']);

  return (
    <>
        <div className="timer-container">
            <TimerToggles label='H' timerType='hours' onClick={toggleButtons}>
                <TimerNumber number={hours} />
            </TimerToggles>
            <div className={`time-separator ${separatorBlink}`}>:</div>
            <TimerToggles label='M' timerType='minutes' onClick={toggleButtons}>
                <TimerNumber number={minutes} />
            </TimerToggles>
            <div className={`time-separator ${separatorBlink}`}>:</div>
            <TimerToggles label='S' timerType='seconds' onClick={toggleButtons}>
                <TimerNumber number={seconds} />
            </TimerToggles>
        </div>
        <div className="timer-action-buttons">
            <ActionButtons disabled={isRunning} label='START' onClick={startTimer}/>
            <ActionButtons disabled={!isRunning} label='PAUSE' onClick={pauseTimer}/>
            <ActionButtons label='RESET' onClick={resetTimer}/>
        </div>
    </>
  )
}

export default Timer;
