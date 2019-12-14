---
title: Provider 服务提供者
sidebarDepth: 2
---

# Provider 服务提供者

你可以在 `provider` 目录内看到两个已经写好的 Provider，它们分别是订阅地址和自己维护的节点列表。

需要注意的是文件名即为该 Provider 的名称，后面在定义 Artifact 时会用到。

目前 Surgio 支持两种 Provider 类型：

|  类型  |  描述  |  备注  |
|:---:| --- | --- |
|  `shadowsocks_json_subscribe`  |  针对 Windows 客户端的 Shadowsocks 订阅地址  |  通常命名为 *gui-config.json*  |
|  `shadowsocks_subscribe`  |  通用的 Shadowsocks 订阅地址  |    |
|  `shadowsocksr_subscribe`  |  通用的 Shadowsocksr 订阅地址  |    |
|  `v2rayn_subscribe`  |  V2rayN 订阅地址  |  [协议](https://github.com/2dust/v2rayN/wiki/%E8%AE%A2%E9%98%85%E5%8A%9F%E8%83%BD%E8%AF%B4%E6%98%8E)  |
|  `custom` <Badge text="推荐" vertical="middle" /> |  自己维护的节点  |  支持 Shadowsocks, Shadowsocksr, Snell, HTTPS, Vmess  |
|  `clash` <Badge text="推荐" vertical="middle" /> |  Clash 配置  |  支持 Shadowsocks, Shadowsocksr, Snell, HTTPS, Vmess  |

## shadowsocks_json_subscribe

```js
module.exports = {
  type: 'shadowsocks_json_subscribe',
  url: '',
  udpRelay: true,
};
```

### url

- 类型: `string`
- 默认值: `undefined`
- <Badge text="必须" vertical="middle" />

若机场没有提供这种订阅地址，推荐使用 Fndroid 的 [接口](https://github.com/Fndroid/jsbox_script/wiki/%E5%BC%80%E6%94%BE%E6%8E%A5%E5%8F%A3%E4%BD%BF%E7%94%A8%E5%8F%8A%E8%AF%B4%E6%98%8E#surge%E6%89%98%E7%AE%A1%E8%BD%AC%E6%8D%A2shadowsockswindows%E9%85%8D%E7%BD%AE) 进行转换。

:::warning 注意
- 如果你正在使用 [DlerCloud](https://dlercloud.com/auth/register?affid=45071)，可以使用 Surge 的托管订阅地址，然后使用 `surge2sswin` 转换
:::

### udpRelay

- 类型: `boolean`
- 默认值: `false`

由于这种订阅协议不支持定义 UDP 转发的支持情况，所以单独出来进行配置。UDP 转发可以应用在 Surge 中。

## shadowsocks_subscribe

```js
module.exports = {
  type: 'shadowsocks_subscribe',
  url: '',
  udpRelay: true,
};
```

### url

- 类型: `string`
- 默认值: `undefined`
- <Badge text="必须" vertical="middle" />

:::warning 注意
- 如果你正在使用 [DlerCloud](https://dlercloud.com/auth/register?affid=45071)，可以使用 SS 订阅地址
:::

### udpRelay

- 类型: `boolean`
- 默认值: `false`

由于这种订阅协议不支持定义 UDP 转发的支持情况，所以单独出来进行配置。UDP 转发可以应用在 Surge 中。


## shadowsocksr_subscribe

```js
module.exports = {
  type: 'shadowsocksr_subscribe',
  url: '',
};
```

### url

- 类型: `string`
- 默认值: `undefined`
- <Badge text="必须" vertical="middle" />

## v2rayn_subscribe

```js
module.exports = {
  type: 'v2rayn_subscribe',
  url: '',
};
```

### url

- 类型: `string`
- 默认值: `undefined`
- <Badge text="必须" vertical="middle" />

:::warning 注意
- Quantumult 的订阅格式和 V2rayN 的订阅格式有差异，不可以混用
- 如果你正在使用 [DlerCloud](https://dlercloud.com/auth/register?affid=45071)，可以使用「通用」类型的订阅地址
:::

## clash <Badge text="推荐" vertical="middle" />

### url

- 类型: `string`
- 默认值: `undefined`
- <Badge text="必须" vertical="middle" />

### udpRelay

- 类型: `boolean`
- 默认值: `false`

我们发现部分机场的 Clash 订阅并没有设定 `udp`，所以你可以通过配置这个属性来强制设定节点的 UDP 转发支持情况。如果订阅节点中包含 `udp` 字段，则该配置无效。

## custom <Badge text="推荐" vertical="middle" />

```js
module.exports = {
  type: 'custom',
  nodeList: [],
};
```

### nodeList

- 类型: `NodeConfig[]`
- 默认值: `undefined`
- <Badge text="必须" vertical="middle" />

不同的类型的节点 `NodeConfig` 结构有一些不同，下面是所有支持的节点类型：

*Shadowsocks*

```js
{
  type: 'shadowsocks',
  nodeName: '🇺🇸US',
  hostname: 'us.example.com',
  port: 10000,
  method: 'chacha20-ietf-poly1305',
  password: 'password',
  obfs: 'tls', // tls 或 http
  'obfs-host': 'gateway-carry.icloud.com',
  'udp-relay': true,
  tfo: false, // TCP Fast Open
}
```

*Shadowsocksr*

```js
{
  type: 'shadowsocksr',
  nodeName: '🇭🇰HK',
  hostname: 'hk.example.com',
  port: 10000,
  method: 'chacha20-ietf',
  password: 'password',
  obfs: 'tls1.2_ticket_auth',
  obfsparam: 'music.163.com',
  protocol: 'auth_aes128_md5',
  protoparam: '',
  'udp-relay': true,
  tfo: false, // TCP Fast Open
}
```

*Vmess*

```js
{
  nodeName: '🇭🇰HK',
  type: 'vmess',
  hostname: 'hk.example.com',
  method: 'auto', // 仅支持 auto/aes-128-gcm/chacha20-ietf-poly1305/none
  network: 'ws', // 仅支持 tcp/ws
  alterId: '64',
  path: '/',
  port: 8080,
  tls: false,
  host: 'example.com',
  uuid: '1386f85e-657b-4d6e-9d56-78badb75e1fd',
  tfo: false, // TCP Fast Open
}
```

*Snell*

```js
{
  type: 'snell',
  nodeName: '🇭🇰HK',
  hostname: 'hk.example.com',
  port: 10000,
  psk: 'RjEJRhNPps3DrYBcEQrcMe3q9NzFLMP',
  obfs: 'tls', // tls 或 http
}
```

*HTTPS*

```js
{
  type: 'https',
  nodeName: '🇭🇰HK',
  hostname: 'hk.example.com',
  port: 443,
  username: 'username',
  password: 'password',
}
```

## 公共属性

:::tip
公共属性可以定义在任何一种 Provider 中。
:::

### nodeConfig.enable

- 类型: `boolean`
- 默认值: `true`

单独关闭某个节点输出到配置中。若没有 `enable` 属性则默认打开。

```js
{
  enable: false,
  type: 'shadowsocks',
  nodeName: '🇺🇸US',
  hostname: 'us.example.com',
  port: '10000',
  method: 'chacha20-ietf-poly1305',
  password: 'password',
}
```

### provider.nodeFilter

- 类型: `Function`
- 入参: `NodeConfig`
- 返回值: `boolean`

有一些俗称「外贸机场」的服务商提供很多诸如马来西亚、土耳其的节点，不需要这些国家节点的朋友每次都要在数十个节点中寻找自己想要的。我们可以用这个方法把这些节点过滤掉。

```js
const { utils } = require('surgio');

module.exports = {
  // 过滤出名字中包含土耳其和马来西亚的节点
  nodeFilter: utils.useKeywords(['土耳其', '马来西亚']),
};
```

:::tip 提示
关于过滤器的自定义和其它进阶使用方法，请阅读 [「自定义过滤器」](/guide/advance/custom-filter.md)。
:::

### provider.netflixFilter

- 类型: `Function`
- 入参: `NodeConfig`
- 返回值: `boolean`

该方法会覆盖 Surgio 内置的 `netflixFilter`。用于过滤出支持 Netflix 的节点。对于那些每一个节点都解锁流媒体的机场，也可以单独过滤出部分你喜欢的节点。

[内置 `netflixFilter` 的解释](/guide/custom-template.md#netflixfilter)。

```js
module.exports = {
  // 过滤出名字中包含 HK（大小写不敏感）的节点
  netflixFilter: utils.useKeywords(['hk', 'HK']),
};
```

### provider.youtubePremiumFilter

- 类型: `Function`
- 入参: `NodeConfig`
- 返回值: `boolean`

该方法会覆盖 Surgio 内置的 `youtubePremiumFilter`。用于过滤出支持 Youtube Premium 的节点。

[内置 `youtubePremiumFilter` 的解释](/guide/custom-template.md#youtubepremiumfilter)。

### provider.customFilters

- 类型: `object`
- 默认值: `undefined`

自定义 Filter。关于自定义 Filter 的用法，请阅读 [进阶 - 自定义 Filter](/guide/advance/custom-filter)。

:::tip 提示
你现在可以定义 [全局的过滤器](/guide/custom-config.md#customfilters) 了！
:::

### provider.startPort

- 类型: `Number`
- 默认值: `61100`

在生成 Surge 的 Shadowsocksr 和 Vmess 配置文件时，本地监听端口会根据此配置递增。这样做的好处是切换配置文件时不会遇到端口冲突。同一个 Provider 被用在不同的 Artifact 中也会进行递增。

### provider.addFlag

- 类型: `Boolean`
- 默认值: `false`

在节点名称前加国旗 Emoji。需要注意的是，Surgio 是根据有限的节点名关键词判断位置的，如果无法匹配则会保留原节点名。你可以在所有的过滤器中检索国旗 Emoji。

### provider.tfo

- 类型: `Boolean`
- 默认值: `false`

是否为该订阅强制开启 TFO（TCP Fast Open），部分机场虽然支持 TFO 但是没有在订阅中开启，你可以通过这个配置强制打开。

### provider.renameNode <Badge text="v1.8.5" vertical="middle" />

- 类型: `Function`
- 默认值: `undefined`

更改节点名。如果你对机场的奇葩命名有意见，可以在这里把他们替换掉。

```js
module.exports = {
  renameNode: name => {
    if (name === '社会主义') {
      return '资本主义';
    }
    return name;
  },
};
```

:::warning 注意
1. `nodeFilter` 只对原始名称有效；
2. 其它内置过滤器和自定义过滤器仅对新名称有效；
3. 如果你开启了 `addFlag`，那国家地区判定仅对新名称有效；
4. 这个方法不一定要在末尾 `return` 内容，如果没有返回内容则保留原名称；
:::
