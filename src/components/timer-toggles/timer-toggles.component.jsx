import { ReactComponent as IncrementIcon } from '../../assets/images/up-arrow.svg';
import { ReactComponent as DecrementIcon } from '../../assets/images/down-arrow.svg'
import './timer-toggles.styles.scss';

const TimerToggles = ({ children, label, onClick, timerType }) => {
    
    return (
        <>
            <div className="timer-toggle-container">
                <div className="timer-label">
                    {label}
                </div>
                <button type='button' className="increment-toggle" data-time={timerType} data-toggle='increment' onClick={onClick}>{<IncrementIcon style={{ pointerEvents: 'none' }} />}</button>
                {children}
                <button type='button' className="decrement-toggle" data-time={timerType} data-toggle='decrement' onClick={onClick}>{<DecrementIcon style={{ pointerEvents: 'none' }} />}</button>
            </div>
        </>
    )
}

export default TimerToggles;
