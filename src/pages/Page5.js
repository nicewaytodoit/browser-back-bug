import React, { Component } from 'react';

class Page5 extends Component {
    constructor(props) {
        super(props);
        console.log("@ 5page: Constructor");
    }

    componentWillMount() {
        console.log("@ 5page: Will Mount");
    }

    componentDidMount() {
        console.log("@ 5page: DID Mount");
    }

    componentWillReceiveProps() {
        console.log("@ 5page: Will Recieve Props");
    }

    componentWillUpdate() {
        console.log("@ 5page: Will Update");
    }

    componentDidUpdate() {
        console.log("@ 5page: DID Update");
    }

    componentWillUnmount() {
        console.log("@ 5page: will UN-Mount");
    }

    render() {
        console.log("@ 5page: RENDER");
        return (
            <div className="">
                <h1>5page Body</h1>
            </div>
        )
    }
}

export default Page5;