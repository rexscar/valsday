import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  yesButtonScale = 1;
  noButtonPosition = { top: '60%', left: '65%' };

  constructor(private router: Router) {}

  onYesClick() {
    this.router.navigate(['/success']);
  }

  onNoHover() {
    // Make Yes button bigger
    this.yesButtonScale += 0.1;

    // Move No button to random position
    const maxTop = 80;
    const maxLeft = 80;
    const minTop = 20;
    const minLeft = 20;

    const newTop = Math.random() * (maxTop - minTop) + minTop;
    const newLeft = Math.random() * (maxLeft - minLeft) + minLeft;

    this.noButtonPosition = {
      top: `${newTop}%`,
      left: `${newLeft}%`
    };
  }

  onNoTouchStart(event: TouchEvent) {
    // Prevent default touch behavior
    event.preventDefault();
    this.onNoHover();
  }
}
