
import React from "react";

// Higher-Order Component (HOC) definition
const higherOrderComponent = (Component) => {
    return class HOC extends React.Component {
        state = {
            name: "John"
        };

        render() {
            return <Component {...this.props} name={this.state.name} />;
        }
    };
};

// AvatarComponent that displays name and description
const AvatarComponent = (props) => {
    return (
        <div className="flex items-center justify-between">
            <div className="rounded-full bg-red-500 p-4">
                {props.name}
            </div>
            <div>
                <p>I am {props.description}.</p>
            </div>
        </div>
    );
};

// Applying HOC to AvatarComponent
const SampleHoc = higherOrderComponent(AvatarComponent);

// Main component that renders SampleHoc
const Result = (props) => {
    return (
        <div>
            <SampleHoc description="this and this" />
        </div>
    );
};

export default Result;
