const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = async ({ config, mode }) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
        test: /\.(css|scss)$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    importLoaders: 2,
                    sourceMap: true,
                },
            },
            {
                loader: "sass-loader",
                options: {
                    sourceMap: true,
                },
            },
        ],
        include: path.resolve(__dirname, "../ui"),
        sideEffects: true,
    });
    config.module.rules.push({
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
    });
    config.resolve.alias["fonts"] = path.resolve(__dirname, "../ui/fonts");
    config.resolve.alias["@newtonschool/grauity"] = path.resolve(
        __dirname,
        "../ui"
    );
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        })
    );

    // Return the altered config
    return config;
};
