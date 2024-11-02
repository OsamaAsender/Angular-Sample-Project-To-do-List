import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TodolistComponent } from "./todolist/todolist.component";
import { BrowserModule } from "@angular/platform-browser";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        TodolistComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
   
  })
  export class AppModule { }