import React, { Component } from "react";
import store from "./store";

export default class Resultado extends Component {
  constructor(props) {
    super(props);
  }

  votesReactInPercent() {
    if (store.getState().react) {
      return (
        store.getState().react /
        (store.getState().react +
          store.getState().angular +
          store.getState().vuejs) *
        100
      );
    } else {
      return 0;
    }
  }
  votesAngularInPercent() {
    if (store.getState().angular) {
      return (
        store.getState().angular /
        (store.getState().angular +
          store.getState().react +
          store.getState().vuejs) *
        100
      );
    } else {
      return 0;
    }
  }
  votesVuejsInPercent() {
    if (store.getState().vuejs) {
      return (
        store.getState().vuejs /
        (store.getState().vuejs +
          store.getState().angular +
          store.getState().react) *
        100
      );
    } else {
      return 0;
    }
  }
  votesReactInPercentStyle() {
    return {
      width: this.votesReactInPercent() + "%"
    };
  }

  votesAngularInPercentStyle() {
    return {
      width: this.votesAngularInPercent() + "%"
    };
  }
  votesVuejsInPercentStyle() {
    return {
      width: this.votesVuejsInPercent() + "%"
    };
  }
  render() {
    return (
      <div>
        <span className="label label-danger">
          React: {this.votesReactInPercent().toFixed(2) + "%"}
        </span>
        <div className="progress progress-striped active">
          <div
            className="progress-bar progress-bar-danger"
            style={this.votesReactInPercentStyle()}
          />
        </div>

        <span className="label label-info">
          Angular: {this.votesAngularInPercent().toFixed(2) + "%"}
        </span>
        <div className="progress progress-striped active">
          <div
            className="progress-bar progress-bar-info"
            style={this.votesAngularInPercentStyle()}
          />
        </div>

        <span className="label label-success">
          Vuejs: {this.votesVuejsInPercent().toFixed(2) + "%"}
        </span>
        <div className="progress progress-striped active">
          <div
            className="progress-bar progress-bar-success"
            style={this.votesVuejsInPercentStyle()}
          />
        </div>
      </div>
    );
  }
}
