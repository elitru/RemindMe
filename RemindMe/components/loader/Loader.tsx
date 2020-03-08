import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
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

    /**
     * @description change the current state of the loader (visible, hidden)
     */
    public setVisibility(isVisible: boolean): void{
        const state: LoaderState = this.state;
        state.isVisible = isVisible;
        this.setState(state);
    }

    /**
     * @description returns the current state of the loader
     */
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
                    <Image style={this.state.style.loaderGif} source={require('./../../assets/images/loader.gif')} />
                </View>
            </>
        );
    }
}