import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="bg-blue-dark">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center sm:justify-between py-4">
                            <div className="w-1/4 sm:hidden">
                                <i className="fas fa-bars fa-lg text-white center"></i>
                            </div>
                            <div className="w-1/2 sm:w-auto text-center text-white text-2xl font-medium">
                            Terrace Ag Test
                            </div>
                            <div className="w-1/4 sm:w-auto sm:flex text-right">
                                <div>
                                    <img className="inline-block h-8 w-8 rounded-full" src="https://avatars2.githubusercontent.com/u/4414294?s=400&v=4" alt=""/>
                                </div>
                                <div className="hidden sm:block sm:flex sm:items-center ml-2">
                                    <span className="text-white text-sm mr-1">Max Kalin</span>
                                    <div>
                                        <i className="fas fa-chevron-down fa-xs text-white block opacity-50"></i>
                                    </div>
                                </div>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
