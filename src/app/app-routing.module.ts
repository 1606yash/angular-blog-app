import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home/home.component";
import { RegistrationComponent } from "./registration/registration/registration.component";
import { LoginComponent } from "./login/login/login.component";
import { UserListingComponent } from "./user-listing/user-listing/user-listing.component";

const appRoutes:Routes = [
    { path: '', component:HomeComponent, pathMatch: 'full'},
    { path: 'user-registration', component:RegistrationComponent},
    { path: 'login', component:LoginComponent, children: [
        { path: 'user-listing', component:UserListingComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}