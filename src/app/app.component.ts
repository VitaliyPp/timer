import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any = 'timer';

  sec: any = '0' + 0;
  min: any = '0' + 0;
  isRunning: boolean = false;
  startTimer: any;

  sub: Subscription;
  intervalStream$ = interval(1000);

  start(): void {
    if (!this.isRunning) {
      this.isRunning = true;
      this.sub = this.intervalStream$.subscribe(() => {

        this.sec++;
        this.sec = this.sec < 10 ? '0' + this.sec : this.sec;

        if (this.sec === 60) {
          this.min++;
          this.min = this.min < 10 ? '0' + this.min : this.min;
          this.sec = '0' + 0;
        }
      })
    } else {
      this.stop();
    }
  }

  stop(): void {
    this.sub.unsubscribe();
    this.isRunning = false;
    this.sec = '0' + 0;
    this.min = '0' + 0;
  }

  pause(): void {
    this.sub.unsubscribe();
    console.log(this.sub);
    this.isRunning = !this.isRunning;
  }

  reset(): void {
    this.sec = '0' + 0;
    this.min = '0' + 0;
  }

}
