import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [cardName, setCardName] = useState("");
  const [cardLink, setCardLink] = useState("");

  function hundleChangeCardName(evt) {
    setCardName(evt.target.value);
  }

  function hundleChangeCardLink(evt) {
    setCardLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({ cardName, cardLink });
    evt.target.reset();
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText={props.statusSubmitButton}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input popup__card-name"
        name="name"
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
        id="popup__card-name"
        onChange={hundleChangeCardName}
      />
      <span className="popup__input-error popup__card-name-error "></span>
      <input
        type="url"
        className="popup__input popup__card-link"
        name="link"
        placeholder="Ссылка на картинку"
        required
        id="popup__card-link"
        onChange={hundleChangeCardLink}
      />
      <span className="popup__input-error popup__card-link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
