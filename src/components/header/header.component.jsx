import { ReactComponent as ClockIcon } from '../../assets/images/clock-square.svg';
import './header.styles.scss';

const Header = () => {
  return (
    <>
        <div className="header-container">
            <div className="clock-icon">
                <ClockIcon />
            </div>
            <div className="header-title">
                SUPER SIMPLE TIMER
            </div>
        </div>
    </>
  )
}

export default Header
