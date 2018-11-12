module.exports = {
  require : {
    plugins : [
      require('postcss-cssnext')({
        features : {
          autoprefixer :{
            grid : true
          }
        },
        customProperties : true
      })
    ]
  }
}