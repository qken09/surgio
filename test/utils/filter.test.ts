import test from 'ava';
import { NodeTypeEnum, VmessNodeConfig } from '../../lib/types';
import * as filter from '../../lib/utils/filter';

test('validateFilter', t => {
  t.false(filter.validateFilter(undefined));
  t.false(filter.validateFilter(null));
  t.true(filter.validateFilter(() => {
    return true;
  }));
  t.true(filter.validateFilter(filter.useSortedKeywords(['US'])));
});

test('useKeywords', t => {
  const fn1 = filter.useKeywords(['测试', 'test']);
  const fn2 = filter.useKeywords(['测试', 'test'], true);

  t.true(fn1({
    nodeName: '测试',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.false(fn2({
    nodeName: '测试',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.true(fn2({
    nodeName: '测试 test',
    type: NodeTypeEnum.Shadowsocks,
  }));
});

test('discardKeywords', t => {
  const fn1 = filter.discardKeywords(['测试', 'test']);
  const fn2 = filter.discardKeywords(['测试', 'test'], true);

  t.false(fn1({
    nodeName: '测试',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.true(fn1({
    nodeName: '美国',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.true(fn2({
    nodeName: '测试',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.true(fn2({
    nodeName: '美国测试',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.false(fn2({
    nodeName: '测试 test',
    type: NodeTypeEnum.Shadowsocks,
  }));
});

test('useRegexp', t => {
  const fn = filter.useRegexp(/(测试|test)/i);

  t.true(fn({
    nodeName: '测试',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.false(fn({
    nodeName: '美国',
    type: NodeTypeEnum.Shadowsocks,
  }));
});

test('netflixFilter', t => {
  t.true(filter.netflixFilter({
    nodeName: 'hkbn 1',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.true(filter.netflixFilter({
    nodeName: 'HKBN 1',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.false(filter.netflixFilter({
    nodeName: 'HK',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.true(filter.netflixFilter({
    nodeName: 'HK NF',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.true(filter.netflixFilter({
    nodeName: 'HK Netflix',
    type: NodeTypeEnum.Shadowsocks,
  }));
});

test('youtubePremiumFilter', t => {
  t.true(filter.youtubePremiumFilter({
    nodeName: '🇺🇸 美国',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.true(filter.youtubePremiumFilter({
    nodeName: '韩国',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.true(filter.youtubePremiumFilter({
    nodeName: 'HK',
    type: NodeTypeEnum.Shadowsocks,
  }));
});

test('usFilter', t => {
  t.true(filter.usFilter({
    nodeName: '🇺🇸 美国',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.false(filter.usFilter({
    nodeName: 'HK',
    type: NodeTypeEnum.Shadowsocks,
  }));
});

test('hkFilter', t => {
  t.true(filter.hkFilter({
    nodeName: '🇭🇰',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.true(filter.hkFilter({
    nodeName: 'HK',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.false(filter.hkFilter({
    nodeName: 'US 1',
    type: NodeTypeEnum.Shadowsocks,
  }));
});

test('japanFilter', t => {
  t.true(filter.japanFilter({
    nodeName: '🇯🇵',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.true(filter.japanFilter({
    nodeName: 'JP',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.false(filter.japanFilter({
    nodeName: 'US 1',
    type: NodeTypeEnum.Shadowsocks,
  }));
});

test('koreaFilter', t => {
  t.true(filter.koreaFilter({
    nodeName: '🇰🇷',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.true(filter.koreaFilter({
    nodeName: '韩国',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.false(filter.koreaFilter({
    nodeName: 'US 1',
    type: NodeTypeEnum.Shadowsocks,
  }));
});

test('singaporeFilter', t => {
  t.true(filter.singaporeFilter({
    nodeName: '🇸🇬',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.true(filter.singaporeFilter({
    nodeName: '新加坡',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.false(filter.singaporeFilter({
    nodeName: 'US 1',
    type: NodeTypeEnum.Shadowsocks,
  }));
});

test('taiwanFilter', t => {
  t.true(filter.taiwanFilter({
    nodeName: '🇹🇼',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.true(filter.taiwanFilter({
    nodeName: '台湾',
    type: NodeTypeEnum.Shadowsocks,
  }));
  t.false(filter.taiwanFilter({
    nodeName: 'US 1',
    type: NodeTypeEnum.Shadowsocks,
  }));
});

test('useSortedKeywords', t => {
  const fn = filter.useSortedKeywords(['test', '测试']);
  const result = fn.filter([
    generateVmessNode('测试 1'),
    generateVmessNode('测试 2'),
    generateVmessNode('测试 3'),
    generateVmessNode('test 测试 1'),
    generateVmessNode('test 2'),
    generateVmessNode('🇺🇸US 1'),
  ]);

  t.true(fn.supportSort);
  t.deepEqual(result, [
    generateVmessNode('test 测试 1'),
    generateVmessNode('test 2'),
    generateVmessNode('测试 1'),
    generateVmessNode('测试 2'),
    generateVmessNode('测试 3'),
  ]);
});

test('mergeSortedFilters 1', t => {
  const fn = filter.mergeSortedFilters([filter.hkFilter, filter.usFilter]);
  const result = fn.filter([
    generateVmessNode('US 1'),
    generateVmessNode('US 2'),
    generateVmessNode('HK 1'),
    generateVmessNode('HK 2'),
    generateVmessNode('test 1'),
  ]);

  t.true(fn.supportSort);
  t.deepEqual(result, [
    generateVmessNode('HK 1'),
    generateVmessNode('HK 2'),
    generateVmessNode('US 1'),
    generateVmessNode('US 2'),
  ]);
});

test('mergeSortedFilters 2', t => {
  t.throws(() => {
    const fn = filter.useSortedKeywords(['1']);
    filter.mergeSortedFilters([fn as any]);
  });

  t.throws(() => {
    filter.mergeSortedFilters([undefined]);
  });
});

test('mergeFilters', t => {
  t.throws(() => {
    const fn = filter.useSortedKeywords(['1']);
    filter.mergeFilters([fn as any]);
  });

  t.throws(() => {
    filter.mergeFilters([undefined]);
  });
});

function generateVmessNode(nodeName: string): VmessNodeConfig {
  return {
    type: NodeTypeEnum.Vmess,
    alterId: '64',
    hostname: '1.1.1.1',
    method: 'auto',
    network: 'tcp',
    nodeName,
    path: '/',
    port: 8080,
    tls: false,
    host: '',
    uuid: '1386f85e-657b-4d6e-9d56-78badb75e1fd',
  };
}
