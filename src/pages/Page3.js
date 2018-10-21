import React, { Component } from 'react';

class Page3 extends Component {
    constructor(props){
        super(props);
        console.log("@ 3page: Constructor");
    }
    
    componentWillMount(){
        console.log("@ 3page: Will Mount");
    }
    
    componentDidMount(){
        console.log("@ 3page: DID Mount");
    }

   componentWillReceiveProps(){
        console.log("@ 3page: Will Recieve Props");
    }
    
    componentWillUpdate(){
        console.log("@ 3page: Will Update");
    }

    componentDidUpdate(){
        console.log("@ 3page: DID Update");
    }

    componentWillUnmount(){
        console.log("@ 3page: will UN-Mount");
    }
    
    render() {
        console.log("@ 3page: RENDER");
        return (
            <div className="">
                <h1>3page Body</h1>
            </div>
        )
    }
}

export default Page3;