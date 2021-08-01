import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { landingReducer } from './redux/landing/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LandingEffectsService } from './redux/landing/landing-effects.service';
import { KeesComponent } from './routes/kees/kees.component';
import { LandingComponent } from './routes/landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { KeesEffectsService } from './redux/kees/kees-effects.service';
import { keesReducer } from './redux/kees/reducer';
import { AdminComponent } from './routes/kees/admin/admin.component';
import { TestImageComponent } from './routes/kees/admin/test-image/test-image.component';
import { testImageReducer } from './redux/test-image/reducer';
import { TestImageEffectsService } from './redux/test-image/test-image-effects.service';
import { MatIconModule } from '@angular/material/icon';
import { LandingEffectsElectricalServicesService } from './redux/landing/landing-effects-electrical-services.service';
import { UploadEffectsService } from './redux/upload/upload-effects.service';
import { uploadReducer } from './redux/upload/reducer';
import { KeesProductsEffectsService } from './redux/kees-products/kees-products-effects.service';
import { KeesProductsComponent } from './routes/kees/admin/kees-products/kees-products.component';
import { backendReducer } from './redux/backend/reducer';
import { keesProductsReducer } from './redux/kees-products/reducer';
import { CustomerProductsComponent } from './routes/landing/customer-products/customer-products.component';
import { CustomerProductsEffectsService } from './redux/customer-products/customer-products-effects.service';
import { customerProductsReducer } from './redux/customer-products/reducer';
@NgModule({
  declarations: [
    AppComponent,
    KeesComponent,
    LandingComponent,
    AdminComponent,
    TestImageComponent,
    KeesProductsComponent,
    CustomerProductsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      landing: landingReducer,
      kees: keesReducer,
      testImage: testImageReducer,
      upload: uploadReducer,
      backend: backendReducer,
      keesProducts: keesProductsReducer,
      customerProducts: customerProductsReducer
    }),
    EffectsModule.forRoot([
      LandingEffectsService,
      KeesEffectsService,
      TestImageEffectsService,
      LandingEffectsElectricalServicesService,
      UploadEffectsService,
      KeesProductsEffectsService,
      CustomerProductsEffectsService
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
