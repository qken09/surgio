# [1.5.0](https://github.com/geekdada/surgio/compare/v1.4.3...v1.5.0) (2019-11-18)


### Bug Fixes

* 空文件不会返回 404 ([271c398](https://github.com/geekdada/surgio/commit/271c398df29e8e3da2f4f22d6aa2d78aa49f122c))
* 某些情况下 clash 配置没有输出 interval 和 url ([1978429](https://github.com/geekdada/surgio/commit/197842956a96fd35b91afd77cf358c1697ac7097))


### Features

* 增加规则过滤关键词 ([128f648](https://github.com/geekdada/surgio/commit/128f64835ccde09b4b0dda54e4075dc0218fbc10))
* 支持排序类型的过滤器 ([db69447](https://github.com/geekdada/surgio/commit/db694473b1b88e44811971fbc0cd8761d0fcf4e3))
* 支持在输出 external 时解析域名 ([1f78f44](https://github.com/geekdada/surgio/commit/1f78f44dde2949e384184d8fa59f566a45ed2d64))
* nodeFilter 也支持过滤排序 ([6dd7f66](https://github.com/geekdada/surgio/commit/6dd7f665d26ad427f026786d5add8c578084f816))



## [1.4.3](https://github.com/geekdada/surgio/compare/v1.4.2...v1.4.3) (2019-11-15)


### Bug Fixes

* 某些情况下 Provider 中的 customFilters 未生效 ([48f1b32](https://github.com/geekdada/surgio/commit/48f1b321a2c4fbc6859b67a8975f1c9529bfaa20))



## [1.4.2](https://github.com/geekdada/surgio/compare/v1.4.1...v1.4.2) (2019-11-14)


### Features

* 优化远程片段获取的并发请求 ([7552fa0](https://github.com/geekdada/surgio/commit/7552fa05b073871aa6a50472f2386bfa4fa9421d))
* Provider 处理改为并发 ([8bf2738](https://github.com/geekdada/surgio/commit/8bf2738f14f9d30b9bfbf6999fbbdf91a5993469))



## [1.4.1](https://github.com/geekdada/surgio/compare/v1.4.0...v1.4.1) (2019-11-13)


### Bug Fixes

* clash 策略名错误 ([9f2eaac](https://github.com/geekdada/surgio/commit/9f2eaacb851a2b993412ae30be8946a9408df87a))



# [1.4.0](https://github.com/geekdada/surgio/compare/v1.3.5...v1.4.0) (2019-11-13)


### Bug Fixes

* 由于 mellow 对 shadowsocks 支持有限，忽略该类型节点 ([8ae0561](https://github.com/geekdada/surgio/commit/8ae056194b938014eee4c0bebfb38ecf3de7cb10))
* Close [#35](https://github.com/geekdada/surgio/issues/35) ([491b655](https://github.com/geekdada/surgio/commit/491b655bc8061ed120ab119bd5e4ac57859ea095))


### Features

* 可配置 Clash 的 proxy test url ([89b0b92](https://github.com/geekdada/surgio/commit/89b0b926a5ee5011f9b11cfe4d0a0c745c9ca890))
* 增加 mellow 规则处理方法 ([b646199](https://github.com/geekdada/surgio/commit/b646199507d7558bd00daa89f4877501391e2605))
* 支持 Clash 的 'fallback-auto', 'load-balance' 策略 ([18f106f](https://github.com/geekdada/surgio/commit/18f106fee8c94c01bbf8a4a34fadfcd9557fdd2b)), closes [#34](https://github.com/geekdada/surgio/issues/34)
* 支持单独定义某个 artifact 的输出目录 ([bef00c7](https://github.com/geekdada/surgio/commit/bef00c7d9894476c695229a6e96f1d3f47fd91b1))
* 支持导出 Mellow 节点 ([9a72ca2](https://github.com/geekdada/surgio/commit/9a72ca2ac7b9b59ee3c1b61180fd8fe915330ad8))
* 支持在 surgio.conf.js 中定义全局 customFilters ([1701b85](https://github.com/geekdada/surgio/commit/1701b85d68e487b52fb529243d8826ee4b5a99a8))



## [1.3.5](https://github.com/geekdada/surgio/compare/v1.3.4...v1.3.5) (2019-11-08)


### Bug Fixes

* QuantumultX 的兼容性问题 ([dfb5c2e](https://github.com/geekdada/surgio/commit/dfb5c2e7b04df85b24a1ca67bde9136ae8c68b97))



## [1.3.4](https://github.com/geekdada/surgio/compare/v1.3.3...v1.3.4) (2019-11-07)


### Bug Fixes

* vmess method 为 auto 时 qx 会无法识别 ([9adbe77](https://github.com/geekdada/surgio/commit/9adbe776dd1c9743be6878e6610dfb37a0ca4fc5))


### Features

* add snell support for clash output [#33](https://github.com/geekdada/surgio/issues/33) ([8c3df9e](https://github.com/geekdada/surgio/commit/8c3df9e97d9b22258f5aa99c8a89fdc6220b0f78))



## [1.3.3](https://github.com/geekdada/surgio/compare/v1.3.2...v1.3.3) (2019-11-06)


### Bug Fixes

* 没有在 QuantumultX vmess 节点中添加 obfs-host ([2d9ceb5](https://github.com/geekdada/surgio/commit/2d9ceb542eba4a3d7b770e3e46accb792201c28e))


### Features

* 面板增加添加 Clash 的按钮 ([b66e5f3](https://github.com/geekdada/surgio/commit/b66e5f31dae975ccac83742666ea7385a6e023e0))
* check command ([2db635f](https://github.com/geekdada/surgio/commit/2db635ff91cd786daa6852abdd82896ab213f3ab))



## [1.3.2](https://github.com/geekdada/surgio/compare/v1.3.1...v1.3.2) (2019-11-05)


### Features

* youtubePremiumFilter 增加香港 ([821bf3c](https://github.com/geekdada/surgio/commit/821bf3c653767490bf093e0980be091b28f3501d))
* youtubePremiumFilter 增加新加坡 ([7b32873](https://github.com/geekdada/surgio/commit/7b32873ff906156208ae7a03ea8002534a794c57))



## [1.3.1](https://github.com/geekdada/surgio/compare/v1.3.0...v1.3.1) (2019-11-03)


### Bug Fixes

* 没有在 getQuantumultXNodes 中正确输出支持 udp 的 ssr 节点 ([7815b42](https://github.com/geekdada/surgio/commit/7815b42252c6402c0905e2cc7b238635f37fa6e7))



# [1.3.0](https://github.com/geekdada/surgio/compare/v1.3.0-1...v1.3.0) (2019-11-03)


### Bug Fixes

* example ([ec6da29](https://github.com/geekdada/surgio/commit/ec6da29fd71ea54c768866d8c1b1fce4e8ec2087))



# [1.3.0-1](https://github.com/geekdada/surgio/compare/v1.3.0-0...v1.3.0-1) (2019-11-02)


### Bug Fixes

* surge tfo 参数缺失 ([47f4293](https://github.com/geekdada/surgio/commit/47f4293e4a59413b1b6574c58580230a6020defb))



# [1.3.0-0](https://github.com/geekdada/surgio/compare/v1.2.1...v1.3.0-0) (2019-11-02)


### Features

* 节点增加 tfo 参数 ([a820b89](https://github.com/geekdada/surgio/commit/a820b89590ac3379ccf109539000783b0d7b803a))
* 仅支持读取 ws 和 tcp 类型的 vmess 节点 ([de5bb35](https://github.com/geekdada/surgio/commit/de5bb35fcc3b4b4e6bb1bb12a6cc6f53bd6de2c8))
* 新增 getQuantumultXNodes ([d284d04](https://github.com/geekdada/surgio/commit/d284d0415e9524dffebd73d6085d1e11ceef3621))
* udp-relay 的值改为布尔类型，兼容字符串类型 ([f3eaaed](https://github.com/geekdada/surgio/commit/f3eaaed03727de525e12a454a8a966fd923f8d89))



## [1.2.1](https://github.com/geekdada/surgio/compare/v1.2.0...v1.2.1) (2019-11-01)


### Bug Fixes

* 遗漏了一种 clash 的 ss 混淆格式 ([4791328](https://github.com/geekdada/surgio/commit/4791328076b68b01d2b3c64da3738339238c2938))



# [1.2.0](https://github.com/geekdada/surgio/compare/v1.1.1...v1.2.0) (2019-11-01)


### Bug Fixes

* 加国旗正确识别中转节点了 ([3751dbf](https://github.com/geekdada/surgio/commit/3751dbf0f7f0d8619cfa28b2ec2cc8c24c4494a7))
* protoparam 和 obfsparam 中不能有空格 ([6cdb978](https://github.com/geekdada/surgio/commit/6cdb97880913a594115a59d49bfebcf90c555f7f))


### Features

* 不合法 yaml 文件识别 ([1654534](https://github.com/geekdada/surgio/commit/16545347613026a57bac46eb286e52f894384c11))
* 兼容v2rayn 订阅格式 ([8ba4625](https://github.com/geekdada/surgio/commit/8ba4625955bfb068028303a56148ac20e109e6e3))
* 允许用户覆盖 clash 订阅的 udp 转发支持 ([bb58c50](https://github.com/geekdada/surgio/commit/bb58c50aa5334ea9ce1ee4c323aa531dcbb32e79))
* 增加 netflixFilter 规则 ([5cc52f1](https://github.com/geekdada/surgio/commit/5cc52f1c237b9c4fcf2dee56ea3c0caaf82695ad))
* 支持读取 Clash 订阅 ([45ef59f](https://github.com/geekdada/surgio/commit/45ef59f359e21e37f5dac242a33888c74ec1afbc))
* proxyGroupModifier 支持 filter 和 proxies 组合 ([ba0f0c6](https://github.com/geekdada/surgio/commit/ba0f0c6bee8a14490c0124a7ff0773e636fd27e4))



## [1.1.1](https://github.com/geekdada/surgio/compare/v1.1.0...v1.1.1) (2019-10-29)


### Features

* 新增过滤器 discardKeywords ([b9f0ecb](https://github.com/geekdada/surgio/commit/b9f0ecb97366835a71862cd8f032048322266336))
* better error message ([26fcaa3](https://github.com/geekdada/surgio/commit/26fcaa3310046fbd886cff2370a8bf31be96dcca))
* gateway request log ([891168b](https://github.com/geekdada/surgio/commit/891168b6a702a0440b5d0475a25d11345d594f52))
* quick editing from list-artifact ([2d1d605](https://github.com/geekdada/surgio/commit/2d1d605fe5dd36332a8f04476d397cb7a14b6684))



# [1.1.0](https://github.com/geekdada/surgio/compare/v1.0.3...v1.1.0) (2019-10-28)


### Features

* add koa server for gateway ([bc4e9fc](https://github.com/geekdada/surgio/commit/bc4e9fce23b50a3fc970f8afaeb6bf087e077b4e))
* gateway authentication ([48d5371](https://github.com/geekdada/surgio/commit/48d53715a4373fc3fb75439c2902bffcdd7fa960))



## [1.0.3](https://github.com/geekdada/surgio/compare/v1.0.2...v1.0.3) (2019-10-28)


### Bug Fixes

* add new validation schema ([8cfcdb4](https://github.com/geekdada/surgio/commit/8cfcdb4eb055d58c585fe58361a9d26f96bf4bc2))


### Features

* 优化 list-artifact 样式 ([e03f807](https://github.com/geekdada/surgio/commit/e03f807502fb705b0e6d00fe8761f318bb8dc238))



## [1.0.2](https://github.com/geekdada/surgio/compare/v1.0.1...v1.0.2) (2019-10-27)


### Bug Fixes

* user config got contaminated during execution in now.sh ([5c64975](https://github.com/geekdada/surgio/commit/5c649753e86f5e9e155a667b93250d33c5cac3f5))



## [1.0.1](https://github.com/geekdada/surgio/compare/v1.0.0...v1.0.1) (2019-10-27)


### Bug Fixes

* better hot start for now.sh ([8781c56](https://github.com/geekdada/surgio/commit/8781c566603947d9ca7200fc6b20a231b854b574))


### Features

* list-artifact 支持展示 combineProviders ([1526c6b](https://github.com/geekdada/surgio/commit/1526c6ba986b165666edfe215922ba226defff9e))



# [1.0.0](https://github.com/geekdada/surgio/compare/v0.13.2...v1.0.0) (2019-10-27)


### Bug Fixes

* axios stub url ([67c9a99](https://github.com/geekdada/surgio/commit/67c9a992ef640db964f0f71a4da55dd9213cc719))
* import ([1be8ea4](https://github.com/geekdada/surgio/commit/1be8ea40591c8dc24bc535bae4c2ee514cb4cb14))
* schema ([ea7a8c0](https://github.com/geekdada/surgio/commit/ea7a8c070a75dde0700d05f14457fab0ec535324))
* validation ([ec60d1a](https://github.com/geekdada/surgio/commit/ec60d1a0315813b5841829c5a174dec931f2332e))


### Features

* 合并 Provider 接口定义 ([f197e19](https://github.com/geekdada/surgio/commit/f197e198aaf826b91af6896d02046c15976e4962))
* getNodeNames 和 getClashNodeNames 不再过滤 nodeType ([6571511](https://github.com/geekdada/surgio/commit/6571511f3d30aa3a283a69b81afb9aa548031b18))
* schema validation for config ([9f11254](https://github.com/geekdada/surgio/commit/9f11254d2bc7107e2299e1146553b03da1e9849f))
* schema validation for provider ([d738e0f](https://github.com/geekdada/surgio/commit/d738e0f999c91f577deb14793889210620757f36))



## [0.13.2](https://github.com/geekdada/surgio/compare/v0.13.1...v0.13.2) (2019-10-25)


### Bug Fixes

* package.json to reduce vulnerabilities ([76165a4](https://github.com/geekdada/surgio/commit/76165a45cfb993ac6f91400b40aeb078695d8430))


### Features

* add customParams for templates ([8658aa2](https://github.com/geekdada/surgio/commit/8658aa25277a927679822d8cb1fb66f54d71f6e6))
* add timeout env ([7835e2c](https://github.com/geekdada/surgio/commit/7835e2cc9f23bcbed9d1f8322adf3f8c76c250e7))
* getQuantumultNodes 增加 filter 支持 ([9b1d280](https://github.com/geekdada/surgio/commit/9b1d280c2cda52c791ed0896263c23505f233bda))



## [0.13.1](https://github.com/geekdada/surgio/compare/v0.13.0...v0.13.1) (2019-10-20)


### Features

* add direct download ([620b7dd](https://github.com/geekdada/surgio/commit/620b7dd0f799523bb9d55b6129b7db79bb25d35a))
* add noindex meta ([7fc102a](https://github.com/geekdada/surgio/commit/7fc102a37c53a3c046f664a5f7ff2a184b90b3bf))



# [0.13.0](https://github.com/geekdada/surgio/compare/v0.12.6...v0.13.0) (2019-10-19)


### Features

* gateway 支持查看所有 artifact ([7cd7dc3](https://github.com/geekdada/surgio/commit/7cd7dc3b8b1f3e576714388ea2adc223327d7885))



## [0.12.6](https://github.com/geekdada/surgio/compare/v0.12.5...v0.12.6) (2019-10-16)


### Features

* add more server log ([de77875](https://github.com/geekdada/surgio/commit/de77875fc2befcd2f081b3cb77c4496d1ea53f5f))



## [0.12.5](https://github.com/geekdada/surgio/compare/v0.12.4...v0.12.5) (2019-10-15)


### Bug Fixes

* 国旗被重复添加 ([80eff22](https://github.com/geekdada/surgio/commit/80eff22c9f631b3874c7aa63cbbb63c910476ea5))



## [0.12.4](https://github.com/geekdada/surgio/compare/v0.12.3...v0.12.4) (2019-10-15)


### Bug Fixes

* write permission ([5b34129](https://github.com/geekdada/surgio/commit/5b34129d3edae83996f3a58d3f75f84fcdf89c99))



## [0.12.3](https://github.com/geekdada/surgio/compare/v0.12.2...v0.12.3) (2019-10-15)


### Bug Fixes

* config dir write permission problem ([90b6d71](https://github.com/geekdada/surgio/commit/90b6d711bd22d5fa90e97e87f02cb3c32fc66a62))



## [0.12.2](https://github.com/geekdada/surgio/compare/v0.12.1...v0.12.2) (2019-10-15)



## [0.12.1](https://github.com/geekdada/surgio/compare/v0.12.0...v0.12.1) (2019-10-15)


### Features

* add cache to remote snippet ([265c42c](https://github.com/geekdada/surgio/commit/265c42cab77a965540f56a6e06e32f6a9741eb55))
* add support to now.sh ([9e23a25](https://github.com/geekdada/surgio/commit/9e23a25c9ba85f068cac5a441685b9630d1fec4c))



# [0.12.0](https://github.com/geekdada/surgio/compare/v0.11.6...v0.12.0) (2019-10-14)


### Features

* support aliyun serverless service ([0108097](https://github.com/geekdada/surgio/commit/0108097f3d20e200698d2eb2da2604f71d4ef1c8))



## [0.11.6](https://github.com/geekdada/surgio/compare/v0.11.5...v0.11.6) (2019-10-13)


### Bug Fixes

* 如果节点名中已经存在 emoji 则不处理 ([7fb1140](https://github.com/geekdada/surgio/commit/7fb1140b08e0e074d86992f69fa004cccd84869c))



## [0.11.5](https://github.com/geekdada/surgio/compare/v0.11.4...v0.11.5) (2019-10-10)


### Bug Fixes

* clash 规则中出现了 URL-REGEX ([057269d](https://github.com/geekdada/surgio/commit/057269dad5e7c176e3ee90dce9c071312354e772))


### Features

* 增加错误文案方便调试 ([ff28793](https://github.com/geekdada/surgio/commit/ff287933e17cb0f7d8f9b7d4a454124420e7610c))
* 增加了 Flag 识别字段 ([86c1489](https://github.com/geekdada/surgio/commit/86c14898001ab54b6a5387bf533c34d5917b4cbb))



## [0.11.4](https://github.com/geekdada/surgio/compare/v0.11.3...v0.11.4) (2019-10-10)


### Bug Fixes

* 不需要 sort ([51f560f](https://github.com/geekdada/surgio/commit/51f560fc86b24c1b4319a83637c90e5449023520))
* SSR URI 识别问题 ([46184fb](https://github.com/geekdada/surgio/commit/46184fbfdcd1583658db157123902862881413f5))



## [0.11.3](https://github.com/geekdada/surgio/compare/v0.11.2...v0.11.3) (2019-10-09)


### Bug Fixes

* 不手动指定不使用代理 ([d89198a](https://github.com/geekdada/surgio/commit/d89198a23cff4fe345f5597ab507b8680ac34b54))
* 文件名在 win 上取值错误 ([310518b](https://github.com/geekdada/surgio/commit/310518bd7cc37c2110dbcb50bdb1d5571bdb68cc))
* clash 规则不输出 ssr 节点名 ([7360c7b](https://github.com/geekdada/surgio/commit/7360c7b86a6f8adb151ba6270193e7c42a1f2069))



## [0.11.2](https://github.com/geekdada/surgio/compare/v0.11.1...v0.11.2) (2019-10-09)


### Bug Fixes

* clash 中 raw tcp 的节点没有 network 字段 ([56244c1](https://github.com/geekdada/surgio/commit/56244c1289cf663a71c898290d5a17bdb43c8109))



## [0.11.1](https://github.com/geekdada/surgio/compare/v0.11.0...v0.11.1) (2019-10-08)


### Features

* 远程片段支持读取原始内容 ([a1f9e0f](https://github.com/geekdada/surgio/commit/a1f9e0ff7f55b33f98934619a2e90c33ba0c8d20))
* add support for clashr ([43c4862](https://github.com/geekdada/surgio/commit/43c486277bdff42999f18a71a4627585461e4762))



# [0.11.0](https://github.com/geekdada/surgio/compare/v0.10.0...v0.11.0) (2019-10-08)


### Bug Fixes

* cannot assign value to read only object ([5bcbecd](https://github.com/geekdada/surgio/commit/5bcbecd1c5b647d20c5223131368cfe91a5ce7d2))


### Features

* 节点名补充国旗 Emoji ([dc1f34e](https://github.com/geekdada/surgio/commit/dc1f34e3616e924acc2773dc7024a5e968981d53))
* 增加国别判断字段 ([ce6828c](https://github.com/geekdada/surgio/commit/ce6828cdf80bd433d55ad788fac1529ef9b32fc6))
* add error message ([69b6bff](https://github.com/geekdada/surgio/commit/69b6bfffdca29c1d01cc77cf63730a12f7390822))
* custom filters ([d5ee8bc](https://github.com/geekdada/surgio/commit/d5ee8bc6b0066eb0d30699191fdcae6262bd4f1a))



# [0.10.0](https://github.com/geekdada/surgio/compare/v0.9.0...v0.10.0) (2019-10-04)


### Bug Fixes

* .snyk & package.json to reduce vulnerabilities ([33547e4](https://github.com/geekdada/surgio/commit/33547e40cd222bbbeadf1439eb139ddbb525c25c))
* add quote to user-agent ([e60ee8a](https://github.com/geekdada/surgio/commit/e60ee8a9607afe40d5cdd74127ceb1d98bcf85e0))


### Features

* native support for surge vmess ([02c063c](https://github.com/geekdada/surgio/commit/02c063c085f320f41945001a300e871fdb6ed9b8))



# [0.9.0](https://github.com/geekdada/surgio/compare/v0.8.0...v0.9.0) (2019-09-30)


### Bug Fixes

* v2ray json 应该区分本地端口 ([3a7cfe8](https://github.com/geekdada/surgio/commit/3a7cfe81e34549b6e538d0778f0f3e5adeda95fb))


### Features

* assign start port ([47bcf0e](https://github.com/geekdada/surgio/commit/47bcf0e0b67bf32ccffeaceb6966a560ee90235d))



# [0.8.0](https://github.com/geekdada/surgio/compare/v0.7.3...v0.8.0) (2019-09-26)


### Features

* add quantumultx filter ([0d01d55](https://github.com/geekdada/surgio/commit/0d01d55137eca6421253eeb99b404af22bb5d5e6))



## [0.7.3](https://github.com/geekdada/surgio/compare/v0.7.2...v0.7.3) (2019-09-16)



## [0.7.2](https://github.com/geekdada/surgio/compare/v0.7.1...v0.7.2) (2019-09-05)


### Features

* enhance filter ([2cb1d0a](https://github.com/geekdada/surgio/commit/2cb1d0adc25353f9bf0b33f45a530655cca56e4c))



## [0.7.1](https://github.com/geekdada/surgio/compare/v0.7.0...v0.7.1) (2019-09-04)


### Features

* 优化模板错误提示 ([a6cf815](https://github.com/geekdada/surgio/commit/a6cf815a23085bf47d872787ff85d96bdbfb3b3c))



# [0.7.0](https://github.com/geekdada/surgio/compare/v0.6.0...v0.7.0) (2019-09-02)


### Bug Fixes

* bin for v2ray ([fb2e4b9](https://github.com/geekdada/surgio/commit/fb2e4b95dfbf5c496597fe0ad629029e5dd6c8dd))
* filter got overwrote ([c4ad444](https://github.com/geekdada/surgio/commit/c4ad44408cbba0fb84a0a4e29a165ebdc7aca547))
* v2ray config ([fd315b4](https://github.com/geekdada/surgio/commit/fd315b447a2bce5db995ae0aac386dc1476b2765))


### Features

* output v2ray for surge ([172f97e](https://github.com/geekdada/surgio/commit/172f97ed52ae44a2a6c3ba26c6a0e27f4d0d8757))



# [0.6.0](https://github.com/geekdada/surgio/compare/v0.5.1...v0.6.0) (2019-08-30)


### Features

* surge 支持 ssr ([68b2966](https://github.com/geekdada/surgio/commit/68b2966e25219cc657ce21794f3f96415f73bae8))



## [0.5.1](https://github.com/geekdada/surgio/compare/v0.5.0...v0.5.1) (2019-08-29)



# [0.5.0](https://github.com/geekdada/surgio/compare/v0.4.0...v0.5.0) (2019-08-27)


### Bug Fixes

* double base64 ([853172d](https://github.com/geekdada/surgio/commit/853172d4737d7e63ecacd761a88ce274adc233c1))


### Features

* 生成 quan 订阅 scheme ([afe0a21](https://github.com/geekdada/surgio/commit/afe0a2120b0eeb048deab09c24964d7bd3e14a60))
* 生成 v2rayn scheme ([981e6d7](https://github.com/geekdada/surgio/commit/981e6d77517771da9510cc79c7e0cd8c7276d119))
* 支持导出 Quantumult 的 HTTPS, Shadowsocksr 节点 ([dd728e0](https://github.com/geekdada/surgio/commit/dd728e02345669751b31227327abb20034dc5554))
* add shadowsocks subscribe support ([e993d1b](https://github.com/geekdada/surgio/commit/e993d1bfa1ab4a50464ca37f647e22cd7c0bee68))
* add v2rayn subscribe support ([067ad43](https://github.com/geekdada/surgio/commit/067ad4318b456f5ceaf47ad78b79d206544da72e))
* clash 输出 vmess ([05cc557](https://github.com/geekdada/surgio/commit/05cc5570762d34a3465e71d14fbf78e8a30a1f34))



# [0.4.0](https://github.com/geekdada/surgio/compare/v0.3.1...v0.4.0) (2019-08-25)


### Features

* 初始化配置时使用 defaultsDeep ([ab8f695](https://github.com/geekdada/surgio/commit/ab8f695a79bbf92248a193805032c81fc2e31434))
* remote rule set ([a820cdb](https://github.com/geekdada/surgio/commit/a820cdb192daeb1f0a321e75ed447290b4e4207a)), closes [#5](https://github.com/geekdada/surgio/issues/5)



## [0.3.1](https://github.com/geekdada/surgio/compare/v0.3.0...v0.3.1) (2019-08-25)


### Bug Fixes

* build before publish ([b784fa5](https://github.com/geekdada/surgio/commit/b784fa5c948d51e394251a47e54767e1c5f25c8e))
* require pkg ([3081cc7](https://github.com/geekdada/surgio/commit/3081cc7bee460350e6b0d0768bf2cabe9a09f8d7))


### Features

* 模板 base64 filter ([3d45a23](https://github.com/geekdada/surgio/commit/3d45a23102cf642495e0920c91f2ed94de27a4e2))
* add cli update support ([2f2d340](https://github.com/geekdada/surgio/commit/2f2d340b0c4f65a1a601f62c2986c5384af6fd76))



# [0.3.0](https://github.com/geekdada/surgio/compare/v0.2.0...v0.3.0) (2019-08-25)


### Bug Fixes

* udp_over_tcp should be false ([302d445](https://github.com/geekdada/surgio/commit/302d445dc1af0e9debb41f016c08f64a849e2355))


### Features

* 属性判空 ([13eb455](https://github.com/geekdada/surgio/commit/13eb455d3258f0067a244117a50688817bdb1433))
* 在模板中暴露 nodeList 变量 ([c2eeb29](https://github.com/geekdada/surgio/commit/c2eeb295ff2ca7dc0407a2b67f8d1332aa26be60))
* 支持从 gui-config.json 中解析混淆配置 ([bc135a7](https://github.com/geekdada/surgio/commit/bc135a78c8eb0572ebc67b17ab9d7c6a9b4acf22))



# 0.2.0 (2019-08-21)



