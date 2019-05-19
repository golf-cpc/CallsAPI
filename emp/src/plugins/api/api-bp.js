import axios from 'axios'
import withResolve from '@cdglib/js-resolve-style'
import { isEmpty } from 'lodash'

const BPByPID = async (pid) => {
  if (isEmpty(pid)) return { error: new Error('Require PID') }
  // console.log(`/api/idcard/smcard/v1/getAllSMcardByPidWithCard/${pid}`)
  const getBP = () => axios.get(`/api/idcard/smcard/v1/getAllSMcardByPidWithCard/${pid}`)

  const [error, result] = await withResolve(getBP)()
  if (error) return { error }

  return { error, result: result.data }
}

export default { BPByPID }
