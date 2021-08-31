module.exports = {
  presets: [
    // 注意presets的加载顺序是倒叙的。
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3',
        targets: {
          browsers: ['> 1%', 'last 2 versions'],
          node: true,
        },
      },
    ],
  ],
};
