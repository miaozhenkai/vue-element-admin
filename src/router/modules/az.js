/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const azRouter = {
  path: '/az',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  name: 'AZ',
  meta: {
    title: 'AZ',
    icon: 'bug'
  },
  children: [
    {
      path: 'ip-table',
      component: () => import('@/views/table/ip-table'),
      name: 'IpTable',
      meta: { title: 'Ip Table' }
    }
  ]
}
export default azRouter
