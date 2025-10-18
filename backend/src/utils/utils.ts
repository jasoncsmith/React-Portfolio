import path from 'path'
import { fileURLToPath } from 'node:url'

export const dirname = (metaUrl: string, pathName: string) =>
  path.join(path.dirname(fileURLToPath(metaUrl)), pathName)
