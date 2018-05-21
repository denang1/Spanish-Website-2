import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlideContainerComponent } from './slide-container/slide-container.component';
import { SlideComponent } from './slide/slide.component';
import { MnFullpageModule } from 'ngx-fullpage';
import { Loader } from './loader/loader.component';

// import { CarouselComponent } from './carousel/carousel.component';
// import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideContainerComponent,
    SlideComponent,
    Loader,
    // CarouselComponent,
    // CarouselItemComponent
  ],
  imports: [
    BrowserModule,
    MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
