// @flow
const fs = require('fs').promises;

const changeResourceVersion = async () => {
  const version = process.env.npm_package_version;
  if (typeof version !== 'string') {
    throw new Error('Could not find version number');
  }
  const matcher = /image: registry.gitlab.com\/apolitical\/frontend-skeleton:.*/g;
  const replacement = `image: registry.gitlab.com/apolitical/frontend-skeleton:v${version}`;

  const reader = await fs.open('k8s/_common/app.yaml', 'r');
  const file = await reader.readFile({ encoding: 'UTF-8' });
  if (typeof file !== 'string') {
    throw new Error('Could not read file');
  }
  await reader.close();

  const newFile = file.split('\n').map((line) => line.replace(matcher, replacement)).join('\n');

  const writer = await fs.open('k8s/_common/app.yaml', 'w');
  await writer.writeFile(newFile, { encoding: 'UTF-8' });
  await writer.close();
};

changeResourceVersion()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
