import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import PrivateRoute from "./routes/ProtectedRoutes";
import Home from "./pages/home/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import Auth from "./pages/auth/Auth";
import Page404 from "./pages/Page404";
import Features from "./pages/features/Features";
import Bot from "./pages/bot/Bot";
import AnimeDetails from "./pages/anime-details/AnimeDetails";
import AnimeWatch from "./pages/anime-watch/AnimeWatch";
import Profile from "./pages/profile/Profile";

setupIonicReact();

const App: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem("authToken");

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch>
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/feature" component={Features} />
            <PrivateRoute exact path="/bot" component={Bot} />
            <PrivateRoute exact path={`/anime/:id`} component={AnimeDetails} />
            <PrivateRoute exact path={`/watch/:id`} component={AnimeWatch} />
            <PrivateRoute exact path={`/profile`} component={Profile} />


            <Route exact path="/auth">
              {isAuthenticated ? <Redirect to="/home" /> : <Auth />}
            </Route>
            <Route path="/" exact>
              <Redirect to="/auth" />
            </Route>
            <Route path="/not-found" exact component={Page404}></Route>
            <Route path="*" exact>
              {/* <Redirect to="not-found" /> */}
            </Route>
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
