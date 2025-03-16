import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./app.ts'],
  outDir: 'dist'
})
