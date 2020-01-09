const BasicLayout = () => import('@/components/BasicLayout.vue')
const Article = () => import('@/views/article.vue')
const ArticleCreate = () => import('@/views/article_create.vue')
const ArticleEdit = () => import('@/views/article_edit.vue')
const Class = () => import('@/views/class.vue')
const ClassCreate = () => import('@/views/class_create.vue')
const ClassEdit = () => import('@/views/class_edit.vue')
const Index = () => import('@/views/index.vue')
const IndexShow = () => import('@/views/index_show.vue')
const Login = () => import('@/views/login.vue')
const User = () => import('@/views/user.vue')
const UserCreate = () => import('@/views/user_create.vue')
const UserEdit = () => import('@/views/user_edit.vue')

export default [
  {
    path: '/login',
    component: Login,
    name: 'Login'
  },
  {
    path: '/',
    component: { render: h => h('router-view') },
    name: 'index',
    children: [
      {
        path: '/',
        component: Index,
        name: 'Index'
      },
      {
        path: '/index/:id/show',
        component: IndexShow,
        name: 'IndexShow'
      }
    ]
  },
  {
    path: '/',
    component: BasicLayout,
    name: 'BasicLayout',
    children: [
      {
        path: '/article',
        name: 'article',
        component: { render: h => h('router-view') },
        meta: {
          breadcrumb: {
            title: '文章'
          }
        },
        children: [
          {
            path: '/article',
            component: Article,
            name: 'Article'
          },
          {
            path: '/article/create',
            component: ArticleCreate,
            name: 'ArticleCreate',
            meta: {
              breadcrumb: {
                title: '新建文章'
              }
            }
          },
          {
            path: '/article/:id/edit',
            component: ArticleEdit,
            name: 'ArticleEdit',
            meta: {
              breadcrumb: {
                title: '编辑文章'
              }
            }
          }
        ]
      },
      {
        path: '/user',
        component: { render: h => h('router-view') },
        name: 'user',
        meta: {
          breadcrumb: {
            title: '用户'
          }
        },
        children: [
          {
            path: '/user',
            component: User,
            name: 'User',
            meta: {
              root: true
            }
          },
          {
            path: '/user/create',
            component: UserCreate,
            name: 'UserCreate',
            meta: {
              breadcrumb: {
                title: '新建用户'
              },
              root: true
            }
          },
          {
            path: '/user/:id/edit',
            component: UserEdit,
            name: 'UserEdit',
            meta: {
              breadcrumb: {
                title: '编辑用户'
              },
              root: true
            }
          }
        ]
      },
      {
        path: '/class',
        component: { render: h => h('router-view') },
        name: 'class',
        meta: {
          breadcrumb: {
            title: '分类'
          }
        },
        children: [
          {
            path: '/class',
            component: Class,
            name: 'Class'
          },
          {
            path: '/class/create',
            component: ClassCreate,
            name: 'ClassCreate',
            meta: {
              breadcrumb: {
                title: '新建分类'
              }
            }
          },
          {
            path: '/class/:id/edit',
            component: ClassEdit,
            name: 'ClassEdit',
            meta: {
              breadcrumb: {
                title: '编辑分类'
              }
            }
          }
        ]
      }
    ]
  }
]
