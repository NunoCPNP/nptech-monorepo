function info(message, production) {
  if (production) {
    console.log(`%c${message}`, 'color: white; background-color: green; padding: 2px 5px;')
  } else if (process.env.NODE_MODULES === 'development') {
    console.log(`%c${message}`, 'color: white; background-color: green; padding: 2px 5px;')
  } else return
}

function warning(message, production) {
  if (production) {
    console.log(`%c${message}`, 'color: white; background-color: yellow; padding: 2px 5px;')
  } else if (process.env.NODE_MODULES === 'development') {
    console.log(`%c${message}`, 'color: white; background-color: yellow; padding: 2px 5px;')
  } else return
}

function error(message, production) {
  if (production) {
    console.log(`%c${message}`, 'color: white; background-color: red; padding: 2px 5px;')
  } else if (process.env.NODE_MODULES === 'development') {
    console.log(`%c${message}`, 'color: white; background-color: red; padding: 2px 5px;')
  } else return
}

function logger(type, message, production) {
  if (type === 'info') {
    info(message, production)
  } else if (type === 'warning') {
    warning(message, production)
  } else if (type === 'error') {
    error(message, production)
  } else {
    return console.error('Invalid type, please use "info", "warning" or "error"')
  }
}

module.exports = logger
