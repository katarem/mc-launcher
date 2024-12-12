import { shell } from 'electron'

export const openFolder = (folder) => {
  shell.openPath(folder)
}
