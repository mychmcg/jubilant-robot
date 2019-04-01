import * as React from "react";
import { Card } from "antd";
import Search from "antd/lib/input/Search";

export class StoreView extends React.Component {
  state = {
    person: [
      {
        id: { name: "Test", value: "1" },
        name: { first: "Test", last: "" },
        gender: "Robot"
      }
    ],
    loading: true
  };

  // TODO: query list data from DB
  async componentDidMount() {
    const url =
      "https://randomuser.me/api/?results=7&inc=id,name,gender&nat=us";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results, loading: false });
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%", margin: "auto" }}>
          <Search
            placeholder="search products and services"
            // tslint:disable-next-line:jsx-no-lambda
            onSearch={value => console.log(value)}
          />
          <br />
          <br />
          {this.state.loading ? (
            <div>Loading...</div>
          ) : (
            this.state.person.map(listing => {
              return (
                <Card
                  className="product-listing"
                  key={listing.id.value}
                  title={listing.id.value}
                  extra={<a href="#">More</a>}
                >
                  <p>{listing.gender}</p>
                  <p>{listing.name.first}</p>
                  <p>{listing.name.last}</p>
                </Card>
              );
            })
          )}
        </div>
      </div>
    );
  }
}
