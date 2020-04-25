import React from "react";
import image from './Group.png';
import * as actions from './actions';
import {connect} from "react-redux";

const App = ({inc, dec, refresh, counter}) => {
    return (
        <div className="content_wrapper">
            <div id="counter">{counter}</div>
            <div className="buttons_container">
                <button className="btn" id="inc-btn" onClick={inc}/>
                <button className="btn" id="dec-btn" onClick={dec}/>
                <button className="btn" id="refresh-btn" onClick={refresh}><img src={image} alt="refresh-icon"/></button>
            </div>
        </div>)

}

const mapStateToProps = (state) => {
    return {counter: state}
}
export default connect(mapStateToProps, actions)(App);