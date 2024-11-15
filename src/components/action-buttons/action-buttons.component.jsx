import './action-buttons.styles.scss';

const ActionButtons = ({ onClick, label, ...otherProps }) => {
  return (
    <>  
        <button onClick={onClick} {...otherProps}>{label}</button>
    </>
  )
}

export default ActionButtons;
