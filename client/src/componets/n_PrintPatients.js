import n_Patients from "./n_Patients";
import React from "react";
import ReactToPrint from "react-to-print";

class n_PrintPatients extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            return <a href="#">Print this out!</a>;
          }}
          content={() => this.componentRef}
        />
        <n_Patients ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}
