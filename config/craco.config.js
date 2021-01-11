// 添加 antd 相关webpack配置
const CracoAntDesignPlugin = require('craco-antd');
// 替换moment为dayjs
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: {
                    '@primary-color': '#1DA57A',
                    '@link-color': '#1DA57A'
                }
            }
        },
        {
            plugin: AntdDayjsWebpackPlugin
        }
    ]
};
