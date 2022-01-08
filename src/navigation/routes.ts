import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Actions from '../screens/Actions';
import Portfolio from '../screens/Portfolio';
import Prices from '../screens/Prices';

interface Props {}
interface Routes {
    name: string;
    icon: string | 'person';
    Component: (props: Props) => JSX.Element;
}
export const routes: Routes[] = [
    {
        name: 'Home',
        Component: Home,
        icon: 'home'
    },
    {
        name: 'Settings',
        Component: Settings,
        icon: ''
    },
    {
        name: 'Actions',
        Component: Actions,
        icon: 'person'
    },
    {
        name: 'Portfolio',
        Component: Portfolio,
        icon: 'pie-chart'
    },
    {
        name: 'Prices',
        Component: Prices,
        icon: 'cellular'
    }
];
