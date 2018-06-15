import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
    render() {
        return (<html>
            <Head>
                <title>CRUD Reactjs Redux</title>
                <link rel="stylesheet" href="/_next/static/style.css"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous"/>
                <meta name="viewport"
                    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
            </Head>
            <body className="font-sans bg-grey-lighter">
                <Main/>
                <NextScript/>
            </body>
        </html>
        );
    }
}