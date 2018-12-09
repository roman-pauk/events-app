import PerformersPage from '../components/Pages/PerformersPage'
import FestivalsPage from '../components/Pages/FestivalsPage'

export default [
    {
        path: '/performers',
        name: 'performers',
        component: PerformersPage
    },
    {
        path: '/',
        name: 'festivals',
        component: FestivalsPage
    },
]