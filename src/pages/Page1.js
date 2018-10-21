import React, { Component } from 'react';

class Page1 extends Component {
    constructor(props){
        super(props);
        console.log("@ 1page: Constructor");
    }
    
    componentWillMount(){
        console.log("@ 1page: Will Mount");
    }
    
    componentDidMount(){
        console.log("@ 1page: DID Mount");
    }

    componentWillReceiveProps(){
        console.log("@ 1page: Will Recieve Props");
    }
    
    componentWillUpdate(){
        console.log("@ 1page: Will Update");
    }

    componentDidUpdate(){
        console.log("@ 1page: DID Update");
    }

    componentWillUnmount(){
        console.log("@ 1page: will UN-Mount");
    }
    
    render() {
        console.log("@ 1page: RENDER");
        return (
            <div className="">
                <h1>1page Page</h1>
            </div>
        )
    }
}

export default Page1;