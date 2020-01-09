import request from '@/global/request/axios'
import API from '@/global/request/api'

const classService = {
  classInsert (data) {
    return request.post(API.classInsert, data)
  },
  classUpdate (data, id) {
    return request.put(API.classUpdate(id), data)
  },
  classDelete (id) {
    return request.delete(API.classDelete(id))
  },
  classShow () {
    return request.get(API.classShow)
  },
  classEdit (id) {
    return request.get(API.classEdit(id))
  }
}

export default classService
