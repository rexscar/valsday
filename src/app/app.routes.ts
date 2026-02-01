import { Routes } from '@angular/router';
import { QuestionComponent } from '../pages/question/question.component';
import { SuccessComponent } from '../pages/success/success.component';

export const routes: Routes = [
  { path: '', component: QuestionComponent },
  { path: 'success', component: SuccessComponent },
  { path: '**', redirectTo: '' }
];
