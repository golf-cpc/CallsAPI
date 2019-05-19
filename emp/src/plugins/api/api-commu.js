import axios from 'axios'
import withResolve from '@cdglib/js-resolve-style'
import { isEmpty } from 'lodash'

const findByCommu = async (commu) => {
  if (isEmpty(commu)) return { error: new Error('Require commu') }

  const getCommu = () => axios.get(`/api/tabdb/commu/v1/${commu}`)

  const [error, result] = await withResolve(getCommu)()
  if (error) return { error }

  return { error, result: result.data }
}

export default { findByCommu }
