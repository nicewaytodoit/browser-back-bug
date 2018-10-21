import React, { Component } from 'react';

class Page4 extends Component {
    constructor(props){
        super(props);
        console.log("@ 4page: Constructor");
    }
    
    componentWillMount(){
        console.log("@ 4page: Will Mount");
    }
    
    componentDidMount(){
        console.log("@ 4page: DID Mount");
    }

    componentWillReceiveProps(){
        console.log("@ 4page: Will Recieve Props");
    }
    
    componentWillUpdate(){
        console.log("@ 4page: Will Update");
    }

    componentDidUpdate(){
        console.log("@ 4page: DID Update");
    }

    componentWillUnmount(){
        console.log("@ 4page: will UN-Mount");
    }
    
    render() {
        console.log("@ 4page: RENDER");
        return (
            <div className="">
                <h1>4page Body</h1>
            </div>
        )
    }
}

export default Page4;