import React, { Component } from "react";

import { Transition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
    state = {
        modalIsOpen: false,
        showBlock: false,
    };

    showModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closedModal = () => {
        this.setState({ modalIsOpen: false });
    };

    render() {
        return (
            <div className="App">
                <h1>React Animations</h1>
                <button
                    className="Button"
                    onClick={() =>
                        this.setState((prevState) => ({
                            showBlock: !prevState.showBlock,
                        }))
                    }
                >
                    Toggle
                </button>
                <br />
                <Transition
                    in={this.state.showBlock}
                    timeout={300}
                    mountOnEnter
                    unmountOnExit
                    onEnter={() => console.log("Enter")}
                    onEntering={() => console.log("Entering")}
                    onEntered={() => console.log("Entered")}
                    onExit={() => console.log("Exit")}
                    onExiingt={() => console.log("Exiting")}
                    onExited={() => console.log("Exited")}
                >
                    {(state) => (
                        <div
                            style={{
                                background: "red",
                                width: 100,
                                height: 100,
                                margin: "auto",
                                transition: "opacity 1s ease-out",
                                opacity: state === "exiting" ? 0 : 1,
                            }}
                        ></div>
                    )}
                </Transition>
                <Modal
                    show={this.state.modalIsOpen}
                    closed={this.closedModal}
                />
                {this.state.modalIsOpen ? <Backdrop show /> : null}
                <button className="Button" onClick={this.showModal}>
                    Open Modal
                </button>
                <h3>Animating Lists</h3>
                <List />
            </div>
        );
    }
}

export default App;
