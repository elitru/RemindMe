import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LoaderProps from './../../props/LoaderProps';
import LoaderState from './../../states/LoaderState';

export default class Loader extends Component<LoaderProps, LoaderState>{
    constructor(props: any){
        super(props);
        this.state = LoaderState.fromBaseState(props.baseState, props.isVisible);

        //bind functions
        this.setVisibility = this.setVisibility.bind(this);
        this.isVisible = this.isVisible.bind(this);
    }

    public setVisibility(isVisible: boolean): void{
        const state: LoaderState = this.state;
        state.isVisible = isVisible;
        this.setState(state);
    }

    public isVisible(): boolean{
        return this.state.isVisible;
    }

    render(){
        return this.state.isVisible ? this.loader() : null;
    }

    loader(){
        return (
            <>
                <View style={this.state.style.loaderContainer}>
                    <Text>Loading</Text>
                </View>
            </>
        );
    }
}