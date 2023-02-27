let BASE_URL = ''
const TIME_OUT = 3000

switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = 'http://localhost:4399/api'
    break
  case 'production':
    BASE_URL = 'http://coderwhy.org/dev'
    break
  case 'test':
    BASE_URL = 'http://coderwhy.org/test'
    break
  default:
    console.log('config error')
    break
}

export { BASE_URL, TIME_OUT }
