import './timer-number.styles.scss';

const TimerNumber = ({ number }) => {
    // Format hours, minutes, and seconds with leading zeros if necessary
    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    return (
        <>
            <div className="timer-number">{formatTime(number)}</div>
        </>
    )
}

export default TimerNumber;
