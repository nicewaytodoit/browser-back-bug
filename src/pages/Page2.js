import React, { Component } from 'react';

class Page2 extends Component {
    constructor(props){
        super(props);
        console.log("@ 2page: Constructor");
    }
    
    componentWillMount(){
        console.log("@ 2page: Will Mount");
    }
    
    componentDidMount(){
        console.log("@ 2page: DID Mount");
    }

    componentWillReceiveProps(){
        console.log("@ 2page: Will Recieve Props");
    }
    
    componentWillUpdate(){
        console.log("@ 2page: Will Update");
    }

    componentDidUpdate(){
        console.log("@ 2page: DID Update");
    }

    componentWillUnmount(){
        console.log("@ 2page: will UN-Mount");
    }
    
    render() {
        console.log("@ 2page: RENDER");
        return (
            <div className="">
                <h1>2page Body</h1>
            </div>
        )
    }
}

export default Page2;