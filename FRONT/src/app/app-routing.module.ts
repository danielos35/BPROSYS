import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BprosysComponent } from './bprosys/bprosys.component';

const routes: Routes = [{
  path:'',
  component: BprosysComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
