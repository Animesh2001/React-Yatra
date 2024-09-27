const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    // whenever we bundle our application the output will be present or have a path inside /dist folder.
    //inside dist folder we will have our application.
    //after production build created , that production build will go inside build dist folder.
    //whenever we will create any build at that time this /dist folder will get created automatically.
    path: path.join(__dirname, "/dist"), // the bundle output path

    //and the output file name will be called as bundle.js
    filename: "bundle.js", // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
     //we want to import whatever present inside index.html inside web-pack 
     // so we will say import content from src/index.html
      template: "src/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {
    //we will run our application in this port.
    port: 3000, // you can change the port
  },
  module: {
    rules: [
      {
        //we have different types of loader , to parse different types of file.
        //it says inside whole application except node_modules, whenever you encounter js or jsx
        //use babel loader to transpile this code
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        //whenever encounter , css scss sass , use this loaders to do transpile.
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        //when you have images and font , use url loader.
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        //there is no limit in the size, of the image you will upload.
        options: { limit: false },
      },
    ],
  },
};