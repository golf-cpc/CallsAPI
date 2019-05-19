import axios from 'axios'
import withResolve from '@cdglib/js-resolve-style'
import { isEmpty } from 'lodash'

const findByHID = async (hid) => {
  if (isEmpty(hid)) return { error: new Error('Require HID') }

  const getHouse = () => axios.get(`/api/ors/house/v1/${hid}`)

  const [error, result] = await withResolve(getHouse)()
  if (error) return { error }

  return { error, result: result.data }
}

export default { findByHID }
