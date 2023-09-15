import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-farmer-details',
  templateUrl: './farmer-details.component.html',
  styleUrls: ['./farmer-details.component.scss'],
})
export class FarmerDetailsComponent implements OnInit, AfterContentChecked {

  @ViewChild('swiper') swiper: SwiperComponent;

  id: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  last_slide = false;

  ionicForm: FormGroup;
  // Swiper config
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: { clickable: false },
    allowTouchMove: false // set true to allow swiping
  };

  constructor(private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder) {}

  get errorControl() {
    return this.ionicForm.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('Farmer Id : ', this.id);

    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  ngAfterContentChecked(): void {

    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

  // Trigger swiper slide change
  swiperSlideChanged(e) {
    // console.log(e);
  }

  // Go to next slide
  nextSlide() {
    this.swiper.swiperRef.slideNext(500);
  }

  // Last slide trigger
  onLastSlide() {
    this.last_slide = true;
  }

   // Go to main content
   async submitForm() {

    if (this.ionicForm.valid) {
      console.log(this.ionicForm.value);
      // Navigate to /home
    this.router.navigateByUrl('/farm/farmers');
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  }
}
