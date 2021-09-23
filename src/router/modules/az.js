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
      path: 'ip-allow-table',
      component: () => import('@/views/table/ip-allow-table'),
      name: 'IpAllowTable',
      meta: { title: 'Ip Allow Table' }
    }
  ]
}
export default azRouter
