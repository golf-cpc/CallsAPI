import axios from 'axios'
import withResolve from '@cdglib/js-resolve-style'
import { isEmpty } from 'lodash'

const ImgByPID = async (dataBp) => {
  if (isEmpty(dataBp)) return { error: new Error('Require dataBp') }

  const getPop = () => axios.get(`/api/idcard/imgcard/v1/${dataBp}`)

  const [error, result] = await withResolve(getPop)()
  if (error) return { error }

  return { error, result: result.data }
}

export default { ImgByPID }
