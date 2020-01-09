import request from '@/global/request/axios'
import API from '@/global/request/api'

const articleService = {
  articleInsert (data) {
    return request.post(API.articleInsert, data)
  },
  articleUpdate (data, id) {
    return request.put(API.articleUpdate(id), data)
  },
  articleDelete (id) {
    return request.delete(API.articleDelete(id))
  },
  articleShow (data) {
    return request.get(API.articleShow, data)
  },
  articleEdit (id) {
    return request.get(API.articleEdit(id))
  },
  indexShow (id) {
    return request.get(API.indexShow(id))
  },
  indexHome () {
    return request.get(API.indexHome)
  }
}
export default articleService
