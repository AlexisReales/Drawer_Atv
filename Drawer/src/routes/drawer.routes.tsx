import { createDrawerNavigator } from "@react-navigation/drawer";

const { Screen, Navigator } = createDrawerNavigator()

import { ScreenA } from "../screens/screenA";
import { ScreenB } from "../screens/screenB";
import { ScreenC } from "../screens/screenC";

export function DrawerRoutes(){
    return(
        <Navigator>
            <Screen
                name="Home"
                component={ScreenA}
            />
            <Screen
                name="Dowload"
                component={ScreenB}
            />
            <Screen
                name="Reclamação"
                component={ScreenC}
            />
        </Navigator>
    )
}