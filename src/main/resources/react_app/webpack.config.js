const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Импортируем плагин
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Импортируем плагин
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); // Импортируем плагин

let mode = process.env.NODE_ENV === 'production' ? 'production': 'development'; // По умолчанию режим development
// Режим production, если при запуске вебпака было указано --mode=production
let target = process.env.NODE_ENV === 'production' ? 'browserslist': 'web'; // в режиме разработки browserslist не используется

const plugins = [
    new HtmlWebpackPlugin({
        template: '../static/index.html', // Данный html будет использован как шаблон
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css', // Формат имени файла
    }), // Добавляем в список плагинов
]; // Создаем массив плагинов

if (process.env.SERVE) { // Используем плагин только если запускаем devServer
    plugins.push(new ReactRefreshWebpackPlugin());
} // Данный код должен быть размещен после объявления массива plugins

module.exports = {
    mode, // Сокращенная запись mode: mode в ES6+
    plugins, // Сокращенная запись plugins: plugins в ES6+
    target, // Сокращенная запись target: target в ES6+,
    entry: './src/index.js',// Указываем точку входа - главный модуль приложения, в который импортируются все остальные
    output: {
        path: path.join(__dirname, "../static"), // Директория, в которой будет
        // размещаться итоговый бандл, папка dist в корне приложения
        clean: true, // Очищает директорию dist перед обновлением бандла
        // Свойство стало доступно с версии 5.20.0, до этого использовался
        // CleanWebpackPlugin
        assetModuleFilename: 'assets/[hash][ext][query]', // Все ассеты будут складываться в dist/assets
    },
    devtool: 'source-map', //  нумерация строк и названия функций и переменных в инструментах разработчика отображаются как в исходном коде.

    devServer: {
        hot: true, // Включает автоматическую перезагрузку страницы при изменениях
    },
    module: {
        rules: [
            { test: /\.(html)$/, use: ['html-loader'] }, // Добавляем загрузчик для html
            {
                test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }, // Добавляем загрузчики стилей
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: mode === 'production' ? 'asset' : 'asset/resource', // В продакшен режиме
                // изображения размером до 8кб будут инлайнится в код
                // В режиме разработки все изображения будут помещаться в dist/assets
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // не обрабатываем файлы из node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true, // Использование кэша для избежания рекомпиляции
                        // при каждом запуске
                    },
                },
            },
            {
                test: /\.jsx?$/, // обновляем регулярное выражение для поддержки jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
        ],
    }
}