var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
var HTML_TEMPLATE = "\n<ion-row>\n<ion-col style=\"text-align:right;\" class=\"no-padding\">\n<button ion-button fill=\"clear\" (click)=\"drawClear()\" style=\"--padding-top: 0; --padding-bottom: 0; --padding-start: 0; --padding-end: 0; --margin-top: 4px; --margin-bottom: 0; --margin-start: 0; --margin-end: 8px;\"><ion-icon slot=\"icon-only\" name=\"close\" color=\"dark\"></ion-icon></button>\n</ion-col>\n</ion-row>\n<signature-pad [options]=\"signaturePadOptions\" id=\"signatureCanvas\" (onBeginEvent)=\"drawStart()\" (onEndEvent)=\"drawComplete()\"></signature-pad>";
var IonicsignaturepadComponent = /** @class */ (function () {
    function IonicsignaturepadComponent() {
        this.signaturePadOptions = {};
        this.onTouch = function () { };
        this.disabled = false;
        this.signaturePadOptions = {
            minWidth: 2,
            canvasWidth: 800,
            canvasHeight: 240,
            backgroundColor: 'rgb(255,255,255)'
        };
    }
    IonicsignaturepadComponent_1 = IonicsignaturepadComponent;
    IonicsignaturepadComponent.prototype.ngOnInit = function () {
    };
    IonicsignaturepadComponent.prototype.onChange = function (data) {
    };
    Object.defineProperty(IonicsignaturepadComponent.prototype, "canvasWidth", {
        set: function (data) {
            this.signaturePadOptions.canvasWidth = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicsignaturepadComponent.prototype, "canvasHeight", {
        set: function (data) {
            this.signaturePadOptions.canvasHeight = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicsignaturepadComponent.prototype, "backgroundColor", {
        set: function (data) {
            this.signaturePadOptions.backgroundColor = data;
        },
        enumerable: true,
        configurable: true
    });
    // Allow Angular to set the value on the component
    IonicsignaturepadComponent.prototype.writeValue = function (value) {
        this.onChange(value);
    };
    // Save a reference to the change function passed to us by 
    // the Angular form control
    IonicsignaturepadComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    // Save a reference to the touched function passed to us by 
    // the Angular form control
    IonicsignaturepadComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    // Allow the Angular form control to disable this input
    IonicsignaturepadComponent.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    IonicsignaturepadComponent.prototype.canvasResize = function () {
        var canvas = document.querySelector('canvas');
        this.signaturePad.set('minWidth', 1);
    };
    IonicsignaturepadComponent.prototype.ngAfterViewInit = function () {
        this.signaturePad.clear();
        this.canvasResize();
    };
    IonicsignaturepadComponent.prototype.drawStart = function () {
    };
    IonicsignaturepadComponent.prototype.drawComplete = function () {
        this.signatureImage = this.signaturePad.toDataURL('image/jpeg', 0.5);
        this.writeValue(this.signatureImage);
    };
    IonicsignaturepadComponent.prototype.drawClear = function () {
        this.signaturePad.clear();
        this.signatureImage = null;
        this.writeValue(this.signatureImage);
    };
    var IonicsignaturepadComponent_1;
    __decorate([
        ViewChild(SignaturePad),
        __metadata("design:type", SignaturePad)
    ], IonicsignaturepadComponent.prototype, "signaturePad", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], IonicsignaturepadComponent.prototype, "canvasWidth", null);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], IonicsignaturepadComponent.prototype, "canvasHeight", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], IonicsignaturepadComponent.prototype, "backgroundColor", null);
    IonicsignaturepadComponent = IonicsignaturepadComponent_1 = __decorate([
        Component({
            selector: 'ion-signaturepad',
            template: HTML_TEMPLATE,
            providers: [{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: IonicsignaturepadComponent_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], IonicsignaturepadComponent);
    return IonicsignaturepadComponent;
}());
export { IonicsignaturepadComponent };
//# sourceMappingURL=ionicsignaturepad.component.js.map