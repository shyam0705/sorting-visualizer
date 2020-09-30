import React, { Component } from 'react';
import { Container } from './helper/container.js';
import styled, { css } from 'styled-components';
import { Button, Jumbotron } from 'reactstrap';
import { say } from './helper/speech.js';
import AlgoInfo from './helper/algoInfo.js';
import { SelectionSortDesc }    from './helper/selectionDesc.js';
function Display({ comparingText, swapText, currentMin }) {
    return (
        <Jumbotron style={{ height: "500px"}}>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Algorithm</h1>
                        <hr></hr>
                      
                        <p>{comparingText}</p>
                        <p>{swapText}</p>
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}
class SelectionMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[],
            minIndex: null,
            comparingIndex: null,
            swapIndex: null,
            sorted: null,
            comparingText: "",
            swapText:""
        }
    }
    componentDidMount() {
        var randomArray = Array.from({ length: 6 }, () => Math.floor(Math.random() * 500));
        console.log(randomArray);
        this.setState({ arr: randomArray }, () => {
            console.log(this.state.arr);
        })
    }
    timer(ms) {
        return new Promise(res => setTimeout(res, ms));
    }
    selectionOnclick = async () => {
        let speak = (text) => say(text);
        const arr = this.state.arr;
        const n = arr.length;
        for (var i = 0; i < n - 1; i++) {
            await this.timer(1000);
            this.setState({ minIndex: i });
            speak(`setting ${arr[i]} as current min element,we will compare it with remaining element`);
            await this.timer(6000);
            var min = i;
            for (var j = i + 1; j < n; j++) {
                this.setState({ comparingIndex: j });
                this.setState({ comparingText:`comparing ${arr[j]} with ${arr[min]}`})
                await this.timer(1000);
                if (arr[j] < arr[min]) {
                    
                    this.setState({ swapText: `${arr[j]} is smaller than current min so we will update current min to ${arr[j]}` })
                    speak(`${arr[j]} smaller than current min so we will update current min`);
                    this.setState({ minIndex: j });
                    await this.timer(5000);
                    min = j;
                }
                this.setState({ comparingText: "" });
                this.setState({ swapText: "" });
            }
            this.setState({ comparingIndex: null });
            this.setState({ comparingText: "" });
            this.setState({ swapText: "" });
            if (min != i) {
                this.setState({ swapIndex: i });
               await this.timer(1000);
                var tmp = arr[min];
                arr[min] = arr[i];
                arr[i] = tmp;
                this.setState({ arr: arr });
                this.timer(1000);
            }
            this.setState({ swapIndex: null });
            this.setState({ minIndex: null });
            this.setState({ sorted: i + 1 });
            this.timer(1000);
        }
        this.setState({ sorted: i + 1 });
        this.setState({ minIndex: null });
        this.setState({ comparingtext: "List is sorted" });
    }
    render() {
        const Bars = styled.div`
        display:flex;
        width:${(props) => props.width};
        height:${(props) => props.height};
        background: ${(props) => {
                if (props.sorted) {
                    return "green";
                }
                else {
                    if (props.active || props.swap) {
                        return "red";
                    }
                    else if (props.comparing) {
                        return "blue";
                    }
                    else {
                        return "grey";
                    }
                }
            }};
        margin-right:2px;
        align-items:center;
        align-content:center;
        justify-content:center;       
        text-align:center;
        color:white;

`;
        const list = this.state.arr.map((size, i) => {
            return (
                <Bars height={`${size}px`} width={`${50 / this.state.arr.length}%`} active={this.state.minIndex === i} swap={this.state.swapIndex === i} comparing={this.state.comparingIndex === i} sorted={this.state.sorted>i} key={i}>
                    <p>{size}</p>
                </Bars>
            );
        }); 
        return (
            <div className="container">
                <Button onClick={() => this.selectionOnclick()} >Selection sort</Button>
                <div className="row">
                    <Container className="col-md-8 col-sm-12">
                        {list}
                    </Container>
                    <div className="col-md-4 col-sm-12">
                        <Display comparingText={this.state.comparingText} swapText={this.state.swapText} currentMin={this.state.arr[this.state.minIndex]} />
                    </div>
                </div>
                <AlgoInfo algoInfo={SelectionSortDesc} />
            </div>

            )
    }
}
export default SelectionMain;