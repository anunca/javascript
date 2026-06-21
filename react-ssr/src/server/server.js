import express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react'
import {renderToString} from 'react-dom/server'

import App from '../src/App'

const app = express()
const DOCUMENT_ROOT = path.resolve(__dirname, '..', './build')
const DIRECTORY_INDEX = `${DOCUMENT_ROOT}/index.html`
const PORT = process.env.PORT || 80

app.use('^/$', (req, res, next) => {
  fs.readFile(DIRECTORY_INDEX, 'utf-8', (err, data) => {
    if(err){
      console.error(err)
      return res.status(500).send('Error 500')
    }
    return res.send(data.replace('<div id="root"></div>', `<div id="root">${renderToString(<App />)}</div>`))
  })
})

app.use(express.static(DOCUMENT_ROOT))

app.listen(PORT, () => {
  console.debug(`App lauched on PORT: ${PORT}`)
})