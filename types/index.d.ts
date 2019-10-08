interface KeyParseResult {
  /**
   * the file name
   * @example
   * 'b'
   */
  name: string
  /**
   * the file ext 
   * @example
   * '.vue'
   */
  ext: string
  /**
   * file.name + file.ext
   * @example
   * 'b.vue'
   */
  base: string
  dir: string
  entry: string
  dir_dash: string
  entry_dash: string
}

/**
 * @param {string} keyPath
 * @example
 * var key = './plugin/a/b.vue'
 * parsedKeyPath(key) // => {
 *  ext:'.vue',
 *  name: 'b',
 *  base: 'b.vue',
 *  dir： 'plugin/a',
 *  entry: 'plugin/a/b'
 *  dir_dash:'plugin-a',
 *  entry_dash: 'plugin-a-b'
 * }
 *
 */
export function parse(key: string): KeyParseResult
