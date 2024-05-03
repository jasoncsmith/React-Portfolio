/**
 *
 * @param {string} str input to remove special chars
 * @returns {string} sanitized string
 */
export function sanitize(str: string) {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  }
  const regEx = /[&<>"'/]/gi
  return str.replace(regEx, (val: string) => map[val])
}
