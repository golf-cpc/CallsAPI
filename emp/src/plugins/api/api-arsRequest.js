import axios from 'axios'
import withResolve from '@cdglib/js-resolve-style'
import { toNumber } from 'lodash'

const getArsRequest = async (rcode = 0) => {
  if (toNumber(rcode) === 0) return { error: new Error('Require rcode') }
  const api = () => axios.get(`/api/ars/request/v1/move/?rcode.code=${rcode}&flag=0&year=2562`) // &flag=0 คือ รออนุมัติ
  const [error, result] = await withResolve(api)()
  if (error) return { error }
  // console.log('result-api', typeof result.data)
  return { error, result: result.data }
}

export default { getArsRequest }
