import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSlideComponent } from './image-slide/image-slide.component';
import { ImageSliderComponent } from './image-slider.component';



@NgModule({
  declarations: [ImageSliderComponent, ImageSlideComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ImageSliderComponent
  ]
})
export class ImageSliderModule { }
