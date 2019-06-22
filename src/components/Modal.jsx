import React, { useState } from 'react';

function Modal ({ active, head, body, foot, toggleActive }) {
    return (
        <div className={`modal ${active ? 'is-active' : ''}`}>
            <div onClick={toggleActive} className="modal-background"></div>
            <div className="modal-card">
                <div className="modal-card-head">
                    { head }
                </div>
                <div className="modal-card-body">
                    { body }
                </div>
                <div className="modal-card-foot">
                    { foot }
                    <a onClick={toggleActive} className="button">Close</a>
                </div>
            </div>
            <div onClick={toggleActive} className="modal-close is-large"></div>
        </div>
    );
}

export default Modal;