import React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';
import { Container } from './helper/container.js';
import styled, { css } from 'styled-components';
import AlgoInfo from './helper/algoInfo.js';
import { InsertionSortDesc } from './helper/insertionDesc.js';
class InsertionMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            currentIndex: null,
            comparingIndex: null,
            sorted: null
        }
    }
    componentDidMount() {
        var randomArray = Array.from({ length: 6 }, () => Math.floor(Math.random() * 300));
        console.log(randomArray);
        this.setState({ arr: randomArray }, () => {
            console.log(this.state.arr);
        })
    }
    timer(ms) {
        return new Promise(res => setTimeout(res, ms));
    }
    selectionSort = async () => {
        const n = this.state.arr.length;
        const arr = this.state.arr;
        this.setState({ sorted: 1 });
        await this.timer(200);
        for (var i = 1; i < n; i++) {

            this.setState({ currentIndex: i});
            await this.timer(1000);
            this.setState({ comparingIndex: i - 1 });
            await this.timer(1000);
            let current = arr[i];
            var j = i - 1;
            while (j > -1 && current < arr[j]) {
                this.setState({ comparingIndex: j });
                await this.timer(1000);
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                var tmp = this.state.comparingIndex;
                this.setState({ arr: arr });
                this.setState({ comparingIndex: this.state.currentIndex });
                this.setState({ currentIndex: tmp });
                await this.timer(1000);
                j--;
            }
            this.setState({ comparingIndex: j });
            await this.timer(1000);
            arr[j + 1] = current;
            this.setState({ arr: arr });
            this.setState({currentIndex: null});
            this.setState({ comparingIndex: null })
            this.setState({ sorted: i+1 });
            await this.timer(1000);
        }
        this.setState({ sorted: n });
        this.setState({ currentIndex: null });
        this.setState({ comparingIndex: null });
 
    }
    render() {
        const Bars = styled.div`
        display:flex;
        width:${(props) => props.width};
        height:${(props) => props.height};
        background: ${(props) => {
           
                
                    if (props.active || props.swap) {
                        return "red";
                    }
                    else if (props.comparing) {
                        return "blue";
                    }
                    else if (props.sorted) {
                        return "green";
                    }
                    else {
                        return "grey";
                    }
           
            }};
        margin-right:2px;
        align-content:center;
        justify-content:center;
        align-items:center;
        text-align:center;
        transform:translateY(${(props) => {
            if (props.active) {
                return 120
            }
            else {
                return 0
            }
            }}%);
        color:white;

`;
        const list = this.state.arr.map((size, i) => {
            return (
                <Bars height={`${size}px`} width={`${50 / this.state.arr.length}%`} active={this.state.currentIndex === i} swap={this.state.swapIndex === i} comparing={this.state.comparingIndex === i} sorted={i<this.state.sorted} key={i}>
                    <p>{size}</p>
                </Bars>
            );
        }); 
        return (
            <div className="container">
             
                <div>
                    <Button onClick={() => this.selectionSort()}>Selection Sort</Button>
                    <Container className="col-md-8 col-sm-12">
                        {list}
                    </Container>
                </div>
                
               
            </div>
            )
    }
}
export default InsertionMain;