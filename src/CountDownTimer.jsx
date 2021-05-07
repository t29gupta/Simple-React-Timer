import React, { Component } from 'react'
import underConstruction from './underConstruction.jpg'

export default class CountDownTimer extends Component {
    
    constructor(props){
        super(props)

        this.state={
            targetTime:null,
            difference:{
                
            },
        }
    }

componentDidMount(){
    this.setState({
        targetTime:new Date('May 17, 2021 00:00:00')
    })

    setInterval(() => {
        this.countDown()
    }, 1000);

}

componentWillUnmount(){
    clearInterval(this.countDown())
}

countDown=()=>{
    const now=new Date();

    const sec=1000;
    const min=sec * 60;
    const hour=min * 60;
    const day=hour * 24;

    const diff=this.state.targetTime-now;
    
    this.setState({
        difference:{
            day:Math.floor(diff/day),
            hour:Math.floor((diff%day)/hour),
            minute:Math.floor((diff%hour)/min),
            second:Math.floor((diff%min)/sec)
        }
    })
}
    
    render() {

        return (
            <>
            <div className='coming-soon' >
                <div>
                    <h2>This is a demo timer</h2>
                    <div className="countdown">
                        {this.TimeComponent('day','Days')}
                        {this.TimeComponent('hour','Hours')}
                        {this.TimeComponent('minute','Minutes')}
                        {this.TimeComponent('second','Seconds')}
                    </div>
                </div>
            </div>
            <img className='waiting' src={underConstruction} alt="" />
            </>
        )
    }

    TimeComponent(propName, propText) {
        return <div className="container">
            <h3 className='day'>{this.state.difference[propName]}</h3>
            <h3>{propText}</h3>
        </div>
    }
}
