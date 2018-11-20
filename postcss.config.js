module.exports = {
    plugins : [
      require('postcss-cssnext')({
        features : {
          autoprefixer :{
            grid : true
          }
        },
        customProperties : true
      }),
      require('cssnano')
    ]
  }
