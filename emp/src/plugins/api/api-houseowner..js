import axios from 'axios'
import withResolve from '@cdglib/js-resolve-style'
import { isEmpty } from 'lodash'

const findByHID = async (hid) => {
  if (isEmpty(hid)) return { error: new Error('Require HID') }

  const getPopOwner = () => axios.get(`api/ors/pop/v1/?hid=${hid}&&terminateDate=0&&ownerStatus.code=1`)

  const [error, result] = await withResolve(getPopOwner)()
  if (error) return { error }

  return { error, result: result.data }
}

export default { findByHID }
