import gitmojisJson from './gitmojis.json' assert { type: 'json' }

export { default as schema } from './schema.json' assert { type: 'json' }

import zhCN from './languages/bundle.l10n.zh-cn.json'

export const gitmojis = gitmojisJson.gitmojis.map((item) => ({
  ...item,
  description: `${item.description}.`,
  description_zhCN: `${zhCN[item.description]}。`,
}))

// export const gitmojis = gitmojisJson.gitmojis
