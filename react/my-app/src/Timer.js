import React from 'react';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state ={
            seconds:0
        };
    }
    componentDidMount(){
        this.intervalId = setInterval(() => {
            this.setState(prevState => ({
                seconds: prevState + 1
            }));
        })
    }
}

export default Timer;