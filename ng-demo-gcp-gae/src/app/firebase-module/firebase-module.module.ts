import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireDatabaseModule,       
    AngularFirestoreModule
  ],
  exports: [AngularFirestoreModule]
})
export class FirebaseModuleModule { }
