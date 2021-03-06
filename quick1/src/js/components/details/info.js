/* hepl-dw/vitfoud-client
 *
 * /src/js/components/details/info.js - Details Component : info component
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PlaceInfo extends Component {
    render() {
        return (
            <div className={ "informations" }>
                <h3 className={ "informations__name" }>{ this.props.name }</h3>
                <address className={ "informations__adresse" }>{ this.props.address }</address>
                <p className={ "informations__distance" }>
                    <span>{ "Distance : " }</span>
                    <strong>{ `${ this.props.distance }m` }</strong>
                </p>
            </div>
        );
    }
}

PlaceInfo.propTypes = {
    "name": PropTypes.string.isRequired,
    "address": PropTypes.string.isRequired,
    "distance": PropTypes.number.isRequired,
};
