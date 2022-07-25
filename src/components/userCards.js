import axios from "axios";
import React, { Component } from "react";
// import users from "../mockups/users.json";
import logs from "../mockups/logs.json";
import LogsChart from "./logschart";
class UserCards extends Component {
  state = {
    data: [],
    logs: [],
    isLoading: false,
    per: 9,
    page: 10,
    total_pages: null
  };

  uppercase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadData = () => {
    let endpoint = "https://api.airtable.com/v0/appBTaX8XIvvr6zEC/Users?pageSize="+this.state.page
    var apiheaders = new Headers();
    apiheaders.append("Authorization", "Bearer key4v56MUqVr9sNJv");

    // axios.get(endpoint, {headers:apiheaders}).then((d)=>{
    //   console.log(d)
    // })

    fetch(endpoint,  {method:'get',headers:apiheaders}).then(res => res.json())
    .then((user)=>{
      console.log(user)
      if(!user.error){
        this.setState({
          data: [...user.records.map((e)=>e.fields)],
          logData: [...logs]
        });
      }
    
    })
    
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 10,
        scrolling: true
      }),
      this.loadData
    );
  };

  componentDidMount() {
    this.loadData();
  }

  sumOfRevenue = (items, prop) => {
    return items.reduce(function (a, b) {
      return a + b[prop];
    }, 0).toFixed(2);
  }

  render() {
    return (
      <div className="clearfix">
        <div className="row">
          {this.state.data.map((data) => (
            <div className="col-md-6 animated fadeIn" key={data.Id}>
              <div className="card">
                <div className="card-body">
                  <div class="avatar-circle">
                    <span class="initials">{data.Name.split(" ")[0].charAt(0) + "" + data.Name.split(" ")[1].charAt(0)}</span>
                  </div>
                  {/* <div className="avatar"> */}
                  {/* <img src={data.avatar} className="card-img-top" alt="" /> */}
                  {/* </div> */}
                  <h5 className="card-title">{this.uppercase(data.Name)}</h5>
                  <p className="card-text">
                    {data.occupation}
                    <br />
                  </p>
                </div>
                <div className="card-footer">

                  <div style={{ width: "50%", height: "150px" }}>

                    <LogsChart
                      cData={this.state.logData.filter((e) => data.Id === e.user_id)}
                    ></LogsChart>
                  </div>
                  <div style={{ width: "50%" }}>
                    <div style={{ "fontSize": "30px" }}>{this.state.logData.filter((e) => data.Id === e.user_id && e.type === "impression").length}</div>
                    <div style={{ color: "grey" }}>impression</div>
                    <div style={{ "fontSize": "30px" }}>{this.state.logData.filter((e) => data.Id === e.user_id && e.type === "conversion").length}</div>
                    <div style={{ color: "grey" }}>conversion</div>
                    <div></div>
                    <div style={{ "fontSize": "20px", color: "green", margin: "10px" }}>${this.sumOfRevenue(this.state.logData.filter((e) => data.Id === e.user_id), "revenue")}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
          }
        </div>
        <button
          className="btn btn-light btn-block w-50 mx-auto"
          style={{margin: "20px"}}
          onClick={e => {
            this.loadMore();
          }}
        >
          Load More Users
        </button>
      </div >
    );
  }
}

export default UserCards;
