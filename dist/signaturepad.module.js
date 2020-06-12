var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicsignaturepadComponent } from './components/ionicsignaturepad.component';
import { IonicsignaturepadProvider } from './providers/ionicsignaturepad.provider';
import { SignaturePadModule } from 'angular2-signaturepad';
import { IonicModule } from 'ionic-angular';
var IonicSignaturePadModule = /** @class */ (function () {
    function IonicSignaturePadModule() {
    }
    IonicSignaturePadModule_1 = IonicSignaturePadModule;
    IonicSignaturePadModule.forRoot = function () {
        return {
            ngModule: IonicSignaturePadModule_1,
            providers: [IonicsignaturepadProvider]
        };
    };
    var IonicSignaturePadModule_1;
    IonicSignaturePadModule = IonicSignaturePadModule_1 = __decorate([
        NgModule({
            imports: [
                // Only if you use elements like ion-content, ion-xyz...
                IonicModule,
                SignaturePadModule
            ],
            declarations: [
                // declare all components that your module uses
                IonicsignaturepadComponent
            ],
            exports: [
                // export the component(s) that you want others to be able to use
                IonicsignaturepadComponent
            ]
        })
    ], IonicSignaturePadModule);
    return IonicSignaturePadModule;
}());
export { IonicSignaturePadModule };
//# sourceMappingURL=signaturepad.module.js.map