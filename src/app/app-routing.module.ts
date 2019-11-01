import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MountainsLoadedGuard } from './guards/mountains-loaded.guard';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  canActivate: [MountainsLoadedGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
