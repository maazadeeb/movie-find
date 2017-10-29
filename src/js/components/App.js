import React from "react";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";
import SearchForm from "./SearchForm";

class App extends React.Component {

    render() {
        return (<SearchForm/>);
    }
}

export default App;