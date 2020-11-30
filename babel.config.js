//获取VUE_APP_ENV,生产环境移除console
const IS_PROD = ['production'].includes(process.env.VUE_APP_ENV)
const plugins = [
  [
    'import',
    {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    },
    'vant'
  ]
]
if (IS_PROD) plugins.push('transform-remove-console')
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins
}
