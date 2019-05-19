import axios from 'axios'
import withResolve from '@cdglib/js-resolve-style'
import { isEmpty } from 'lodash'

const findByPID = async (pid) => {
  if (isEmpty(pid)) return { error: new Error('Require PID') }

  const getPop = () => axios.get(`/api/ars/apop/v1/${pid}`)

  const [error, result] = await withResolve(getPop)()
  if (error) return { error }

  return { error, result: result.data }
}

export default { findByPID }
