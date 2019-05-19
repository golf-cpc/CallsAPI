import axios from 'axios'
import withResolve from '@cdglib/js-resolve-style'
import { isEmpty } from 'lodash'

const findByScan = async (rcode, year, no, doctype) => {
  if (isEmpty(rcode, year, no, doctype)) return { error: new Error('Require rcode, year, no, doctype') }

  const getDoc = () => axios.get(`/api/ors/request/v1/${rcode}/${year}/${no}/${doctype}`)
  
  const [error, result] = await withResolve(getDoc)()
  if (error) return { error }

  return { error, result: result.data }
}

export default { findByScan }
