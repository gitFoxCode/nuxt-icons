import { glob } from 'glob'

export const constructIconNames = async (path: string, location: string, fileExtension: string) => (await glob(`${location}/**/**.${fileExtension}`, { cwd: path })).map(p => p.substring(location.length + 1)).map(p => p.substring(0, p.length - 4))
