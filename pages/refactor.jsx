import '../scss/style.scss';

import React, { Component } from 'react';
// import Layout from '../components/Layout';
import './refactor.scss';

class Refactor extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div className="mb-8 background-app">
                    <div className="container mx-auto px-6 py-24">
                        <div className="mb-6">
                            <svg className="block w-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 60"><defs><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#3DACEC"></stop><stop offset="100%" stopColor="#5A77F3"></stop></linearGradient></defs><g fill="none" fillRule="evenodd"><path fill="url(#a)" fillRule="nonzero" d="M159.18 49.47c.77-.95 1.37-2.07 1.8-3.34a26.5 26.5 0 1 0-4.45-23.46h-3.63a30.01 30.01 0 1 1 6.28 26.8z"></path><path fill="#FFFFFF" d="M10.06 32.22l6.79 9.28H12.3l-6.2-8.8H4.02v8.8H.24V19.68h6.6c5.85 0 7.93 3.2 7.93 6.56 0 3.1-2.15 5.34-4.7 5.98zm.8-5.89c0-2.2-1.34-3.49-3.77-3.49H4.02v6.88h3.1c2.4 0 3.74-1.44 3.74-3.39zm13.58-.67c5.28.03 7.71 4.13 7.71 8.03 0 .32 0 .74-.06 1.06H20.25c0 2.4 2.11 4.48 4.57 4.48 1.57 0 2.63-.64 3.43-1.73h3.68a7.37 7.37 0 0 1-7.1 4.54c-4.71 0-8.17-3.45-8.17-8.35 0-4.32 2.95-8.03 7.78-8.03zm0 2.69a4.1 4.1 0 0 0-4.16 3.8h8.29a4.13 4.13 0 0 0-4.13-3.8zm8.9.83v-3h2.18v-2.54c0-3.45 1.82-5.34 5.22-5.34.86 0 1.7.1 2.33.29v2.94a6.46 6.46 0 0 0-1.73-.25c-1.6 0-2.24.96-2.24 2.43v2.46h3.43v3.01H39.1V41.5h-3.58V29.18h-2.18zm25.77-3V41.5h-3.49v-1.95h-.1a6.48 6.48 0 0 1-5.24 2.5c-3.46 0-7.36-2.76-7.36-8.23 0-4.86 3.46-8.13 7.62-8.13 2.56 0 4.1 1.35 5.02 2.56h.06v-2.08h3.5zM46.6 33.81c0 2.56 1.47 5.09 4.64 5.09 2.37 0 4.54-2.05 4.54-5 0-3.1-2.01-5.15-4.5-5.15-3.18 0-4.68 2.56-4.68 5.06zm23.2-8.16c4.4 0 6.6 2.88 7.08 5.12H73.2c-.48-1.22-1.63-2.08-3.42-2.08-2.6 0-4.45 1.89-4.45 5.12 0 2.91 1.79 5.15 4.57 5.15 1.99 0 3.01-1.12 3.52-2.3h3.72a7.17 7.17 0 0 1-7.3 5.37c-4.6 0-8.2-3.3-8.2-8.25 0-4.48 3.14-8.13 8.17-8.13zm8.05 3.52v-3h1.92v-4.9h3.58v4.9h3.81v3h-3.8v6.85c0 2.08.63 2.65 2.1 2.65.61 0 1.32-.12 1.86-.25v2.91c-.8.22-1.82.35-2.72.35-3.8 0-4.83-2.3-4.83-5.44v-7.07h-1.92zm10.34 4.64a7.96 7.96 0 0 1 8.2-8.16c4.8 0 8.19 3.52 8.19 8.16a8.07 8.07 0 0 1-8.2 8.22 8.06 8.06 0 0 1-8.19-8.22zm3.65 0c0 2.94 2.08 5.02 4.54 5.02 2.72 0 4.58-2.17 4.58-5.02 0-2.72-1.73-5-4.58-5-2.75 0-4.54 2.15-4.54 5zm24.52-8.03v3.33c-.45-.07-1-.16-1.8-.16-2.42 0-3.86 1.6-3.86 4.8v7.74h-3.59V26.17h3.52v2.18h.1a4.98 4.98 0 0 1 4.29-2.66c.57 0 .96.03 1.34.1zm1.96 15.71V26.17h3.58V41.5h-3.58zm-.2-18.72v-3.65h3.98v3.65h-3.97zm7.34 18.72V26.17h3.56v1.92h.06a5.59 5.59 0 0 1 4.67-2.43c3.17 0 5.95 2.08 5.95 7v8.84h-3.58v-8.64c0-2.62-1.25-4.03-3.3-4.03-2.24 0-3.77 1.57-3.77 4.54v8.13h-3.59zm32.78-15.33v14.85c0 5.63-2.56 8.7-8.1 8.7-4.28 0-7.04-2.36-7.64-6.01h3.58c.42 1.7 1.63 3.04 4.22 3.04 2.95 0 4.52-1.89 4.52-5.28v-1.92h-.07a6.68 6.68 0 0 1-5.21 2.37c-4.04 0-7.5-3.14-7.5-8.13 0-4.67 3.24-8.1 7.62-8.1 2.63 0 4.2 1.35 5.06 2.47h.1v-1.99h3.42zM145.7 33.8c0 2.46 1.5 4.99 4.6 4.99 2.5 0 4.58-2.02 4.58-4.93 0-3.07-1.98-5.09-4.51-5.09-3.1 0-4.67 2.56-4.67 5.03zm31.53 8.41c-4.32 0-8.19-2.43-8.19-9.37V19.68h3.78v13.5c0 3.49 1.63 5.76 4.41 5.76 3.23 0 4.39-2.46 4.39-5.76v-13.5h3.74v13.08c0 6.85-3.52 9.44-8.13 9.44zm11.72-.7V19.68h3.78V41.5h-3.78z"></path></g></svg>
                        </div>
                        <div className="mb-12">
                            <h1 className="font-display font-semibold text-white text-6xl mb-4">Tired of replying on Bootstrap</h1>
                            <p className="text-2xl text-blue-light leading-normal">
                                <strong className="text-white font-bold">Learn how </strong>to design awesome UIs by yourself 
                                <strong className="text-white font-bold"> using</strong> specific tactics <br/>
                                explained from a developer's point-of-view.
                            </p>
                        </div>
                        <form className="flex rounded">
                            <input className="text-lg w-64 bg-white rounded-l px-6 py-3" placeholder="Enter your email"/>
                            <button className="bg-indigo hover:bg-indigo-light rounded-r uppercase text-white font-bold tracking-wide px-6 py-3">Subscribe</button>
                        </form>
                    </div>      
                </div>
                <div className="container mx-auto px-6 py-10">
                    <div>
                        <div className="flex justify-between items-baseline border-b-2 border-grey-light mb-10">
                            <span className="font-display font-bold tracking-wide uppercase p-4 border-b-2 border-indigo -mb-2px">Design Tips</span>
                            <a href="#" className="font-semibold text-indigo-dark hover:underline no-underline">View All</a>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-1/3 px-3 flex flex-col">
                                <div className="bg-white rounded-lg shadow flex-1 flex flex-col  overflow-hidden">
                                    <div className="tip-labels h-48 bg-cover"></div>
                                    <div className="p-6 flex-1 flex flex-col justify-between">
                                        <h3 className="mb-4">Think Outside the Database</h3>
                                        <div>
                                            <a href="#" className="no-underline inline-flex items-center">
                                                <span className="text-grey-dark text-sm mr-2" href="#">twitter.com</span>
                                                <i className="text-grey-dark fas fa-share-square h-4 w-4 "></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 px-3 flex flex-col">
                                <div className="bg-white rounded-lg shadow flex-1 flex flex-col  overflow-hidden">
                                    <div className="tip-borders h-48 bg-cover"></div>
                                    <div className="p-6 flex-1 flex  flex-col justify-between">
                                        <h3 className="mb-4">User Fewer Borders</h3>
                                        <div>
                                            <a href="#" className="no-underline inline-flex items-center">
                                                <span className="text-grey-dark text-sm mr-2" href="#">twitter.com</span>
                                                <i className="text-grey-dark fas fa-share-square h-4 w-4 "></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 px-3 flex flex-col">
                                <div className="bg-white rounded-lg shadow flex-1 flex flex-col  overflow-hidden">
                                    <div className="tip-overlap h-48 bg-cover"></div>
                                    <div className="p-6 flex-1 flex  flex-col justify-between">
                                        <h3 className="mb-4">Overlap Images to Add Depth</h3>
                                        <div>
                                            <a href="#" className="no-underline inline-flex items-center">
                                                <span className="text-grey-dark text-sm mr-2" href="#">twitter.com</span>
                                                <i className="text-grey-dark fas fa-share-square h-4 w-4 "></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .tip-labels {
                        background-image: url('https://res.cloudinary.com/dchiba2d6/image/upload/q_auto/v1527180130/refactoring-ui/tip-labels.png')
                    }
                    .tip-borders {
                        background-image: url('https://res.cloudinary.com/dchiba2d6/image/upload/q_auto/v1527180130/refactoring-ui/tip-borders.png')
                    }
                    .tip-overlap {
                        background-image: url('https://res.cloudinary.com/dchiba2d6/image/upload/q_auto/v1527180130/refactoring-ui/tip-overlap.png')
                    }
                `
                }
                </style>
            </div>
            
        );
    }
}

export default Refactor;