import React, { Component } from 'react';
import './refactor.scss';

class Human extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="radius bg-indigo-500 pt-4">
                <div className="container mx-auto">
                    <div className="flex justify-between">
                        <div className="text-pink-200 font-black">Human<strong className="text-white">Engine</strong></div>
                        <div className="flex">
                            <div className="flex items-center ml-2 cursor-pointer text-sm text-white tracking-wide hover:text-grey-300">
                                <span className="text-sm mr-1">Products</span>
                                <div>
                                    <i className="fas fa-chevron-down fa-xs"></i>
                                </div>
                            </div>
                            <div className="flex items-center ml-8 cursor-pointer text-sm text-white tracking-wide hover:text-grey-light">
                                <span className="text-sm mr-1">About</span>
                                <div>
                                    <i className="fas fa-chevron-down fa-xs"></i>
                                </div>
                            </div>
                        </div>
                        <div>Login</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Human;