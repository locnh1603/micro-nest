//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
require('dotenv').config()
/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {},
  output: 'export'
};

const plugins = [
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
