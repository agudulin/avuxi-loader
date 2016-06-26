const DEFAULT_OPTIONS = {
  availableLocales: ['en', 'de'],
  callback: 'avapilLoaded',
  locale: 'en',
  scriptId: 'vxscript',
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

export default (
  userId,
  googleMap,
  options
) => (
  new Promise((resolve) => {
    const avuxiOptions = Object.assign({}, DEFAULT_OPTIONS, options)
    const { availableLocales, callback, locale, scriptId, url } = avuxiOptions

    const avuxiScriptTag = document.getElementById(scriptId)
    const avuxiLocale = availableLocales.includes(locale) ? locale : 'en'

    const createScriptTag = () => {
      window[callback] = () => window.AVUXI.start(googleMap)

      injectScriptTagToBody({
        isAsync: true,
        id: scriptId,
        src: `${url}/${userId}?callback=${callback}&ln=${avuxiLocale}`
      })
    }

    if (!avuxiScriptTag) {
      createScriptTag()
    }

    resolve()
  })
)
