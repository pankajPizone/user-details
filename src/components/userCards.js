import React, { Component } from "react";
import users from "../mockups/users.json";
import logs from "../mockups/logs.json";
import LogsChart from "./logschart";
class UserCards extends Component {
  state = {
    data: [],
    logs: [],
    isLoading: false
  };

  uppercase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadData = () => {
    this.setState({
      data: [...users],
      logData: [...logs]
    });
  };

  componentDidMount() {
    this.loadData();
  }

  sumOfRevenue = (items, prop) => {
    return items.reduce(function (a, b) {
      return a + b[prop];
    }, 0);
  }

  render() {
    return (
      <div className="clearfix">
        <div className="row">
          {this.state.data.map((data) => (
            <div className="col-md-6 animated fadeIn" key={data.id}>
              <div className="card">
                <div className="card-body">
                  <div class="avatar-circle">
                    <span class="initials">{data.name.split(" ")[0].charAt(0) + "" + data.name.split(" ")[1].charAt(0)}</span>
                  </div>
                  {/* <div className="avatar"> */}
                  {/* <img src={data.avatar} className="card-img-top" alt="" /> */}
                  {/* </div> */}
                  <h5 className="card-title">{this.uppercase(data.name)}</h5>
                  <p className="card-text">
                    {data.occupation}
                    <br />
                  </p>
                </div>
                <div className="card-footer">

                  <div style={{ width: "50%", height: "150px" }}>

                    <LogsChart
                      cData={this.state.logData.filter((e) => data.id === e.user_id)}
                    ></LogsChart>
                  </div>
                  <div style={{ width: "50%" }}>
                    <div style={{ "fontSize": "30px" }}>{this.state.logData.filter((e) => data.id === e.user_id && e.type === "impression").length}</div>
                    <div style={{ color: "grey" }}>impression</div>
                    <div style={{ "fontSize": "30px" }}>{this.state.logData.filter((e) => data.id === e.user_id && e.type === "conversion").length}</div>
                    <div style={{ color: "grey" }}>conversion</div>
                    <div></div>
                    <div style={{ "fontSize": "20px", color: "green", margin: "10px" }}>${this.sumOfRevenue(this.state.logData.filter((e) => data.id === e.user_id), "revenue")}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div >
    );
  }
}

export default UserCards;
