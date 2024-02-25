import React from 'react';
import Number from './Number';

class Counter extends React.Component{
    constructor(props){
        super(props){
            this.state = {count:0};
        }
        onclick(e){
            this.setState(prevState => ({
                count: prevState.count + 1
            }));
        }
        render();{
            return(
                <div>
                    <Number number={this.state.count} />
                    <button onClick={this.onClick.bind(this)}>Count</button>
                </div>
            )
        }
    }
}

export default Counter;