import path from 'path'
import { fileURLToPath } from 'url'

export const dirname = (metaUrl, pathName) => path.join(path.dirname(fileURLToPath(metaUrl)), pathName)
