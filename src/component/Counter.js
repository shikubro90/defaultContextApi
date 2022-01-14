import React from "react";

export default class Content extends React.Component{
    state = {
        count : 0,
    }

    incressCounter=()=>{
        this.setState((prevState)=>{
            return {count : prevState.count +1}
        })
    } 

    render(){

        const {count} = this.state
        const {children} = this.props;

        return children(count,this.incressCounter)
    }

}