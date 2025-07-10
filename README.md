# sketches
sketches made using p5 


# jsconfig
spent some time trying to enable p5 autocode completion and suggestions 
hasn't worked till now.

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "checkJs": true,
    "lib": [
      "es2015",
      "dom"
    ]
  },
  "include": [
    "**/p5/*.js",
    "p5\\p5.js"
  ]
}
```