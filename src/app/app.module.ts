import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from './shared/dropdown-directive';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToggleService } from './shared/services/toggle.service';
import { ContentAreaComponent } from './content-area/content-area.component';
import { SearchAreaComponent } from './search-area/search-area.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { skillsService } from './shared/skill.service';
import { SkillsComponent } from './content-area/skills/skills.component';
import { SkillListComponent } from './content-area/skill-list/skill-list.component';
import { authService } from './auth/auth.service';
import { MessageTableComComponent } from './message/message-table-com/message-table-com.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatSlideToggleModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { AuthGuard } from './auth/auth-guard.service';
import { NewMessageComponent } from './message/new-message/new-message.component';
import {registerService} from './auth/register.service';


@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DropdownDirective,
    SidebarComponent,
    ContentAreaComponent,
    SearchAreaComponent,
    RegisterComponent,
    LoginComponent,
    SkillsComponent,
    SkillListComponent,
    MessageTableComComponent,
    NewMessageComponent,

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, 
    NgbModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatSlideToggleModule, MatCheckboxModule,AngularFireDatabaseModule,
   
  ],
  providers: [ToggleService, skillsService, authService, AuthGuard, registerService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }     
