import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

//Layouts
import { FullLayoutComponent }      from './layouts/full-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'denox',
                loadChildren: './denox/denox.module#DenoxModule'
            },
            {
                path: 'paintbooths',
                loadChildren: './paintbooths/paintbooths.module#PaintBoothsModule'
            },
            {
                path: 'ff',
                loadChildren: './ff/ff.module#FfModule'
            },
            {
                path: 'incinerators',
                loadChildren: './incinerators/incinerators.module#IncineratorsModule'
            },
            {
                path: 'pharma',
                loadChildren: './pharma/pharma.module#PharmaModule'
            },
            {
                path: 'esp',
                loadChildren: './esp/esp.module#EspModule'
            },
            {
                path: 'mobiletest',
                loadChildren: './mobiletest/mobiletest.module#MobileTestModule'
            },
            {
                path: 'acidgas',
                loadChildren: './acidgas/acidgas.module#AcidGasModule'
            },
            {
                path: 'references',
                loadChildren: './references/references.module#ReferencesModule'
            },
            {
                path: 'pands',
                loadChildren: './pands/pands.module#PandSModule'
            },
            {
                path: 'fiberovens',
                loadChildren: './fiberovens/fiberovens.module#FiberOvensModule'
            },
            {
                path: 'rubplast',
                loadChildren: './rubplast/rubplast.module#RubPlastModule'
            },
            {
                path: 'mact',
                loadChildren: './mact/mact.module#MactModule'
            },
            {
                path: 'alumcast',
                loadChildren: './alumcast/alumcast.module#AlumCastModule'
            },
            {
                path: 'semiconductors',
                loadChildren: './semiconductors/semiconductors.module#SemiconductorsModule'
            },
            {
                path: 'construction',
                loadChildren: './construction/construction.module#ConstructionModule'
            },
            {
                path: 'rto',
                loadChildren: './rto/rto.module#RtoModule'
            },
            {
                path: 'auxequip',
                loadChildren: './auxequip/auxequip.module#AuxEquipModule'
            },
            {
                path: 'steelscarf',
                loadChildren: './steelscarf/steelscarf.module#SteelScarfModule'
            },
            {
                path: 'tools',
                loadChildren: './tools/tools.module#ToolsModule'
            },
            {
                path: 'cementkilns',
                loadChildren: './cementkilns/cementkilns.module#CementKilnsModule'
            },
            {
                path: 'wesp',
                loadChildren: './wesp/wesp.module#WespModule'
            },
            {
                path: 'productlit',
                loadChildren: './productlit/productlit.module#ProductLitModule'
            },
            {
                path: 'glassfurnaces',
                loadChildren: './glassfurnaces/glassfurnaces.module#GlassFurnacesModule'
            },
            {
                path: 'boilers',
                loadChildren: './boilers/boilers.module#BoilersModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#CustomersModule'
            },
            {
                path: 'files',
                loadChildren: './files/files.module#FilesModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#LocationModule'
            },
            {
                path: 'aboutus',
                loadChildren: './aboutus/aboutus.module#AboutUsModule'
            },
            {
                path: 'contactus',
                loadChildren: './contactus/contactus.module#ContactUsModule'
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
