import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { FeaturesComponent } from './page/features/features.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { PortfiloComponent } from './page/portfilo/portfilo.component';
import { SolutionComponent } from './page/solution/solution.component';

export const  AppRoutes: Routes = [
 
    { path:'home', component: HomeComponent},
    { path:'contact', component: ContactPageComponent},
    { path:'features', component: FeaturesComponent},
    { path:'portfolio', component: PortfiloComponent},
    { path:'solution', component: SolutionComponent},
    {path:'about',component:AboutUsComponent},
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", component: HomeComponent }
    ]

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes, {useHash: true});
