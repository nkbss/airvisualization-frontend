import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
            integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
            crossOrigin="anonymous"
          />

          {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          /> */}
          <style>
            {`
              html { overflow: auto }
              // body {padding-top: 100px}
            `}
          </style>
          <script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js" />
          <script src="//cdnjs.cloudflare.com/ajax/libs/topojson/1.6.9/topojson.min.js" />
          <script src="node_modules/datamaps/dist/datamaps.world.min.js" />
          <script src="https://d3js.org/d3.v5.js"></script>
        </Head>
        <body>
          {/* <script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js" />
          <script src="//cdnjs.cloudflare.com/ajax/libs/topojson/1.6.9/topojson.min.js" />
          <script src="node_modules/datamaps/dist/datamaps.world.min.js" /> */}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
