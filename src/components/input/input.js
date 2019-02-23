import React, { Component } from "react";

import Autosuggest from "react-autosuggest";
import mentors from "../helpers";
import "./input.css";

export default class Input extends Component {
  state = {
    value: "",
    suggestions: []
  };

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  getSuggestions = value => {
    const escapedValue = this.escapeRegexCharacters(value.trim());

    if (escapedValue === "") {
      return [];
    }

    const regex = new RegExp("^" + escapedValue, "i");

    return mentors.filter(mentor => regex.test(mentor.name));
  };

  getSuggestionValue = suggestion => {
    return suggestion.name;
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  renderSuggestion = suggestion => {
    return <span>{suggestion.name}</span>;
  };

  onSubmit = e => {
    e.preventDefault();

    const { onChangeMentorId } = this.props;
    const { value } = this.state;

    let idx;

    value === ""
      ? (idx = null)
      : (idx = mentors.findIndex(mentor => mentor.name === value));

    onChangeMentorId(idx);
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type github of mentor",
      value,
      onChange: this.onChange
    };

    return (
      <form action="" onSubmit={this.onSubmit} className='form'>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
        <Button />
      </form>
    );
  }
}

const Button = () => {
  return <button className='btn-search'>Search</button>;
};
