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
    
    
    // return fs.readFile(lutPath, 'utf8', (err, data) => {
    //   if (err) throw err;
    //   // console.log(data.toString())
    // })
    return fs.readFileSync(lutPath, 'utf8')
  }

})