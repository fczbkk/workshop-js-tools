export function callOnce (fn) {
  let hasBeenCalled = false
  return function () {
    if (!hasBeenCalled) {
      hasBeenCalled = true
      fn()
    }
  }
}

export function ajax (url) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        resolve(xhr)
      }
    }
    xhr.open('GET', url, true)
    xhr.send()
  })
}

export function callLater (fn, delay) {
  setTimeout(fn, delay * 1000)
}
