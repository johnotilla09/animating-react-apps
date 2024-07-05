import React from "react";
import { useRef } from "react";

import { Transition } from "react-transition-group";

import "./Modal.css";

const animationTiming = {
    enter: 400,
    exit: 1000,
};

const modal = (props) => {
    // This is to resolve the deprecated in StrictMode. findDOMNode was passed an instance of Transition2 which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here:
    const parentDivRef = useRef(null);

    return (
        <Transition
            mountOnEnter
            unmountOnExit
            in={props.show}
            timeout={animationTiming}
            nodeRef={parentDivRef}
        >
            {(state) => {
                const cssClasses = [
                    "Modal",
                    state === "entering"
                        ? "ModalOpen"
                        : state === "exiting"
                        ? "ModalClosed"
                        : null,
                ];

                return (
                    <div ref={parentDivRef} className={cssClasses.join(" ")}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>
                            Dismiss
                        </button>
                    </div>
                );
            }}
        </Transition>
    );
};

export default modal;
