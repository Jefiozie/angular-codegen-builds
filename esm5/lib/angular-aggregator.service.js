/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { WebCodeGenService } from "@xlayers/web-codegen";
import { FormatService } from "@xlayers/sketch-lib";
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
var AngularAggregatorService = /** @class */ (function () {
    function AngularAggregatorService(formatService, webCodeGenService) {
        this.formatService = formatService;
        this.webCodeGenService = webCodeGenService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    AngularAggregatorService.prototype.aggregate = /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        /** @type {?} */
        var fileName = this.formatService.normalizeName(current.name);
        return tslib_1.__spread(this.webCodeGenService.aggregate(current, data, options).map((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            switch (file.language) {
                case "html":
                    return tslib_1.__assign({}, file, { kind: "angular", uri: options.componentDir + "/" + fileName + ".component.html" });
                case "css":
                    return tslib_1.__assign({}, file, { kind: "angular", uri: options.componentDir + "/" + fileName + ".component.css" });
                default:
                    return tslib_1.__assign({}, file, { kind: "angular" });
            }
        })), [
            {
                kind: "angular",
                value: this.renderComponent(current.name, options),
                language: "typescript",
                uri: options.componentDir + "/" + fileName + ".component.ts"
            },
            {
                kind: "angular",
                value: this.renderSpec(current.name),
                language: "typescript",
                uri: options.componentDir + "/" + fileName + ".spec.ts"
            }
        ]);
    };
    /**
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    AngularAggregatorService.prototype.renderComponent = /**
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    function (name, options) {
        /** @type {?} */
        var className = this.formatService.className(name);
        /** @type {?} */
        var normalizedName = this.formatService.normalizeName(name);
        /** @type {?} */
        var tagName = "" + options.xmlPrefix + normalizedName;
        return "import { Component } from '@angular/core';\n\n@Component({\n  selector: '" + tagName + "',\n  templateUrl: './" + normalizedName + ".component.html',\n  styleUrls: ['./" + normalizedName + ".component.css']\n})\nexport class " + className + "Component {}";
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    AngularAggregatorService.prototype.renderSpec = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var className = this.formatService.className(name);
        /** @type {?} */
        var fileName = this.formatService.normalizeName(name);
        return "import { async, ComponentFixture, TestBed } from '@angular/core/testing';\nimport { " + className + " } from \"./" + fileName + "\";\n\ndescribe('" + className + "Component', () => {\n  let component: " + className + "Component;\n  let fixture: ComponentFixture<" + className + "Component>;\n\n  beforeEach(async(() => {\n    TestBed.configureTestingModule({\n      declarations: [" + className + "Component]\n    })\n    .compileComponents();\n  }));\n\n  beforeEach(() => {\n    fixture = TestBed.createComponent(" + className + "Component);\n    component = fixture.componentInstance;\n    fixture.detectChanges();\n  });\n\n  it('should create', () => {\n    expect(component).toBeTruthy();\n  });\n});";
    };
    AngularAggregatorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    AngularAggregatorService.ctorParameters = function () { return [
        { type: FormatService },
        { type: WebCodeGenService }
    ]; };
    /** @nocollapse */ AngularAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AngularAggregatorService_Factory() { return new AngularAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.WebCodeGenService)); }, token: AngularAggregatorService, providedIn: "root" });
    return AngularAggregatorService;
}());
export { AngularAggregatorService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularAggregatorService.prototype.formatService;
    /**
     * @type {?}
     * @private
     */
    AngularAggregatorService.prototype.webCodeGenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1hZ2dyZWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9hbmd1bGFyLWNvZGVnZW4vIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUlwRDtJQUlFLGtDQUNtQixhQUE0QixFQUM1QixpQkFBb0M7UUFEcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUNwRCxDQUFDOzs7Ozs7O0lBRUosNENBQVM7Ozs7OztJQUFULFVBQ0UsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMEI7O1lBRXBCLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQy9ELHdCQUNLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ2xFLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDckIsS0FBSyxNQUFNO29CQUNULDRCQUNLLElBQUksSUFDUCxJQUFJLEVBQUUsU0FBUyxFQUNmLEdBQUcsRUFBSyxPQUFPLENBQUMsWUFBWSxTQUFJLFFBQVEsb0JBQWlCLElBQ3pEO2dCQUVKLEtBQUssS0FBSztvQkFDUiw0QkFDSyxJQUFJLElBQ1AsSUFBSSxFQUFFLFNBQVMsRUFDZixHQUFHLEVBQUssT0FBTyxDQUFDLFlBQVksU0FBSSxRQUFRLG1CQUFnQixJQUN4RDtnQkFFSjtvQkFDRSw0QkFDSyxJQUFJLElBQ1AsSUFBSSxFQUFFLFNBQVMsSUFDZjthQUNMO1FBQ0gsQ0FBQyxFQUFDO1lBQ0Y7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7Z0JBQ2xELFFBQVEsRUFBRSxZQUFZO2dCQUN0QixHQUFHLEVBQUssT0FBTyxDQUFDLFlBQVksU0FBSSxRQUFRLGtCQUFlO2FBQ3hEO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDcEMsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLEdBQUcsRUFBSyxPQUFPLENBQUMsWUFBWSxTQUFJLFFBQVEsYUFBVTthQUNuRDtXQUNEO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsa0RBQWU7Ozs7O0lBQWYsVUFBZ0IsSUFBWSxFQUFFLE9BQTBCOztZQUNoRCxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDOztZQUM5QyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDOztZQUN2RCxPQUFPLEdBQUcsS0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLGNBQWdCO1FBQ3ZELE9BQU8sOEVBSUksT0FBTyw4QkFDRixjQUFjLDRDQUNmLGNBQWMsMkNBRWxCLFNBQVMsaUJBQWMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFTyw2Q0FBVTs7Ozs7SUFBbEIsVUFBbUIsSUFBWTs7WUFDdkIsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzs7WUFDOUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUN2RCxPQUFPLHlGQUVBLFNBQVMsb0JBQWMsUUFBUSx5QkFFOUIsU0FBUyw4Q0FDRixTQUFTLG9EQUNNLFNBQVMsOEdBSXBCLFNBQVMsNkhBTVEsU0FBUyxtTEFRN0MsQ0FBQztJQUNILENBQUM7O2dCQWpHRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLGFBQWE7Z0JBRGIsaUJBQWlCOzs7bUNBRDFCO0NBd0dDLEFBbEdELElBa0dDO1NBL0ZZLHdCQUF3Qjs7Ozs7O0lBRWpDLGlEQUE2Qzs7Ozs7SUFDN0MscURBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFdlYkNvZGVHZW5TZXJ2aWNlIH0gZnJvbSBcIkB4bGF5ZXJzL3dlYi1jb2RlZ2VuXCI7XHJcbmltcG9ydCB7IEZvcm1hdFNlcnZpY2UgfSBmcm9tIFwiQHhsYXllcnMvc2tldGNoLWxpYlwiO1xyXG5cclxudHlwZSBXZWJDb2RlR2VuT3B0aW9ucyA9IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhckFnZ3JlZ2F0b3JTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0U2VydmljZTogRm9ybWF0U2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2ViQ29kZUdlblNlcnZpY2U6IFdlYkNvZGVHZW5TZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBhZ2dyZWdhdGUoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLm5vcm1hbGl6ZU5hbWUoY3VycmVudC5uYW1lKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIC4uLnRoaXMud2ViQ29kZUdlblNlcnZpY2UuYWdncmVnYXRlKGN1cnJlbnQsIGRhdGEsIG9wdGlvbnMpLm1hcChmaWxlID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGZpbGUubGFuZ3VhZ2UpIHtcclxuICAgICAgICAgIGNhc2UgXCJodG1sXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uZmlsZSxcclxuICAgICAgICAgICAgICBraW5kOiBcImFuZ3VsYXJcIixcclxuICAgICAgICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5jb21wb25lbnQuaHRtbGBcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjYXNlIFwiY3NzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uZmlsZSxcclxuICAgICAgICAgICAgICBraW5kOiBcImFuZ3VsYXJcIixcclxuICAgICAgICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5jb21wb25lbnQuY3NzYFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uZmlsZSxcclxuICAgICAgICAgICAgICBraW5kOiBcImFuZ3VsYXJcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICAgIHtcclxuICAgICAgICBraW5kOiBcImFuZ3VsYXJcIixcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJDb21wb25lbnQoY3VycmVudC5uYW1lLCBvcHRpb25zKSxcclxuICAgICAgICBsYW5ndWFnZTogXCJ0eXBlc2NyaXB0XCIsXHJcbiAgICAgICAgdXJpOiBgJHtvcHRpb25zLmNvbXBvbmVudERpcn0vJHtmaWxlTmFtZX0uY29tcG9uZW50LnRzYFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2luZDogXCJhbmd1bGFyXCIsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyU3BlYyhjdXJyZW50Lm5hbWUpLFxyXG4gICAgICAgIGxhbmd1YWdlOiBcInR5cGVzY3JpcHRcIixcclxuICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5zcGVjLnRzYFxyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29tcG9uZW50KG5hbWU6IHN0cmluZywgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnMpIHtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5jbGFzc05hbWUobmFtZSk7XHJcbiAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKG5hbWUpO1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IGAke29wdGlvbnMueG1sUHJlZml4fSR7bm9ybWFsaXplZE5hbWV9YDtcclxuICAgIHJldHVybiBgXFxcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJyR7dGFnTmFtZX0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi8ke25vcm1hbGl6ZWROYW1lfS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vJHtub3JtYWxpemVkTmFtZX0uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyAke2NsYXNzTmFtZX1Db21wb25lbnQge31gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJTcGVjKG5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLmNsYXNzTmFtZShuYW1lKTtcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLm5vcm1hbGl6ZU5hbWUobmFtZSk7XHJcbiAgICByZXR1cm4gYFxcXHJcbmltcG9ydCB7IGFzeW5jLCBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuaW1wb3J0IHsgJHtjbGFzc05hbWV9IH0gZnJvbSBcIi4vJHtmaWxlTmFtZX1cIjtcclxuXHJcbmRlc2NyaWJlKCcke2NsYXNzTmFtZX1Db21wb25lbnQnLCAoKSA9PiB7XHJcbiAgbGV0IGNvbXBvbmVudDogJHtjbGFzc05hbWV9Q29tcG9uZW50O1xyXG4gIGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPCR7Y2xhc3NOYW1lfUNvbXBvbmVudD47XHJcblxyXG4gIGJlZm9yZUVhY2goYXN5bmMoKCkgPT4ge1xyXG4gICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcclxuICAgICAgZGVjbGFyYXRpb25zOiBbJHtjbGFzc05hbWV9Q29tcG9uZW50XVxyXG4gICAgfSlcclxuICAgIC5jb21waWxlQ29tcG9uZW50cygpO1xyXG4gIH0pKTtcclxuXHJcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoJHtjbGFzc05hbWV9Q29tcG9uZW50KTtcclxuICAgIGNvbXBvbmVudCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XHJcbiAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcclxuICB9KTtcclxuXHJcbiAgaXQoJ3Nob3VsZCBjcmVhdGUnLCAoKSA9PiB7XHJcbiAgICBleHBlY3QoY29tcG9uZW50KS50b0JlVHJ1dGh5KCk7XHJcbiAgfSk7XHJcbn0pO2A7XHJcbiAgfVxyXG59XHJcbiJdfQ==