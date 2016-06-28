const AREA_TYPES = {
  sightseeing: 'sights',
  eating: 'eating',
  shopping: 'shopping',
  nightlife: 'partying'
}
const DEFAULT_OPTIONS = {
  availableLocales: ['en', 'de'],
  callback: 'avapilLoaded',
  locale: 'en',
  scriptId: 'vxscript',
  type: AREA_TYPES.sightseeing,
  url: 'https://m.avuxiapis.com/av'
}

const injectScriptTagToBody = ({ isAsync, id, src, type }) => {
  const script = document.createElement('script')

  script.id = id
  script.type = type || 'text/javascript'
  script.async = isAsync && 'async'
  script.src = src

  document.body.appendChild(script)
}

const waitForAvuxiCreatesContainer = (callback) => {
  const container = document.getElementById('vxm')
  if (container) return callback(container)

  window.requestAnimationFrame(() => waitForAvuxiCreatesContainer(callback))
}

export default (
  userId,
  googleMap,
  options
) => (
  new Promise((resolve) => {
    const avuxiOptions = Object.assign({}, DEFAULT_OPTIONS, options)
    const { availableLocales, callback, locale, scriptId, type, url } = avuxiOptions

    const avuxiScriptTag = document.getElementById(scriptId)
    const avuxiLocale = availableLocales.includes(locale) ? locale : 'en'
    const avuxiType = Object.keys(AREA_TYPES).map((k) => AREA_TYPES[k]).includes(type) ? type : AREA_TYPES.sightseeing

    const createScriptTag = () => {
      window[callback] = () => {
        window.AVUXI.start(googleMap, { type: avuxiType })
        waitForAvuxiCreatesContainer((container) => resolve(container))
      }

      injectScriptTagToBody({
        isAsync: true,
        id: scriptId,
        src: `${url}/${userId}?callback=${callback}&ln=${avuxiLocale}`
      })
    }

    if (!avuxiScriptTag) createScriptTag()
  })
)
