import path from 'path'

export default {
  build: {
    lib: {
      name: 'Main',
      entry: path.resolve(__dirname, 'main.js'),
    }
  }
}
