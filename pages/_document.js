import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link href="/skeletor/skeletor.css" rel="stylesheet" />
          <link href="/typebeast/typebeast.css" rel="stylesheet" />
        </Head>
        <body className="antialias ff-body">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
