import React, { Component } from "react";
import axios from "axios";

export default class n_CreatePatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    console.log("nish");
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/user/${id}`).then((res) => {
      console.log("Fail");
      if (res.data.success) {
        this.setState({
          user: res.data.user,
        });
        console.log(this.state.user);
      }
    });
  }
  render() {
    return <div>n_DetailPatient</div>;
  }
}
