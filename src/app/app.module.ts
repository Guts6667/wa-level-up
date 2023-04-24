import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { ErrorComponent } from "./pages/error/error.component";
import { HeaderComponent } from "./components/header/header.component";
import { StatsComponent } from "./components/stats/stats.component";
import { EquipmentsComponent } from "./components/equipments/equipments.component";
import { EquipmentItemComponent } from "./components/equipment-item/equipment-item.component";
import { AdventuresComponent } from "./components/adventures/adventures.component";
import { AdventureItemComponent } from "./components/adventure-item/adventure-item.component";
import { DonjonsComponent } from "./components/dungeons/donjons.component";
import { UserInfosComponent } from "./components/user-infos/user-infos.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./pages/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    ErrorComponent,
    HeaderComponent,
    StatsComponent,
    EquipmentsComponent,
    EquipmentItemComponent,
    AdventuresComponent,
    AdventureItemComponent,
    DonjonsComponent,
    UserInfosComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
