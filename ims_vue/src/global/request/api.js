// const PREFIX = ''
// const VERSION = ''
export default {
  // version: VERSION,
  phoneCode: `/api/sms/phone`,
  loginPassword: `/api/login/password`,
  loginSMS: `/api/login/sms`,
  userInfo: `/api/userInfo`,
  userInsert: `/api/user`,
  userUpdate: (id) => `/api/user/${id}/edit`,
  userDelete: (id) => `/api/user/${id}`,
  userShow: `/api/user`,
  userEdit: (id) => `/api/user/${id}/edit`,
  // userPagination: `/api/user`,
  articleInsert: `/api/article`,
  articleUpdate: (id) => `/api/article/${id}`,
  articleDelete: (id) => `/api/article/${id}`,
  articleShow: `/api/article`,
  articleEdit: (id) => `/api/article/${id}/edit`,
  classInsert: `/api/class`,
  classUpdate: (id) => `/api/class/${id}`,
  classDelete: (id) => `/api/class/${id}`,
  classShow: `/api/class`,
  classEdit: (id) => `/api/class/${id}/edit`,
  authLogin: `/api/login`,
  indexHome: `/api/index`,
  indexShow: (id) => `/api/index/${id}/show`
}
