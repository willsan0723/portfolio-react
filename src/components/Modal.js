import React from 'react';

function Modal({ onClose, currentProject }) {
    const { name, category, description, url, github, index } = currentProject;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../assets/img/large/${category}/${index}.jpg`).default} alt="current category" />
                <p>{description}</p>
                <a href={url}><p>{url}</p></a>
                <a href={github}><p>{github}</p></a>
                <button onClick={onClose} type="button">Close this modal</button>
            </div>
        </div>
    );
}

export default Modal;