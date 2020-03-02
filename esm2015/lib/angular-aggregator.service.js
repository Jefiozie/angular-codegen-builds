/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { WebCodeGenService } from "@xlayers/web-codegen";
import { FormatService } from "@xlayers/sketch-lib";
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
export class AngularAggregatorService {
    /**
     * @param {?} formatService
     * @param {?} webCodeGenService
     */
    constructor(formatService, webCodeGenService) {
        this.formatService = formatService;
        this.webCodeGenService = webCodeGenService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    aggregate(current, data, options) {
        /** @type {?} */
        const fileName = this.formatService.normalizeName(current.name);
        return [
            ...this.webCodeGenService.aggregate(current, data, options).map((/**
             * @param {?} file
             * @return {?}
             */
            file => {
                switch (file.language) {
                    case "html":
                        return Object.assign({}, file, { kind: "angular", uri: `${options.componentDir}/${fileName}.component.html` });
                    case "css":
                        return Object.assign({}, file, { kind: "angular", uri: `${options.componentDir}/${fileName}.component.css` });
                    default:
                        return Object.assign({}, file, { kind: "angular" });
                }
            })),
            {
                kind: "angular",
                value: this.renderComponent(current.name, options),
                language: "typescript",
                uri: `${options.componentDir}/${fileName}.component.ts`
            },
            {
                kind: "angular",
                value: this.renderSpec(current.name),
                language: "typescript",
                uri: `${options.componentDir}/${fileName}.spec.ts`
            }
        ];
    }
    /**
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    renderComponent(name, options) {
        /** @type {?} */
        const className = this.formatService.className(name);
        /** @type {?} */
        const normalizedName = this.formatService.normalizeName(name);
        /** @type {?} */
        const tagName = `${options.xmlPrefix}${normalizedName}`;
        return `\
import { Component } from '@angular/core';

@Component({
  selector: '${tagName}',
  templateUrl: './${normalizedName}.component.html',
  styleUrls: ['./${normalizedName}.component.css']
})
export class ${className}Component {}`;
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    renderSpec(name) {
        /** @type {?} */
        const className = this.formatService.className(name);
        /** @type {?} */
        const fileName = this.formatService.normalizeName(name);
        return `\
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ${className} } from "./${fileName}";

describe('${className}Component', () => {
  let component: ${className}Component;
  let fixture: ComponentFixture<${className}Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [${className}Component]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(${className}Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});`;
    }
}
AngularAggregatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
AngularAggregatorService.ctorParameters = () => [
    { type: FormatService },
    { type: WebCodeGenService }
];
/** @nocollapse */ AngularAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AngularAggregatorService_Factory() { return new AngularAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.WebCodeGenService)); }, token: AngularAggregatorService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1hZ2dyZWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9hbmd1bGFyLWNvZGVnZW4vIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBT3BELE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBQ25DLFlBQ21CLGFBQTRCLEVBQzVCLGlCQUFvQztRQURwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3BELENBQUM7Ozs7Ozs7SUFFSixTQUFTLENBQ1AsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMEI7O2NBRXBCLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQy9ELE9BQU87WUFDTCxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JFLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDckIsS0FBSyxNQUFNO3dCQUNULHlCQUNLLElBQUksSUFDUCxJQUFJLEVBQUUsU0FBUyxFQUNmLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxpQkFBaUIsSUFDekQ7b0JBRUosS0FBSyxLQUFLO3dCQUNSLHlCQUNLLElBQUksSUFDUCxJQUFJLEVBQUUsU0FBUyxFQUNmLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxnQkFBZ0IsSUFDeEQ7b0JBRUo7d0JBQ0UseUJBQ0ssSUFBSSxJQUNQLElBQUksRUFBRSxTQUFTLElBQ2Y7aUJBQ0w7WUFDSCxDQUFDLEVBQUM7WUFDRjtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztnQkFDbEQsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxlQUFlO2FBQ3hEO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDcEMsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxVQUFVO2FBQ25EO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxJQUFZLEVBQUUsT0FBMEI7O2NBQ2hELFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7O2NBQzlDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7O2NBQ3ZELE9BQU8sR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsY0FBYyxFQUFFO1FBQ3ZELE9BQU87Ozs7ZUFJSSxPQUFPO29CQUNGLGNBQWM7bUJBQ2YsY0FBYzs7ZUFFbEIsU0FBUyxjQUFjLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLElBQVk7O2NBQ3ZCLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7O2NBQzlDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDdkQsT0FBTzs7V0FFQSxTQUFTLGNBQWMsUUFBUTs7WUFFOUIsU0FBUzttQkFDRixTQUFTO2tDQUNNLFNBQVM7Ozs7dUJBSXBCLFNBQVM7Ozs7Ozt3Q0FNUSxTQUFTOzs7Ozs7OztJQVE3QyxDQUFDO0lBQ0gsQ0FBQzs7O1lBakdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLGFBQWE7WUFEYixpQkFBaUI7Ozs7Ozs7O0lBVXRCLGlEQUE2Qzs7Ozs7SUFDN0MscURBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFdlYkNvZGVHZW5TZXJ2aWNlIH0gZnJvbSBcIkB4bGF5ZXJzL3dlYi1jb2RlZ2VuXCI7XHJcbmltcG9ydCB7IEZvcm1hdFNlcnZpY2UgfSBmcm9tIFwiQHhsYXllcnMvc2tldGNoLWxpYlwiO1xyXG5cclxudHlwZSBXZWJDb2RlR2VuT3B0aW9ucyA9IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhckFnZ3JlZ2F0b3JTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0U2VydmljZTogRm9ybWF0U2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2ViQ29kZUdlblNlcnZpY2U6IFdlYkNvZGVHZW5TZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBhZ2dyZWdhdGUoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLm5vcm1hbGl6ZU5hbWUoY3VycmVudC5uYW1lKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIC4uLnRoaXMud2ViQ29kZUdlblNlcnZpY2UuYWdncmVnYXRlKGN1cnJlbnQsIGRhdGEsIG9wdGlvbnMpLm1hcChmaWxlID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGZpbGUubGFuZ3VhZ2UpIHtcclxuICAgICAgICAgIGNhc2UgXCJodG1sXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uZmlsZSxcclxuICAgICAgICAgICAgICBraW5kOiBcImFuZ3VsYXJcIixcclxuICAgICAgICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5jb21wb25lbnQuaHRtbGBcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjYXNlIFwiY3NzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uZmlsZSxcclxuICAgICAgICAgICAgICBraW5kOiBcImFuZ3VsYXJcIixcclxuICAgICAgICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5jb21wb25lbnQuY3NzYFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uZmlsZSxcclxuICAgICAgICAgICAgICBraW5kOiBcImFuZ3VsYXJcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICAgIHtcclxuICAgICAgICBraW5kOiBcImFuZ3VsYXJcIixcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJDb21wb25lbnQoY3VycmVudC5uYW1lLCBvcHRpb25zKSxcclxuICAgICAgICBsYW5ndWFnZTogXCJ0eXBlc2NyaXB0XCIsXHJcbiAgICAgICAgdXJpOiBgJHtvcHRpb25zLmNvbXBvbmVudERpcn0vJHtmaWxlTmFtZX0uY29tcG9uZW50LnRzYFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2luZDogXCJhbmd1bGFyXCIsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyU3BlYyhjdXJyZW50Lm5hbWUpLFxyXG4gICAgICAgIGxhbmd1YWdlOiBcInR5cGVzY3JpcHRcIixcclxuICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5zcGVjLnRzYFxyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29tcG9uZW50KG5hbWU6IHN0cmluZywgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnMpIHtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5jbGFzc05hbWUobmFtZSk7XHJcbiAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKG5hbWUpO1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IGAke29wdGlvbnMueG1sUHJlZml4fSR7bm9ybWFsaXplZE5hbWV9YDtcclxuICAgIHJldHVybiBgXFxcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJyR7dGFnTmFtZX0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi8ke25vcm1hbGl6ZWROYW1lfS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vJHtub3JtYWxpemVkTmFtZX0uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyAke2NsYXNzTmFtZX1Db21wb25lbnQge31gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJTcGVjKG5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLmNsYXNzTmFtZShuYW1lKTtcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLm5vcm1hbGl6ZU5hbWUobmFtZSk7XHJcbiAgICByZXR1cm4gYFxcXHJcbmltcG9ydCB7IGFzeW5jLCBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuaW1wb3J0IHsgJHtjbGFzc05hbWV9IH0gZnJvbSBcIi4vJHtmaWxlTmFtZX1cIjtcclxuXHJcbmRlc2NyaWJlKCcke2NsYXNzTmFtZX1Db21wb25lbnQnLCAoKSA9PiB7XHJcbiAgbGV0IGNvbXBvbmVudDogJHtjbGFzc05hbWV9Q29tcG9uZW50O1xyXG4gIGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPCR7Y2xhc3NOYW1lfUNvbXBvbmVudD47XHJcblxyXG4gIGJlZm9yZUVhY2goYXN5bmMoKCkgPT4ge1xyXG4gICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcclxuICAgICAgZGVjbGFyYXRpb25zOiBbJHtjbGFzc05hbWV9Q29tcG9uZW50XVxyXG4gICAgfSlcclxuICAgIC5jb21waWxlQ29tcG9uZW50cygpO1xyXG4gIH0pKTtcclxuXHJcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoJHtjbGFzc05hbWV9Q29tcG9uZW50KTtcclxuICAgIGNvbXBvbmVudCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XHJcbiAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcclxuICB9KTtcclxuXHJcbiAgaXQoJ3Nob3VsZCBjcmVhdGUnLCAoKSA9PiB7XHJcbiAgICBleHBlY3QoY29tcG9uZW50KS50b0JlVHJ1dGh5KCk7XHJcbiAgfSk7XHJcbn0pO2A7XHJcbiAgfVxyXG59XHJcbiJdfQ==