import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AuthGuard } from "./auth/auth-guard.service";
import { NewMessageComponent } from "./message/new-message/new-message.component";
import { ContentAreaComponent } from "./content-area/content-area.component";
import { MessageTableComComponent } from "./message/message-table-com/message-table-com.component";



const appRoutes:Routes = [
    {path: '', redirectTo: '/login', pathMatch:'full'},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path:'home', component: ContentAreaComponent, canActivate:[AuthGuard]},
    {path:'message-list', component:MessageTableComComponent, canActivate:[AuthGuard]},
    {path:'new-message', component:NewMessageComponent, canActivate:[AuthGuard]},

];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}