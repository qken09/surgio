import test from 'ava';
import ClashProvider from '../../lib/class/ClashProvider';
import { NodeTypeEnum } from '../../lib/types';

test('getClashSubscription', async t => {
  const config = await ClashProvider.getClashSubscription('http://example.com/clash-sample.yaml');

  t.deepEqual(config.map(item => item.nodeName), ['ss1', 'ss2', 'vmess', 'http', 'snell', 'ss4']);
  t.deepEqual(config[0], {
    type: NodeTypeEnum.Shadowsocks,
    nodeName: 'ss1',
    hostname: 'server',
    port: 443,
    method: 'chacha20-ietf-poly1305',
    password: 'password',
    'udp-relay': true
  });
  t.deepEqual(config[1], {
    type: NodeTypeEnum.Shadowsocks,
    nodeName: 'ss2',
    hostname: 'server',
    port: 443,
    method: 'chacha20-ietf-poly1305',
    password: 'password',
    'udp-relay': false,
    obfs: 'tls',
    'obfs-host': 'www.bing.com'
  });
  t.deepEqual(config[2], {
    type: NodeTypeEnum.Vmess,
    nodeName: 'vmess',
    hostname: 'server',
    port: 443,
    uuid: 'uuid',
    alterId: '32',
    method: 'auto',
    tls: false,
    network: 'tcp',
    udp: false,
  });
  t.deepEqual(config[3], {
    type: NodeTypeEnum.HTTPS,
    nodeName: 'http',
    hostname: 'server',
    port: 443,
    username: 'username',
    password: 'password',
  });
  t.deepEqual(config[4], {
    type: NodeTypeEnum.Snell,
    nodeName: 'snell',
    hostname: 'server',
    port: 44046,
    psk: 'yourpsk',
    obfs: 'http',
  });
  t.deepEqual(config[5], {
    type: NodeTypeEnum.Shadowsocks,
    nodeName: 'ss4',
    hostname: 'server',
    port: 443,
    method: 'chacha20-ietf-poly1305',
    password: 'password',
    'udp-relay': false,
    obfs: 'tls',
    'obfs-host': 'example.com'
  });
});

test('getClashSubscription udpRelay', async t => {
  const config = await ClashProvider.getClashSubscription('http://example.com/clash-sample.yaml', true);

  t.deepEqual(config[0], {
    type: NodeTypeEnum.Shadowsocks,
    nodeName: 'ss1',
    hostname: 'server',
    port: 443,
    method: 'chacha20-ietf-poly1305',
    password: 'password',
    'udp-relay': true,
  });
  t.deepEqual(config[1], {
    type: NodeTypeEnum.Shadowsocks,
    nodeName: 'ss2',
    hostname: 'server',
    port: 443,
    method: 'chacha20-ietf-poly1305',
    password: 'password',
    'udp-relay': true,
    obfs: 'tls',
    'obfs-host': 'www.bing.com'
  });
  t.deepEqual(config[2], {
    type: NodeTypeEnum.Vmess,
    nodeName: 'vmess',
    hostname: 'server',
    port: 443,
    uuid: 'uuid',
    alterId: '32',
    method: 'auto',
    tls: false,
    network: 'tcp',
    udp: true,
  });
});

test('getClashSubscription - invalid yaml', async t => {
  await t.throwsAsync(async () => {
    await ClashProvider.getClashSubscription('http://example.com/test-v2rayn-sub.txt');
  }, {instanceOf: Error, message: 'http://example.com/test-v2rayn-sub.txt 不是一个合法的 YAML 文件'});
});
