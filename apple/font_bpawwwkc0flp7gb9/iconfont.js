;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M968.312188 899.781884 699.172425 630.643144c24.303522-28.03552 43.899836-59.483766 58.405201-93.780897 18.467607-43.657312 27.830859-90.020246 27.828812-137.797389 0-47.777143-9.361205-94.139054-27.828812-137.798413-17.830087-42.156122-43.349297-80.011288-75.852572-112.51354-32.500205-32.501228-70.356394-58.022485-112.51354-75.852572-43.658336-18.46556-90.0182-27.828812-137.795343-27.828812-47.778166 0-94.139054 9.362228-137.798413 27.828812-42.157145 17.830087-80.011288 43.35032-112.51354 75.852572-32.502251 32.502251-58.022485 70.357418-75.852572 112.51354-18.466584 43.658336-27.829835 90.02127-27.828812 137.798413-0.001023 47.777143 9.362228 94.140077 27.827789 137.799436 17.831111 42.155099 43.351344 80.010265 75.853595 112.511493s70.357418 58.024531 112.51354 75.854619c43.658336 18.46556 90.02127 27.828812 137.799436 27.828812 47.777143 0 94.140077-9.363252 137.796366-27.828812 34.295084-14.507412 65.742307-34.103726 93.777827-58.407248l269.14181 269.136693c4.994758 4.995781 11.542894 7.492648 18.09103 7.492648 6.54609 0 13.095249-2.496867 18.090007-7.492648C978.30375 925.970336 978.301703 909.771399 968.312188 899.781884zM431.414125 701.894931c-80.887238 0-156.934239-31.500435-214.131939-88.698135-57.196677-57.198723-88.696088-133.242653-88.696088-214.131939 0.001023-80.888262 31.500435-156.935262 88.697111-214.131939 57.196677-57.195653 133.243677-88.696088 214.131939-88.696088 80.888262 0.001023 156.933215 31.500435 214.131939 88.697111 57.1977 57.196677 88.696088 133.243677 88.696088 214.131939 0 80.889285-31.501458 156.933215-88.698135 214.130915C588.348364 670.394497 512.301364 701.894931 431.414125 701.894931z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-apple" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M836.608 675.84q41.984 59.392 96.256 76.8-23.552 72.704-74.752 151.552-78.848 118.784-155.648 118.784-28.672 0-84.992-19.456-52.224-19.456-91.136-19.456t-86.016 20.48q-49.152 19.456-80.896 19.456-92.16 0-181.248-156.672-89.088-154.624-89.088-304.128 0-138.24 67.584-226.304 69.632-88.064 172.032-88.064 22.528 0 50.176 5.632t57.344 20.992q31.744 17.408 52.224 24.064t31.744 6.656q13.312 0 40.96-6.144t55.296-22.528q29.696-16.384 51.2-24.576t44.032-8.192q71.68 0 129.024 38.912 30.72 20.48 62.464 60.416-47.104 40.96-68.608 71.68-39.936 57.344-39.936 124.928 0 74.752 41.984 135.168zM630.784 197.632q-35.84 33.792-65.536 44.032-10.24 3.072-26.112 5.632t-36.352 4.608q1.024-90.112 47.104-155.648t151.552-90.112q2.048 10.24 3.072 14.336l0 11.264q0 36.864-17.408 82.944-18.432 45.056-56.32 82.944z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-s" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M862.71671 1019.416612 193.694467 1019.416612c-27.101241 0-49.157583-22.056342-49.157583-49.157583L144.536884 320.885288c0-27.101241 22.056342-49.157583 49.157583-49.157583l669.022243 0c27.101241 0 49.157583 22.056342 49.157583 49.157583l0 649.372717C911.874293 997.36027 889.817951 1019.416612 862.71671 1019.416612zM193.694467 320.486198l-0.399089 649.77283 669.421332 0.399089c0.217964 0 0.399089-0.181125 0.399089-0.399089L863.115799 320.885288 193.694467 320.486198z"  ></path>'+
      ''+
      '<path d="M276.608875 299.04691l-49.339732-4.743024C243.191788 128.512932 374.670262 3.494591 533.10569 3.494591c153.426345 0 284.409538 120.589472 304.699654 280.501532l-49.169863 6.243191C771.491009 155.021679 661.632949 53.052287 533.10569 53.052287 400.332734 53.052287 290.063305 158.808936 276.608875 299.04691z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
