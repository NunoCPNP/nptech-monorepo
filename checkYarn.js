if (!/yarn\.js$/.test(process.env.npm_execpath || '')) {
  console.warn('\u001b[33mThis repository requires Yarn 1.x for scripts to work properly.\u001b[39m\n')
  process.exit(1)
}

console.log('')
console.log(' /$$   /$$ /$$$$$$$  /$$$$$$$$                  /$$      ')
console.log('| $$$ | $$| $$__  $$|__  $$__/                 | $$      ')
console.log('| $$$$| $$| $$  \\ $$   | $$  /$$$$$$   /$$$$$$$| $$$$$$$ ')
console.log('| $$ $$ $$| $$$$$$$/   | $$ /$$__  $$ /$$_____/| $$__  $$')
console.log('| $$  $$$$| $$____/    | $$| $$$$$$$$| $$      | $$  \\ $$')
console.log('| $$\\  $$$| $$         | $$| $$_____/| $$      | $$  | $$')
console.log('| $$ \\  $$| $$ /$$     | $$|  $$$$$$$|  $$$$$$$| $$  | $$')
console.log('|__/  \\__/|__/|__/     |__/ \\_______/ \\_______/|__/  |__/')
console.log('')
