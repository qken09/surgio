---
title: 自定义过滤器
sidebarDepth: 2
---

# 自定义过滤器

在之前的版本里，我们允许用户使用内置的几个过滤器进行节点过滤。现在 Surgio 已经支持在 Provider 和 Surgio 配置中自定义 Filter。需要提醒一下大家，原来内置的国别过滤器已经拓展了不少，可以在 [这里](/guide/custom-template.md#过滤器) 查看。

## 如何自定义

在 Provider 配置或 `surgio.conf.js` 中加入 `customFilters`，然后参照下面例子来自定义。

看不懂的同学也不用怕，依葫芦画瓢很简单的哈 🙋‍♂️。

```js
module.exports = {
  url: 'http://example.com/ss-sub.txt',
  type: 'shadowsocks_subscribe',
  customFilters: {
    wo_yao_netflix_jie_dian: nodeConfig => nodeConfig.nodeName.includes('Netflix'),
  },
};
```

:::tip 提示
这里只是举个例子，并不推荐你重复实现 Surgio 已经内置的过滤器。
:::

入参 `nodeConfig` 包含节点的所有属性，其中有一些你可能会用到的属性写在下面：

- `nodeName` - 节点名
- `type` - 节点类型（例如 `shadowsocks`）

## 如何使用

在模板（`.tpl` 文件）中你可以使用 `customFilters.wo_yao_netflix_jie_dian`。

Clash 配置比较特殊。你需要到 Artifact 定义的 `proxyGroupModifier` 里使用 `filters.wo_yao_netflix_jie_dian`。例如：

```js
{
  name: '🎬 Netflix',
  filter: filters.wo_yao_netflix_jie_dian,
  type: 'select',
}
```

## 工具方法

很多同学在自定义过滤器时绝大部分时候都希望定义关键词或正则式过滤器，所以 Surgio 提供了几个工具方法方便大家不用写太多代码。

在开干前要介绍一个知识点。这几个工具方法是通过模块引入的，你需要在你的 Provider 文件头部加上一行代码，才能使用它们。

### mergeFilters

把多个过滤器合并。第二个入参是开启严格模式。

默认情况下不同的过滤器间是「或」的关系，开启严格模式后是「和」的关系。

```js
const { utils } = require('surgio');

module.exports = {
  url: 'http://example.com/ss-sub.txt',
  type: 'shadowsocks_subscribe',
  customFilters: {
    usNetflixFilter: utils.mergeFilters([utils.usFilter, utils.netflixFilter], true), // 美国的 Netflix 节点
  },
};
```

### useKeywords

生成一个关键词过滤器。第二个入参是开启严格模式。

```js
const { utils } = require('surgio');

module.exports = {
  url: 'http://example.com/ss-sub.txt',
  type: 'shadowsocks_subscribe',
  customFilters: {
    gameFilter: utils.useKeywords(['游戏']),
  },
};
```

:::warning 注意
该过滤器不保证顺序。
:::

### discardKeywords <Badge text="v1.1.1" vertical="middle" />

生成一个反向关键词过滤器。第二个入参是开启严格模式。

:::warning 注意
`discardKeywords` 的目的是 **过滤掉**，`useKeywords` 的目的是 **过滤出**。
:::

### useRegexp

生成一个正则表达式过滤器。

:::tip 提示
[JavaScript 正则表达式文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)
:::

```js
const { utils } = require('surgio');

module.exports = {
  url: 'http://example.com/ss-sub.txt',
  type: 'shadowsocks_subscribe',
  customFilters: {
    iplcFilter: utils.useRegexp(/iplc/i),
  },
};
```

### useSortedKeywords <Badge text="v1.5.0" vertical="middle" />

生成一个排序型关键词过滤器。

假设某机场在输出节点列表时按照编码正序排列，你可以采用该过滤器将某几个节点过滤并排序输出。

```js
const { utils } = require('surgio');

module.exports = {
  url: 'http://example.com/ss-sub.txt',
  type: 'shadowsocks_subscribe',
  customFilters: {
    preferNodes: utils.useSortedKeywords(['V001', 'V009', 'V003']),
  },
};
```

### mergeSortedFilters <Badge text="v1.5.0" vertical="middle" />

合并多个过滤器，生成一个新的排序型过滤器。

假设某机场在输出节点列表时按照国家或地区进行归集，你可以采用该过滤器将某地区的节点过滤并排序输出。

```js
const { utils } = require('surgio');

module.exports = {
  url: 'http://example.com/ss-sub.txt',
  type: 'shadowsocks_subscribe',
  customFilters: {
    preferNodes: utils.mergeSortedFilters([utils.hkFilter, utils.usFilter]), // 也支持 useRegexp
  },
};
```

:::warning 注意
1. 不能合并排序型过滤器。
2. 若某个节点同时匹配多个规则，只会出现在第一次匹配的位置。
3. Provider 的配置项 `nodeFilter` 也支持排序类型的过滤器，但我们并不建议您这么用，因为 Provider 的 `nodeFilter` 配置项仅针对当前 Provider 而非合并进来的所有的节点，再者如果你同时在 `nodeFilter` 和 `getNodeNames`（包括但不限于）中使用排序过滤器，会进行多次排序，很难避免不出错。所以请尽可能在 `nodeFilter` 中使用普通的过滤器。
:::
