import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home/home.component";
import { RegistrationComponent } from "./registration/registration/registration.component";
import { LoginComponent } from "./login/login/login.component";
import { AuthGuard } from "./auth.guard";
import { SellCarComponent } from "./sell-car/sell-car.component";


const appRoutes:Routes = [
    { path: '', component:HomeComponent, pathMatch: 'full'},
    { path: 'user-registration', component:RegistrationComponent},
    { path: 'login', component:LoginComponent},
    { path: 'sell-car', component:SellCarComponent, canActivate:[AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}