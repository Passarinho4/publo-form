import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button-component/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule, MatDatepickerModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule, MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, MatExpansionModule, MatButtonToggleModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { PubloHeaderComponent } from './publo-header/publo-header.component';
import { CreatorStepComponent } from './creator-step/creator-step.component';
import { PubloFooterComponent } from './publo-footer/publo-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PubloHeaderComponent,
    CreatorStepComponent,
    PubloFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
