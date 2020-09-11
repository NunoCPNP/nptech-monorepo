function info(message) {
  console.log(`%c${message}`, 'color: white; background-color: green; padding: 2px 5px;')
}

function warning(message) {
  console.log(`%c${message}`, 'color: white; background-color: yellow; padding: 2px 5px;')
}

function error(message) {
  console.log(`%c${message}`, 'color: white; background-color: red; padding: 2px 5px;')
}

module.exports = {
  info,
  warning,
  error,
}
