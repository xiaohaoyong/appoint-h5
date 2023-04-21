export function httpGet (url) {}
export function getUrlParam (url, name) {
  const pattern = new RegExp('[?&]' + name + '=([^&]+)', 'g')
  const matcher = pattern.exec(url)
  let items = ''
  if (matcher != null) {
    try {
      items = decodeURIComponent(decodeURIComponent(matcher[1]))
    } catch (e) {
      try {
        items = decodeURIComponent(matcher[1])
      } catch (e) {
        items = matcher[1]
      }
    }
  }
  return items
}
