import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home/home.component";
import { RegistrationComponent } from "./registration/registration/registration.component";
import { LoginComponent } from "./login/login/login.component";
import { AuthGuard } from "./auth.guard";
import { SellCarComponent } from "./sell-car/sell-car.component";
import { PostListingComponent } from "./post-listing/post-listing/post-listing.component";
import { UpdateProfileComponent } from "./update-profile/update-profile.component";


const appRoutes:Routes = [
    { path: '', component:HomeComponent, pathMatch: 'full'},
    { path: 'user-registration', component:RegistrationComponent},
    { path: 'login', component:LoginComponent},
    { path: 'sell-car', component:SellCarComponent, canActivate:[AuthGuard]},
    { path: 'my-posts', component:PostListingComponent, canActivate:[AuthGuard]},
    { path: 'update-profile', component: UpdateProfileComponent, canActivate:[AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}