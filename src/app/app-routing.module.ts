import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { ErrorComponent } from "./pages/error/error.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: LoginComponent },
  { path: "home/:name", component: HomeComponent },
  { path: "settings/:name", component: SettingsComponent },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
