import React from "react";
import RandomColorGen from "./RandomColorGen";

const withRouter = (WrapperComponent) => props => {
    const params = RandomColorGen()
    return (
        <WrapperComponent params={params} {...props} />
    )
}

export default withRouter;