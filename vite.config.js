import {defineConfig} from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    // base: "/lovelive-vite/",//github 仓库名
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "/src"),
        },
    },
    build: {
        // outDir: "wwwroot", //指定输出路径
        // assetsDir: "assets", // 指定生成静态资源的存放路径
        // minify: "terser", // 混淆器，terser构建后文件体积更小
    },

    server: {
        // https: true,
        port: 80,
        // cors: true, // 默认启用并允许任何源
        // open: false, // 在服务器启动时自动在浏览器中打开应用程序
        //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
        proxy: {
            '/api': {
                target: 'http://localhost',   //代理接口
                // target: 'https://mabeiping.com:8080',   //代理接口
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, "")
            }
        }
    },

    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        })
    ]
});
