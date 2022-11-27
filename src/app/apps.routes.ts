import { HomeComponent } from "./home/home.component";
import { AuthComponent} from "./auth/auth.component";

const redirectToUrl = '';

type PathMatch = "full" | "prefix" | undefined;

const routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' as PathMatch},
  { path: 'auth', component: AuthComponent, pathMatch: 'full' as PathMatch},
  { path: '', redirectTo: "auth", pathMatch: 'full'as PathMatch},
  { path: 'authorized', redirectTo: "auth", pathMatch: 'full'as PathMatch},
  { path: 'login', redirectTo: redirectToUrl, pathMatch: 'full'as PathMatch}
];

export default routes;
