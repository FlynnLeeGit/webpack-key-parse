# webpack-key-parse

simple function parse webpack key context string

```js
import { parse } from "webpack-key-parse";


const key = './plugin/a/b.vue'

parse(key)
// {
//    ext:'.vue',
//    name: 'b',
//    base: 'b.vue',
//    dir： 'plugin/a',
//    entry: 'plugin/a/b'
//    dir_dash:'plugin-a',
//    entry_dash: 'plugin-a-b'
//  }

```
