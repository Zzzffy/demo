import './index.css'

const $ = e => document.querySelector(e)

$('.reload').addEventListener('click', () => $('iframe').contentWindow.location.href = '/m.html')

window.onload = function () {
  history.replaceState(null, '贪吃蛇', location.pathname.split('/').slice(0,-1).join('/'))
}
