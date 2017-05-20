# serverless-webpack-boilerplate
A boilerplate for fast FaaS development using serverless-webpack

[Serverless](https://serverless.com/) + Webpack + ES6(stage-0) + Jest

Uses [awilix](https://github.com/jeffijoe/awilix) for DI



```bash
$ npm i         
$ npm run serve # Run endpoints locally
$ npm run pack  # Pack bundle into .webpack folder
$ npm run test  # Run jest tests
$ npm run build # Test and build package to .webpack folder
```


# TODO
- Yeoman scaffolding for new functions
- Allow to decide whether to seperate bundles for multiple entry points
- Add code coverage

# Notes and caveats: 
> The boilerplate uses eslint-babel.   
If you install eslint globally, be sure to install the eslint-babel plugin as well
> 
