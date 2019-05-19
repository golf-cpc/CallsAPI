import axios from 'axios'
import withResolve from '@cdglib/js-resolve-style'
import { isEmpty } from 'lodash'

const findByHtype = async (htype) => {
  if (isEmpty(htype)) return { error: new Error('Require htype') }

  const getHtype = () => axios.get(`/api/tabdb/htype/v1/${htype}`)
  // console.log(getHtype);

  const [error, result] = await withResolve(getHtype)()
  if (error) return { error }

  return { error, result: result.data }
}

export default { findByHtype }
