const { contextBridge } = require('electron')
const path = require('path')
const fs = require('fs')


contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // we can also expose variables, not just functions
  readLUT: () => {
    let lutPath = path.resolve('src', 'power.lut')
    
    return fs.readFileSync(lutPath, 'utf8')
  }, 

  writeLut: (text) => {
    let lutPath = path.resolve('src', 'power.lut')

    fs.writeFile(lutPath, text, err => {
      if (err) {
        console.log(err);
      }
    })
  }

})