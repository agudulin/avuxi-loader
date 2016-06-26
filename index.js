const AVUXI_CALLBACK = 'avapilLoaded'
const AVUXI_SCRIPT_ID = 'vxscript'
const AVUXI_URL = 'https://m.avuxiapis.com/av/'
const AVUXI_LOCALES = ['en', 'de']
const DEFAULT_LOCALE = 'en'

const injectScriptTagToBody = ({ isAsync, id, src, type }) => {
  const script = document.createElement('script')

  script.id = id
  script.type = type || 'text/javascript'
  script.async = isAsync && 'async'
  script.src = src

  document.body.appendChild(script)
}

export default (googleMap, locale, userId) => (new Promise((resolve) => {
  const avuxiScriptTag = document.getElementById(AVUXI_SCRIPT_ID)
  const widgetLocale = AVUXI_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE

  const createScriptTag = () => {
    window[AVUXI_CALLBACK] = () => window.AVUXI.start(googleMap)

    injectScriptTagToBody({
      isAsync: true,
      id: AVUXI_SCRIPT_ID,
      src: `${AVUXI_URL}/${userId}?callback=${AVUXI_CALLBACK}&ln=${widgetLocale}`
    })
  }

  if (!avuxiScriptTag) {
    createScriptTag()
  }

  resolve()
}))
