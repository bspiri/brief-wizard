import React, { Component } from "react";
import { store } from "./store";
import setCheck from "./actions";
import styled from "styled-components";

const Button = styled.button`
    width: 250px;
    height: 45px;
    font-size: 1.1em;
    font-weight: 600;
    border: none;
    background: #398AF7;
    color: white;
    border-radius: 5px;
    margin-right: 20px;
    margin-bottom: 50px;
`;

const ButtonGroup = ({ selections }) => (
    <div className="hello-btns">
        {selections.map((select, i) => (
            <button
                data-select={select}
                key={`btn-${i}`}
                className="hello-btn"
                onClick={dispatchBtnAction}
            >
                {select}
            </button>
        ))}
    </div>
);
function dispatchBtnAction(e) {
    const tech = e.target.dataset.select;
    store.dispatch(setCheck('select'));
}

export default ButtonGroup;

