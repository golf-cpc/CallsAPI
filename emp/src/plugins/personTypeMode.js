import { toNumber } from 'lodash'

const isOrs67 = (pid, natCode) => {
  if (toNumber(pid).toString().length !== 13) return false
  if (!natCode) return false

  const splited = pid.toString().split('')

  if (splited[0] === '6') return !['5', '6', '7', '8'].includes(pid[5])
  if (splited[0] === '7') return true

  return false
}

const isOrs = (pid, natCode) => {
  if (toNumber(pid).toString().length !== 13) return false
  if (natCode) return toNumber(natCode) === 99 && !isOrs67(pid)

  return true
}

const isLpop = (pid) => {
  if (toNumber(pid).toString().length !== 12) return false

  const splited = pid.toString().split('')

  return splited[0] !== '0'
}

const isArs = (pid) => {
  if (toNumber(pid).toString().length !== 11) return false

  const splited = pid.toString().split('')

  return splited[0] !== '0'
}

export const personType = (pid = 0, natCode = null) => {
  if (isOrs67(pid, natCode)) return 'ors67'
  if (isLpop(pid)) return 'lpop'
  if (isArs(pid)) return 'ars'
  if (isOrs(pid, natCode)) return 'ors'


  return ''
}

export default { personType }
