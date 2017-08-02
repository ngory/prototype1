import { NgModule } from '@angular/core';  
import { ProfilePage } from './profile';  
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    imports: [
        IonicPageModule.forChild(ProfilePage)
    ],
    exports: [],
    declarations: [ProfilePage],
    providers: [],
})
export class HomeModule { }

