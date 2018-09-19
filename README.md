### touch-events

    "lint-staged": {
        "core/*.js": [         # lint监听的变更文件
        "prettier --write",  # 自动格式化所有代码
        "eslint -- fix",     # lint并自动修改不符合规范的代码
        "git add"            # 将所有的修改添加进暂存池
        ]
    },

  ### 目录结构

        mt-events
        ├── core                   # 源代码文件夹
        │   ├── event.js           # 自定义事件处理句柄生成器，包含长按，双击，滑动，拖拽事件
        │   ├── index.js           # mtEvents 类以及绑定，移除事件方法
        │   ├── proxy.js           # 事件代理 Proxy 生成器
        │   ├── touch.js           # 模拟浏览器原生 touch 事件，供test使用，未对外发布
        │   ├── weakmap.js         # 建立用户定义回调与事件绑定元素的弱引用，预防内存泄漏
        ├── dist
        │   ├── mtevents.min.js    # mt-events 工具库最终生成的 JS 上线压缩文件
        ├── docs                   
        │   ├── developer          # 为开发者提供的mt-events开发文档，使用命令`$npm run docs`即可生成
        │   ├── user               # 为用户提供的mt-events的中英文使用文档
        ├── lib                    # 上线待构建代码临时文件夹
        │   ├── event.js           
        │   ├── index-Browser.js   # 上线压缩JS源文件
        │   ├── index-npm.js       # npm package入口文件
        │   ├── proxy.js                    
        │   ├── weakmap.js                  
        ├── test
        │   ├── coverage           # 测试覆盖率参考文件
        │   ├── index.js           # 测试用例
        ├── .travis.yml            # Travis-ci配置文件
        ├── jest.config.js         # Jest 配置文件
        ├── package.json           
        ├── rollup.config.js       # rollup 配置文件
        ├── webpack.config.js      # webpack配置文件