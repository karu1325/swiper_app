const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery', //ここまででｊQueryを使用できるように
    Swiper: 'swiper/swiper-bundle' //yarnを導入
  })
)

module.exports = environment
