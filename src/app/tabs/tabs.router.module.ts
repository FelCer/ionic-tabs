import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#homePageModule'
          }
        ]
      },
      {
        path: 'idproducto',
        children: [
          {
            path: '',
            /*
            los .. carpeta atras
            tab2 la carpeta que va acceder
            tab2.module el archivo que se va escoger
            #
            productoPageModule la clase que se esta exportando
            */ 
            loadChildren: '../tab2/tab2.module#ProductoPageModule'
          }
        ]
      },
      {
        path: 'idcontacto',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'tabnuevo',
        children: [
          {
            path: '',
            loadChildren: '../nuevo-tab/nuevo-tab.module#NuevoTabPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
