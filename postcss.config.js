module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 192, // 设计稿的宽度%10
      propList: ['*'], // 转换所有属性
      minPixelValue: 2 // 最小的转换数值，如果为1的话会把1px也转换掉
    }
  }
}

// module.exports = {
//   "plugins": {
//     "autoprefixer": {},
//     'postcss-pxtorem': {
//       rootValue: 75, // 75表示750设计稿，37.5表示375设计稿
//       propList: ['*']//（数组）可以从 px 更改为 rem 的属性  使用通配符*启用所有属性。例子：['*']
//     }
//   }
// }
