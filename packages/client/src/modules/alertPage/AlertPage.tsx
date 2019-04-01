import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

export class AlertPage extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    const {
      location: { state }
    } = this.props;

    const alertMessage =
      state && state.message ? state.message : "How did you get here?";

    const alertMessageDesc =
      state && state.messageDesc
        ? state.messageDesc
        : "Nobody's s'posed to be here.";

    return (
      <div className="greeting">
        <h2>{alertMessage}</h2>
        {alertMessageDesc}
      </div>
    );
  }
}
