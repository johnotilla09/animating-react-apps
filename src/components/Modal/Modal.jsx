import React from "react";
import { useRef } from "react";

import { CSSTransition } from "react-transition-group";

import "./Modal.css";

const animationTiming = {
    enter: 400,
    exit: 1000,
};

const modal = (props) => {
    // This is to resolve the deprecated in StrictMode. findDOMNode was passed an instance of Transition2 which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here:
    const parentDivRef = useRef(null);

    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.show}
            timeout={animationTiming}
            nodeRef={parentDivRef}
            classNames={{
                enter: "",
                enterActive: "ModalOpen",
                exit: "",
                exitActive: "ModalClosed",
            }}
        >
            <div ref={parentDivRef} className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>
                    Dismiss
                </button>
            </div>
        </CSSTransition>
    );
};

export default modal;
