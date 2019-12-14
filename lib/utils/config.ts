import Joi from '@hapi/joi';
import fs from 'fs-extra';
import { url } from 'inspector';
import _ from 'lodash';
import path from 'path';
import { URL } from 'url';

import { CommandConfig } from '../types';
import { PROXY_TEST_INTERVAL, PROXY_TEST_URL } from './constant';
import { ensureConfigFolder } from './index';

export const loadConfig = (cwd: string, configPath: string, override?: Partial<CommandConfig>): CommandConfig => {
  const absPath = path.resolve(cwd, configPath);

  if (!fs.existsSync(absPath)) {
    throw new Error(`配置文件 ${absPath} 不存在`);
  }

  const userConfig = _.cloneDeep(require(absPath));

  validateConfig(userConfig);

  if (override) {
    return {
      ...normalizeConfig(cwd, userConfig),
      ...override,
    };
  }

  return normalizeConfig(cwd, userConfig);
};

export const normalizeConfig = (cwd: string, userConfig: Partial<CommandConfig>): CommandConfig => {
  const defaultConfig: Partial<CommandConfig> = {
    artifacts: [],
    urlBase: '/',
    output: path.join(cwd, './dist'),
    templateDir: path.join(cwd, './template'),
    providerDir: path.join(cwd, './provider'),
    configDir: ensureConfigFolder(),
    surgeConfig: {
      v2ray: 'external',
      resolveHostname: false,
    },
    proxyTestUrl: PROXY_TEST_URL,
    proxyTestInterval: PROXY_TEST_INTERVAL,
  };
  const config: CommandConfig = _.defaultsDeep(userConfig, defaultConfig);

  // istanbul ignore next
  if (!fs.existsSync(config.templateDir)) {
    throw new Error(`仓库内缺少 ${config.templateDir} 目录`);
  }
  // istanbul ignore next
  if (!fs.existsSync(config.providerDir)) {
    throw new Error(`仓库内缺少 ${config.providerDir} 目录`);
  }

  if (/http/i.test(config.urlBase)) {
    const urlObject = new URL(config.urlBase);
    config.publicUrl = urlObject.origin + '/';
  } else {
    config.publicUrl = '/';
  }

  return config;
};

export const validateConfig = (userConfig: Partial<CommandConfig>): void => {
  const artifactSchema = Joi.object({
    name: Joi.string().required(),
    template: Joi.string().required(),
    provider: Joi.string().required(),
    combineProviders: Joi.array().items(Joi.string()),
    customParams: Joi.object(),
    proxyGroupModifier: Joi.function(),
    destDir: Joi.string(),
  });
  const remoteSnippetSchema = Joi.object({
    url: Joi.string().uri({
      scheme: [
        /https?/,
      ],
    }).required(),
    name: Joi.string().required(),
  });
  const schema = Joi.object({
    artifacts: Joi.array().items(artifactSchema).required(),
    remoteSnippets: Joi.array().items(remoteSnippetSchema),
    urlBase: Joi.string(),
    upload: Joi.object({
      prefix: Joi.string(),
      region: Joi.string(),
      bucket: Joi.string().required(),
      accessKeyId: Joi.string().required(),
      accessKeySecret: Joi.string().required(),
    }),
    binPath: Joi.object({
      shadowsocksr: Joi.string().pattern(/^\//),
      v2ray: Joi.string().pattern(/^\//),
      vmess: Joi.string().pattern(/^\//),
    }),
    surgeConfig: Joi.object({
      v2ray: Joi.string().valid('native', 'external'),
      resolveHostname: Joi.boolean(),
    }),
    quantumultXConfig: Joi.object({
      deviceIds: Joi.array().items(Joi.string()),
    }),
    analytics: Joi.boolean(),
    gateway: Joi.object({
      accessToken: Joi.string(),
      auth: Joi.boolean(),
    }),
    proxyTestUrl: Joi.string().uri({
      scheme: [
        /https?/,
      ],
    }),
    proxyTestInterval: Joi.number(),
    customFilters: Joi.object()
      .pattern(
        Joi.string(),
        Joi.any().allow(Joi.function(), Joi.object({ filter: Joi.function(), supportSort: Joi.boolean() }))
      ),
  })
    .unknown();

  const { error } = schema.validate(userConfig);

  // istanbul ignore next
  if (error) {
    throw error;
  }
};
