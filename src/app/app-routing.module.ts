import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'child-assign-test',
    loadChildren: () => import('./child-assign-test/child-assign-test.module').then( m => m.ChildAssignTestPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-student',
    loadChildren: () => import('./add-student/add-student.module').then( m => m.AddStudentPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'main-dash-board',
    loadChildren: () => import('./main-dash-board/main-dash-board.module').then( m => m.MainDashBoardPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'system-tests',
    loadChildren: () => import('./system-tests/system-tests.module').then( m => m.SystemTestsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'test-definition',
    loadChildren: () => import('./test-definition/test-definition.module').then( m => m.TestDefinitionPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'step',
    loadChildren: () => import('./step/step.module').then( m => m.StepPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'take-test',
    loadChildren: () => import('./take-test/take-test.module').then( m => m.TakeTestPageModule),
    canActivate: [AuthGuard]
  },   {
    path: 'done-test',
    loadChildren: () => import('./done-test/done-test.module').then( m => m.DoneTestPageModule)
  },
  {
    path: 'take-test-clickable',
    loadChildren: () => import('./take-test-clickable/take-test-clickable.module').then( m => m.TakeTestClickablePageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
