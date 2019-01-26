import React, {Component} from "react";
import ReactToPrint from "react-to-print";
 
import Results from '../results/Results'
class ComponentToPrint extends Component {
  render() {
    const { values: {firstName, lastName, email, occupation,
        city, bio} } = this.props;
    return (
      <table>
        <thead>
          <th>First Name: {firstName}</th>
          <th>Last Name : {lastName}</th>
          <th>Email: {email}</th>
        </thead>
        <tbody>
          <tr>
            <td>Occupation: {occupation}</td>
            <td>City : {city}</td>
            <td>Bio: {bio}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
 
class Print extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}
 
export default Print;