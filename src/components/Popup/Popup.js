import './Popup.css';

function Popup(props) {
  return (
    <div className={`popup ${props.isOpen && 'popup_opened'}`}>
      <div className='popup__container'>
        <h3 className='popup__title'>{props.message}</h3>
        {/* <button
          className='button button_type_close'
          onClick={props.onClose}></button> */}
      </div>
    </div>
  );
}

export default Popup;
