import request from '@/global/request/axios'
import API from '@/global/request/api'

const userService = {
  userInsert (data) {
    return request.post(API.userInsert, data)
  },
  userUpdate (data, id) {
    return request.put(API.userUpdate(id), data)
  },
  userDelete (id) {
    return request.delete(API.userDelete(id))
  },
  userShow (data) {
    console.log(123)
    return request.get(API.userShow, data)
  },
  userEdit (id) {
    return request.get(API.userEdit(id))
  }
  // userPagination () {
  //   return request.get(API.userPagination)
  // }
}

export default userService
