(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+BEB":
/*!*********************************************************************!*\
  !*** ./src/app/services/spinner-service/spinner-service.service.ts ***!
  \*********************************************************************/
/*! exports provided: SpinnerServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerServiceService", function() { return SpinnerServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class SpinnerServiceService {
    constructor() {
        this.spinner = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    show() {
        this.spinner.next(true);
    }
    hide() {
        this.spinner.next(false);
    }
}
SpinnerServiceService.ɵfac = function SpinnerServiceService_Factory(t) { return new (t || SpinnerServiceService)(); };
SpinnerServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpinnerServiceService, factory: SpinnerServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Akshay\Projects\Tasker\tasker-front-end\src\main.ts */"zUnb");


/***/ }),

/***/ "7oip":
/*!*********************************************************************!*\
  !*** ./src/app/pipes/task-complete-pipe/task-complete-pipe.pipe.ts ***!
  \*********************************************************************/
/*! exports provided: TaskCompletePipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCompletePipePipe", function() { return TaskCompletePipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TaskCompletePipePipe {
    transform(value, complete) {
        if (complete) {
            return value.filter((task) => task.isComplete == true);
        }
        else {
            return value.filter((task) => task.isComplete == false);
        }
    }
}
TaskCompletePipePipe.ɵfac = function TaskCompletePipePipe_Factory(t) { return new (t || TaskCompletePipePipe)(); };
TaskCompletePipePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "taskCompletePipe", type: TaskCompletePipePipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskCompletePipePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'taskCompletePipe',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "8dEv":
/*!*******************************************************************************!*\
  !*** ./src/app/components/sidebar/list-menu/list-menu/list-menu.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMenuComponent", function() { return ListMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_dialog_list_edit_dialog_list_edit_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dialog/list-edit-dialog/list-edit-dialog.component */ "gfeI");
/* harmony import */ var src_app_dialog_list_create_dialog_list_create_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialog/list-create-dialog/list-create-dialog.component */ "hKA5");
/* harmony import */ var src_app_dialog_delete_confirmation_dialog_delete_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialog/delete-confirmation-dialog/delete-confirmation-dialog.component */ "wmFC");
/* harmony import */ var src_app_services_list_service_list_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/list-service/list-service.service */ "dXJE");
/* harmony import */ var _services_task_service_task_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/task-service/task-service.service */ "n4Ex");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_moveable_service_moveable_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/moveable-service/moveable-service.service */ "C5aI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
















function ListMenuComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create a new list to get started !!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/list", a1]; };
function ListMenuComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "drag_indicator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListMenuComponent_div_6_div_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const list_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.openListEditDialog(list_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListMenuComponent_div_6_div_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const list_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.openDeleteDialog(list_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r3 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, list_r3.ListID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r3.ListName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
} }
function ListMenuComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ListMenuComponent_div_6_Template_div_cdkDropListDropped_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListMenuComponent_div_6_div_1_Template, 22, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listMenu);
} }
class ListMenuComponent {
    constructor(listService, taskService, dialog, _snackBar, activatedRoute, router, _moveable) {
        this.listService = listService;
        this.taskService = taskService;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._moveable = _moveable;
        this.listMenu = []; //Local array to store the list items
    }
    //Function to get any items when the component is created
    ngOnInit() {
        this.activatedRoute.data.subscribe((response) => {
            this.listMenu = response.list.sort(function (a, b) {
                return a.ListOrder - b.ListOrder;
            });
        });
    }
    getList() {
        this.listService.getlist().subscribe((response) => {
            this.listMenu = response.sort(function (a, b) {
                return a.ListOrder - b.ListOrder;
            });
        });
    }
    //Create a list item dialog
    openCreateListDialog() {
        const dialogRef = this.dialog.open(src_app_dialog_list_create_dialog_list_create_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ListCreateDialogComponent"], {
            width: '250',
        });
        dialogRef.afterClosed().subscribe((ListName) => {
            if (ListName != undefined) {
                this.listService
                    .addItem(ListName, this.listMenu.length)
                    .subscribe((response) => {
                    const list = Object.assign({}, response);
                    this.listMenu.push(list);
                    this.router.navigate(['/list', list.ListID]);
                    this.openSnackBar('New List Added', 'Dismiss');
                });
            }
        });
    }
    //Edit a list dialog
    openListEditDialog(listItem) {
        const dialogRef = this.dialog.open(src_app_dialog_list_edit_dialog_list_edit_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ListEditDialogComponent"], {
            width: '300px',
            data: Object.assign({}, listItem),
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result != undefined || result == '' || result == listItem.ListName) {
                this.listService
                    .editList(listItem, result)
                    .subscribe((response) => {
                    this.listMenu.map((list) => {
                        for (let i in this.listMenu) {
                            if (this.listMenu[i].ListID == response['ListID']) {
                                this.listMenu[i].ListName = result;
                            }
                        }
                    });
                    this.openSnackBar('List Edited', 'Dismiss');
                });
            }
        });
    }
    //Delete a list Dialog
    openDeleteDialog(ListItem) {
        const dialogRef = this.dialog.open(src_app_dialog_delete_confirmation_dialog_delete_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DeleteConfirmationDialogComponent"], {
            width: '400px',
            data: {
                element: 'list',
                ListName: ListItem.ListName,
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result == true) {
                this.listService.deleteList(ListItem.ListID).subscribe((response) => {
                    this.listMenu = this.listMenu.filter((item) => item.ListID != ListItem.ListID);
                    if (this.listMenu.length == 0) {
                        this.router.navigate(['']);
                    }
                    else {
                        this.router.navigate(['/list', this.listMenu[0].ListID]);
                    }
                    this.getList();
                    this.openSnackBar(ListItem.ListName +
                        ' list deleted and ' +
                        response['NumberOfTasks'] +
                        ' tasks archived', 'Dismiss');
                });
            }
        });
    }
    //Logic for drag and drop of list items
    drop(event) {
        console.log('P_Index: ' + event.previousIndex + ' C_Index:' + event.currentIndex);
        this._moveable
            .moveList(this.listMenu[event.previousIndex].ListID, event.currentIndex, event.previousIndex)
            .subscribe((response) => {
            //moveItemInArray(this.listMenu, event.previousIndex, event.currentIndex);
            this.listMenu = response.sort(function (a, b) {
                return a.ListOrder - b.ListOrder;
            });
        });
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
ListMenuComponent.ɵfac = function ListMenuComponent_Factory(t) { return new (t || ListMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_list_service_list_service_service__WEBPACK_IMPORTED_MODULE_4__["ListServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_task_service_task_service_service__WEBPACK_IMPORTED_MODULE_5__["TaskServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_moveable_service_moveable_service_service__WEBPACK_IMPORTED_MODULE_9__["MoveableServiceService"])); };
ListMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListMenuComponent, selectors: [["app-list-menu"]], decls: 7, vars: 2, consts: [[1, "container"], ["mat-raised-button", "", "color", "primary", 1, "new-list-button", 3, "click"], ["class", "empty-list", 4, "ngIf"], ["cdkDropList", "", "class", "example-list", 3, "cdkDropListDropped", 4, "ngIf"], [1, "empty-list"], ["src", "../../../../../assets/images/empty_list.svg"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box", 3, "routerLink"], [1, "list-text"], [1, "material-icons"], [1, "list-name-span"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function ListMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListMenuComponent_Template_button_click_1_listener() { return ctx.openCreateListDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " New List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListMenuComponent_div_5_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListMenuComponent_div_6_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listMenu.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listMenu.length != 0);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["CdkDrag"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuItem"]], styles: [".container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.new-list-button[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  margin-top: 5px;\r\n  height: 50px;\r\n}\r\n\r\n.empty-list[_ngcontent-%COMP%] {\r\n  margin-top: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  max-width: 80%;\r\n  max-height: 80%;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.example-list[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  width: 500px;\r\n  max-width: 100%;\r\n  border-top: solid 1px #ccc;\r\n  min-height: 60px;\r\n  display: block;\r\n  background: white;\r\n  border-radius: 4px;\r\n  overflow: auto;\r\n}\r\n.example-box[_ngcontent-%COMP%] {\r\n  padding: 10px 10px;\r\n  border-bottom: dotted 1px #ccc;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  cursor: move;\r\n  background: white;\r\n  font-size: 14px;\r\n}\r\n.cdk-drag-preview[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n.example-box[_ngcontent-%COMP%]:last-child {\r\n  border: none;\r\n}\r\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n.list-text[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.material-icons[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n}\r\n.list-name-span[_ngcontent-%COMP%] {\r\n  word-break: break-word;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL2xpc3QtbWVudS9saXN0LW1lbnUvbGlzdC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBLGFBQWE7QUFDYjtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBR0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlDQUF5QztBQUMzQztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEI7MEVBQ3dFO0FBQzFFO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL2xpc3QtbWVudS9saXN0LW1lbnUvbGlzdC1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKk1haW4gQ29udGFpbmVyKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qTmV3IExpc3QgQnV0dG9uKi9cclxuLm5ldy1saXN0LWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4vKkVtcHR5IExpc3QqL1xyXG4uZW1wdHktbGlzdCB7XHJcbiAgbWFyZ2luLXRvcDogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIG1heC1oZWlnaHQ6IDgwJTtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLypMaXN0IG9mIGxpc3RzKi9cclxuLmV4YW1wbGUtbGlzdCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjY2NjO1xyXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3gge1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBib3JkZXItYm90dG9tOiBkb3R0ZWQgMXB4ICNjY2M7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5saXN0LXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25zIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5saXN0LW5hbWUtc3BhbiB7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-menu',
                templateUrl: './list-menu.component.html',
                styleUrls: ['./list-menu.component.css'],
            }]
    }], function () { return [{ type: src_app_services_list_service_list_service_service__WEBPACK_IMPORTED_MODULE_4__["ListServiceService"] }, { type: _services_task_service_task_service_service__WEBPACK_IMPORTED_MODULE_5__["TaskServiceService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: src_app_services_moveable_service_moveable_service_service__WEBPACK_IMPORTED_MODULE_9__["MoveableServiceService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    name: "DEV",
    endpoint: "https://6kaxk4zj9e.execute-api.us-east-1.amazonaws.com/Prod/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C5aI":
/*!***********************************************************************!*\
  !*** ./src/app/services/moveable-service/moveable-service.service.ts ***!
  \***********************************************************************/
/*! exports provided: MoveableServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveableServiceService", function() { return MoveableServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _http_service_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service/http-service.service */ "TfZG");





class MoveableServiceService {
    constructor(http, httpService) {
        this.http = http;
        this.httpService = httpService;
    }
    moveList(ListID, currentIndex, previousIndex) {
        const item = {
            ListID: ListID,
            currentIndex: currentIndex,
            previousIndex: previousIndex
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint + 'listmover', JSON.stringify(item));
    }
}
MoveableServiceService.ɵfac = function MoveableServiceService_Factory(t) { return new (t || MoveableServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"])); };
MoveableServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoveableServiceService, factory: MoveableServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoveableServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _http_service_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] }]; }, null); })();


/***/ }),

/***/ "FGNR":
/*!****************************************************************************!*\
  !*** ./src/app/components/main-container/task-list/task-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var src_app_dialog_task_delete_dialog_task_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialog/task-delete-dialog/task-delete-dialog.component */ "OLLI");
/* harmony import */ var src_app_dialog_task_edit_dialog_task_edit_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialog/task-edit-dialog/task-edit-dialog.component */ "nRM1");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_task_service_task_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/task-service/task-service.service */ "n4Ex");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _pipes_task_complete_pipe_task_complete_pipe_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../pipes/task-complete-pipe/task-complete-pipe.pipe */ "7oip");

















function TaskListComponent_mat_card_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskListComponent_div_12_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 40);
} }
function TaskListComponent_div_12_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskListComponent_div_12_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskListComponent_div_12_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskListComponent_div_12_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stuck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskListComponent_div_12_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "On Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskListComponent_div_12_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskListComponent_div_12_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskListComponent_div_12_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskListComponent_div_12_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Critical");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "border-left": a0 }; };
function TaskListComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskListComponent_div_12_div_1_div_1_Template, 1, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskListComponent_div_12_div_1_Template_mat_checkbox_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const task_r7 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.onCompleteCheck(task_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskListComponent_div_12_div_1_div_6_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TaskListComponent_div_12_div_1_div_7_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskListComponent_div_12_div_1_div_8_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TaskListComponent_div_12_div_1_div_9_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TaskListComponent_div_12_div_1_div_10_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TaskListComponent_div_12_div_1_div_14_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaskListComponent_div_12_div_1_div_15_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TaskListComponent_div_12_div_1_div_16_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TaskListComponent_div_12_div_1_div_17_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_div_12_div_1_Template_span_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const task_r7 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.openEditModal(task_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_div_12_div_1_Template_span_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const task_r7 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.openDeleteModal(task_r7.TaskID, "task/"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r6.getBorderColor(task_r7.TaskPriority)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", task_r7.isComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r7.TaskTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r7.TaskStatus == "Ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r7.TaskStatus == "In Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r7.TaskStatus == "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r7.TaskStatus == "Stuck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r7.TaskStatus == "Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.getMomentFormat(task_r7.TaskDueDT));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r7.TaskPriority == "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r7.TaskPriority == "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r7.TaskPriority == "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r7.TaskPriority == "Critical");
} }
function TaskListComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function TaskListComponent_div_12_Template_div_cdkDropListDropped_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskListComponent_div_12_div_1_Template, 23, 15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "taskCompletePipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r4.taskList, false));
} }
function TaskListComponent_div_15_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 40);
} }
function TaskListComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskListComponent_div_15_div_1_div_1_Template, 1, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskListComponent_div_15_div_1_Template_mat_checkbox_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const task_r25 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.restoreTask(task_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_div_15_div_1_Template_span_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const task_r25 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.archiveTask(task_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_div_15_div_1_Template_span_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const task_r25 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.openDeleteModal(task_r25.TaskID, "taskcomplete/"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", task_r25.isComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r25.TaskTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r25.TaskStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.getMomentFormat(task_r25.TaskDueDT));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r25.TaskPriority);
} }
function TaskListComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function TaskListComponent_div_15_Template_div_cdkDropListDropped_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskListComponent_div_15_div_1_Template, 18, 5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.completedTaskList);
} }
class TaskListComponent {
    constructor(taskService, activatedRoute, dialog, _snackBar) {
        this.taskService = taskService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.taskList = [];
        this.completedTaskList = [];
        this.boxClass = 'row example-box';
        this.activatedRoute.paramMap.subscribe((params) => {
            this.selectedListId = params.get('id');
            this.getTasks();
            this.getCompletedTasks();
        });
    }
    getTasks() {
        this.taskService.getTaskList(this.selectedListId).subscribe((response) => {
            this.taskList = response
                .map((item) => {
                return Object.assign({}, item);
            })
                .sort(function (a, b) {
                return a.TaskOrder - b.TaskOrder;
            });
        });
    }
    getCompletedTasks() {
        this.taskService
            .getCompletedTaskList(this.selectedListId)
            .subscribe((response) => {
            this.completedTaskList = response
                .map((item) => {
                return Object.assign({}, item);
            })
                .sort(function (a, b) {
                return a.TaskOrder - b.TaskOrder;
            });
        });
    }
    // Create task form
    createTask(form) {
        if (form.invalid) {
            return;
        }
        this.taskService
            .addTask(form.value.taskInputField, this.selectedListId, this.getIndextoSet(this.selectedListId))
            .subscribe((response) => {
            const task = Object.assign({}, response);
            this.taskList.push(task);
        }, (error) => {
            console.log('Task not created: ' + JSON.stringify(error));
        });
        form.resetForm();
    }
    //Delete Dialog
    openDeleteModal(TaskID, type) {
        const dialogRef = this.dialog.open(src_app_dialog_task_delete_dialog_task_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__["TaskDeleteDialogComponent"], {
            width: '350px',
            data: {
                element: 'task',
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result == true) {
                this.taskService.deleteTask(TaskID, type).subscribe((response) => {
                    if (type == 'task/') {
                        this.taskList = this.taskList.filter((task) => task.TaskID != TaskID);
                    }
                    else {
                        this.completedTaskList = this.completedTaskList.filter((task) => task.TaskID != TaskID);
                    }
                    this.openSnackBar('Task Deleted', 'Dismiss');
                }, (error) => {
                    console.log('Task not deleted: ' + JSON.stringify(error));
                });
            }
        });
    }
    //Edit Dialog
    openEditModal(task) {
        const dialogRef = this.dialog.open(src_app_dialog_task_edit_dialog_task_edit_dialog_component__WEBPACK_IMPORTED_MODULE_3__["TaskEditDialogComponent"], {
            width: '350px',
            data: Object.assign(Object.assign({}, task), { TaskUpdatedDT: moment__WEBPACK_IMPORTED_MODULE_4__() }),
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result != undefined) {
                this.taskService.editTask(result).subscribe((response) => {
                    this.taskList = this.taskService.updateTask(this.taskList, task, response);
                    this.openSnackBar('Task Updated', 'Dismiss');
                }, (error) => {
                    console.log('Task not updated: ' + JSON.stringify(error));
                });
            }
        });
    }
    //Push tasks in the completed list
    onCompleteCheck(task) {
        const data = {
            TaskID: task.TaskID,
            completedOrder: this.completedTaskList.length,
        };
        this.taskService.completeTask(data).subscribe((response) => {
            const task = Object.assign({}, response);
            this.completedTaskList.push(task);
            this.getTasks();
            this.openSnackBar('Task Completed', 'Dismiss');
        });
    }
    //Push tasks in the active list
    restoreTask(task) {
        const data = {
            TaskID: task.TaskID,
            restoreOrder: this.taskList.length,
        };
        this.taskService.restoreTask(data).subscribe((response) => {
            const task = Object.assign({}, response);
            this.taskList.push(task);
            this.getCompletedTasks();
            this.openSnackBar('Task Restored', 'Dismiss');
        });
    }
    archiveTask(task) {
        this.taskService.archiveTask(task).subscribe((response) => {
            this.completedTaskList = this.completedTaskList.filter((el) => el.TaskID != task.TaskID);
            this.openSnackBar('Task Archived', 'Dismiss');
        });
    }
    //Get the index to be set on the task
    getIndextoSet(ListID) {
        return this.taskList.filter((el) => el.ListID == ListID).length;
    }
    getMomentFormat(TaskDueDate) {
        return moment__WEBPACK_IMPORTED_MODULE_4__(TaskDueDate).format('MMM Do YY');
    }
    getBorderColor(priority) {
        if (priority == 'Low') {
            return 'solid 5px #3c78d8';
        }
        if (priority == 'Medium') {
            return 'solid 5px #6aa84f';
        }
        if (priority == 'High') {
            return 'solid 5px #e69138';
        }
        if (priority == 'Critical') {
            return 'solid 5px #cc0000';
        }
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    //Logic for drag and drop of task items
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.taskList, event.previousIndex, event.currentIndex);
    }
}
TaskListComponent.ɵfac = function TaskListComponent_Factory(t) { return new (t || TaskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_task_service_task_service_service__WEBPACK_IMPORTED_MODULE_5__["TaskServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"])); };
TaskListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskListComponent, selectors: [["app-task-list"]], decls: 16, vars: 4, consts: [[1, "container-fluid"], [3, "submit"], ["taskForm", "ngForm"], [1, "form-row", "align-items-center"], [1, "col-xs-12", "col-lg-11"], ["type", "text", "maxlength", "100", "id", "inlineFormInput", "placeholder", "Whats up ?", "ngModel", "", "name", "taskInputField", "required", "", 1, "form-control", "mb-2"], ["taskField", "ngModel"], [1, "col-xs-12", "col-lg-1"], ["mat-raised-button", "", "color", "primary", 1, "btn", "btn-primary", "mb-2"], [4, "ngIf"], ["class", "container example-list row-heading", 4, "ngIf"], ["cdkDropList", "", "class", "container example-list", 3, "cdkDropListDropped", 4, "ngIf"], ["src", "../../../../assets/images/girl_with_generic_task_list_themed.svg"], [1, "container", "example-list", "row-heading"], [1, "row"], [1, "col-lg-7", "col-md-7", "col-xs-12", "col-12", "task-header"], [1, "col-lg-1", "col-md-1", "col-sm-3", "col-xs-3", "col-3", "row-header"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-xs-4", "col-4", "row-header"], [1, "col-lg-1", "col-md-1", "col-sm-2", "col-xs-2", "col-2", "row-header"], ["cdkDropList", "", 1, "container", "example-list", 3, "cdkDropListDropped"], ["ngClass", "row example-box", "cdkDrag", "", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["ngClass", "row example-box", "cdkDrag", "", 3, "ngStyle"], ["class", "example-custom-placeholder", 4, "cdkDragPlaceholder"], [1, "col-lg-7", "col-md-7", "col-xs-12", "col-12", "task-text-box"], ["color", "primary", 1, "example-margin", 3, "checked", "change"], [1, "task-text-span"], ["class", "col-lg-1 col-md-1 col-sm-3 col-xs-3 col-3 status-box", "style", "background-color: #dfa800;", 4, "ngIf"], ["class", "col-lg-1 col-md-1 col-sm-3 col-xs-3 col-3 status-box", "style", "background-color: #1155cc;", 4, "ngIf"], ["class", "col-lg-1 col-md-1 col-sm-3 col-xs-3 col-3 status-box", "style", "background-color: #38761d;", 4, "ngIf"], ["class", "col-lg-1 col-md-1 col-sm-3 col-xs-3 col-3 status-box", "style", "background-color: #990000;", 4, "ngIf"], ["class", "col-lg-1 col-md-1 col-sm-3 col-xs-3 col-3 status-box", "style", "background-color: #741b47;", 4, "ngIf"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-xs-4", "col-4", "due-date-box"], ["matTooltip", "Due Date", 1, "dueDate"], ["class", "col-lg-1 col-md-1 col-sm-3 col-xs-3 col-3 priority-box", "style", "background-color: #3c78d8;", 4, "ngIf"], ["class", "col-lg-1 col-md-1 col-sm-3 col-xs-3 col-3 priority-box", "style", "background-color:#6aa84f;", 4, "ngIf"], ["class", "col-lg-1 col-md-1 col-sm-3 col-xs-3 col-3 priority-box", "style", "background-color: #e77f11;", 4, "ngIf"], ["class", "col-lg-1 col-md-1 col-sm-3 col-xs-3 col-3 priority-box", "style", "background-color: #cc0000;", 4, "ngIf"], [1, "col-lg-1", "col-md-1", "col-sm-2", "col-xs-2", "col-2", "action-box"], ["matTooltip", "Edit", 1, "material-icons", "edit", 3, "click"], ["matTooltip", "Delete", 1, "material-icons", "delete", 3, "click"], [1, "example-custom-placeholder"], [1, "col-lg-1", "col-md-1", "col-sm-3", "col-xs-3", "col-3", "status-box", 2, "background-color", "#dfa800"], [1, "col-lg-1", "col-md-1", "col-sm-3", "col-xs-3", "col-3", "status-box", 2, "background-color", "#1155cc"], [1, "col-lg-1", "col-md-1", "col-sm-3", "col-xs-3", "col-3", "status-box", 2, "background-color", "#38761d"], [1, "col-lg-1", "col-md-1", "col-sm-3", "col-xs-3", "col-3", "status-box", 2, "background-color", "#990000"], [1, "col-lg-1", "col-md-1", "col-sm-3", "col-xs-3", "col-3", "status-box", 2, "background-color", "#741b47"], [1, "col-lg-1", "col-md-1", "col-sm-3", "col-xs-3", "col-3", "priority-box", 2, "background-color", "#3c78d8"], [1, "col-lg-1", "col-md-1", "col-sm-3", "col-xs-3", "col-3", "priority-box", 2, "background-color", "#6aa84f"], [1, "col-lg-1", "col-md-1", "col-sm-3", "col-xs-3", "col-3", "priority-box", 2, "background-color", "#e77f11"], [1, "col-lg-1", "col-md-1", "col-sm-3", "col-xs-3", "col-3", "priority-box", 2, "background-color", "#cc0000"], ["ngClass", "row example-box", 4, "ngFor", "ngForOf"], ["ngClass", "row example-box"], [1, "task-text-span", "task-complete-class"], [1, "col-lg-1", "col-md-1", "col-sm-3", "col-xs-3", "col-3", "status-box", 2, "background-color", "#808080"], [1, "col-lg-1", "col-md-1", "col-sm-3", "col-xs-3", "col-3", "priority-box", 2, "background-color", "#808080"], ["matTooltip", "Archive", 1, "material-icons", "archive", 3, "click"]], template: function TaskListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function TaskListComponent_Template_form_submit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.createTask(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TaskListComponent_mat_card_10_Template, 2, 0, "mat-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TaskListComponent_div_11_Template, 12, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskListComponent_div_12_Template, 3, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaskListComponent_div_15_Template, 2, 1, "div", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskList.length == 0 && ctx.completedTaskList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskList.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskList.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.completedTaskList.length != 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDragPlaceholder"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"]], pipes: [_pipes_task_complete_pipe_task_complete_pipe_pipe__WEBPACK_IMPORTED_MODULE_14__["TaskCompletePipePipe"]], styles: [".task-header[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: left;\r\n}\r\n\r\n.row-header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.row-heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n  margin-bottom: 1rem;\r\n  border-bottom: solid 1px #ccc;\r\n  background-color: #f6f8fa;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.divider-text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.example-list[_ngcontent-%COMP%] {\r\n  max-width: 98%;\r\n  min-width: 100px;\r\n  overflow: hidden;\r\n}\r\n\r\n.example-box[_ngcontent-%COMP%] {\r\n  margin-bottom: 5px;\r\n  padding: 2px;\r\n  min-height: 50px;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  box-sizing: border-box;\r\n  border: solid 1px #ccc;\r\n  cursor: move;\r\n  background: white;\r\n  border-left: solid 5px gray;\r\n  font-size: 16px;\r\n  display: flex;\r\n  align-items: center;\r\n  border-radius: 5px;\r\n}\r\n\r\n.example-box[_ngcontent-%COMP%]:hover {\r\n  border: solid 1px #3f51b5;\r\n  border-left: solid 5px grey;\r\n  box-shadow: 5px 10px 5px -3px rgba(0, 0, 0, 0.2),\r\n    8px 12px 10px 1px rgba(0, 0, 0, 0.14), 3px 8px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.draft-task-border[_ngcontent-%COMP%] {\r\n  border-left: solid 5px grey;\r\n}\r\n\r\n.medium-task-border[_ngcontent-%COMP%] {\r\n  border-left: solid 5px orange;\r\n}\r\n\r\n.critical-task-border[_ngcontent-%COMP%] {\r\n  border-left: solid 5px red;\r\n}\r\n\r\n.cdk-drag-preview[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.example-custom-placeholder[_ngcontent-%COMP%] {\r\n  background: #ccc;\r\n  border: dotted 3px #999;\r\n  min-height: 50px;\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.task-text-box[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  align-content: center;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n.task-complete-class[_ngcontent-%COMP%] {\r\n  text-decoration: line-through;\r\n  word-break: break-word;\r\n}\r\n\r\n.task-text-span[_ngcontent-%COMP%] {\r\n  word-break: break-word;\r\n}\r\n\r\n\r\n\r\n.example-margin[_ngcontent-%COMP%] {\r\n  margin: 5px 10px 0px 0px;\r\n}\r\n\r\n\r\n\r\n.status-box[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: white;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-sizing: border-box;\r\n  border-radius: 8px;\r\n}\r\n\r\n\r\n\r\n.due-date-box[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n\r\n\r\n.priority-box[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: white;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n  border-radius: 8px;\r\n}\r\n\r\n\r\n\r\n.action-box[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.delete[_ngcontent-%COMP%] {\r\n  border: solid 0.5px #3f51b5;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n  border: solid 0.5px #3f51b5;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.archive[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n  border: solid 0.5px #3f51b5;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  margin: 15px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 87%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  max-width: 70%;\r\n  max-height: 70%;\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n  .status-box[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: white;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n    border-radius: 8px;\r\n  }\r\n  .priority-box[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: white;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n    border-radius: 8px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 375px) {\r\n  .status-box[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    color: white;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n    border-radius: 8px;\r\n  }\r\n  .priority-box[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    color: white;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n    border-radius: 8px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbnRhaW5lci90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCOytFQUM2RTtBQUMvRTs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEI7MEVBQ3dFO0FBQzFFOztBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSxhQUFhOztBQUViO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQSxZQUFZOztBQUVaO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUEsYUFBYTs7QUFFYjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQSwyQkFBMkI7O0FBRTNCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1jb250YWluZXIvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2staGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG59XHJcblxyXG4ucm93LWhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yb3ctaGVhZGluZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY4ZmE7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kaXZpZGVyLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdCB7XHJcbiAgbWF4LXdpZHRoOiA5OCU7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuLmV4YW1wbGUtYm94IHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItbGVmdDogc29saWQgNXB4IGdyYXk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveDpob3ZlciB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzNmNTFiNTtcclxuICBib3JkZXItbGVmdDogc29saWQgNXB4IGdyZXk7XHJcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgOHB4IDEycHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgM3B4IDhweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uZHJhZnQtdGFzay1ib3JkZXIge1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggZ3JleTtcclxufVxyXG5cclxuLm1lZGl1bS10YXNrLWJvcmRlciB7XHJcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCBvcmFuZ2U7XHJcbn1cclxuXHJcbi5jcml0aWNhbC10YXNrLWJvcmRlciB7XHJcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCByZWQ7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmV4YW1wbGUtY3VzdG9tLXBsYWNlaG9sZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gIGJvcmRlcjogZG90dGVkIDNweCAjOTk5O1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4udGFzay10ZXh0LWJveCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi50YXNrLWNvbXBsZXRlLWNsYXNzIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4udGFzay10ZXh0LXNwYW4ge1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi8qIENoZWNrYm94ICovXHJcblxyXG4uZXhhbXBsZS1tYXJnaW4ge1xyXG4gIG1hcmdpbjogNXB4IDEwcHggMHB4IDBweDtcclxufVxyXG5cclxuLyogU3RhdHVzICovXHJcblxyXG4uc3RhdHVzLWJveCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4vKiBEdWUgRGF0ZSovXHJcblxyXG4uZHVlLWRhdGUtYm94IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLyogUHJpb3JpdHkgKi9cclxuXHJcbi5wcmlvcml0eS1ib3gge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4vKiBFZGl0IGFuZCBEZWxldGUgYnV0dG9ucyovXHJcblxyXG4uYWN0aW9uLWJveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmRlbGV0ZSB7XHJcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjM2Y1MWI1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBib3JkZXI6IHNvbGlkIDAuNXB4ICMzZjUxYjU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFyY2hpdmUge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGJvcmRlcjogc29saWQgMC41cHggIzNmNTFiNTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDg3JTtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDcwJTtcclxuICBtYXgtaGVpZ2h0OiA3MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgLnN0YXR1cy1ib3gge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbiAgLnByaW9yaXR5LWJveCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgLnN0YXR1cy1ib3gge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbiAgLnByaW9yaXR5LWJveCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-list',
                templateUrl: './task-list.component.html',
                styleUrls: ['./task-list.component.css'],
            }]
    }], function () { return [{ type: _services_task_service_task_service_service__WEBPACK_IMPORTED_MODULE_5__["TaskServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "Gvw9":
/*!******************************************************************************************!*\
  !*** ./src/app/components/main-container/report-dashboard/report-dashboard.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ReportDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDashboardComponent", function() { return ReportDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_modules_chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node_modules/chart.js */ "MO+k");
/* harmony import */ var node_modules_chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_modules_chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");








const _c0 = ["fullcalendar"];
class ReportDashboardComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.calendarData = [];
        this.dashboardData = [];
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((response) => {
            this.calendarData = response.task.map((data) => {
                return {
                    title: data.TaskTitle,
                    date: moment__WEBPACK_IMPORTED_MODULE_1__(data.TaskDueDT).format('YYYY-MM-DD'),
                };
            });
            this.dashboardData = response.task.map((data) => {
                return Object.assign({}, data);
            });
        });
        //Calendar
        this.calendarOptions = {
            initialView: 'dayGridMonth',
            events: this.calendarData,
        };
        //Priority Chart
        const priorityChart = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('priorityChart', {
            type: 'doughnut',
            data: {
                labels: ['Critical', 'High', 'Medium', 'Low'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [
                            this.dashboardData.filter((el) => el.TaskPriority == 'Critical')
                                .length,
                            this.dashboardData.filter((el) => el.TaskPriority == 'High')
                                .length,
                            this.dashboardData.filter((el) => el.TaskPriority == 'Medium')
                                .length,
                            this.dashboardData.filter((el) => el.TaskPriority == 'Low')
                                .length,
                        ],
                        backgroundColor: [
                            'rgba(204, 0, 0, 0.6)',
                            'rgba(231, 127, 17, 0.6)',
                            'rgba(106, 168, 79, 0.6)',
                            'rgba(60, 12, 216, 0.6)',
                        ],
                        borderColor: [
                            'rgba(204, 0, 0, 1)',
                            'rgba(231, 127, 17, 1)',
                            'rgba(106, 168, 79, 1)',
                            'rgba(60, 12, 216, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {},
        });
        //Productivity chart
        const productivityChart = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('productivityChart', {
            type: 'pie',
            data: {
                labels: ['Ready', 'In Progress', 'Done', 'Stuck', 'On Hold'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [
                            this.dashboardData.filter((el) => el.TaskStatus == 'Ready')
                                .length,
                            this.dashboardData.filter((el) => el.TaskStatus == 'In Progress')
                                .length,
                            this.dashboardData.filter((el) => el.TaskStatus == 'Done').length,
                            this.dashboardData.filter((el) => el.TaskStatus == 'Stuck')
                                .length,
                            this.dashboardData.filter((el) => el.TaskStatus == 'On Hold')
                                .length,
                        ],
                        backgroundColor: [
                            'rgba(223, 168, 0, 0.6)',
                            'rgba(7, 85, 204, 0.6)',
                            'rgba(56, 118, 29, 0.6)',
                            'rgba(153, 0, 0, 0.6)',
                            'rgba(116, 27, 71, 0.6)',
                        ],
                        borderColor: [
                            'rgba(223, 168, 0, 1)',
                            'rgba(7, 85, 204, 1)',
                            'rgba(56, 118, 29, 1)',
                            'rgba(153, 0, 0, 1)',
                            'rgba(116, 27, 71, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {},
        });
    }
}
ReportDashboardComponent.ɵfac = function ReportDashboardComponent_Factory(t) { return new (t || ReportDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ReportDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportDashboardComponent, selectors: [["app-report-dashboard"]], viewQuery: function ReportDashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fullcalendar = _t.first);
    } }, decls: 25, vars: 7, consts: [[1, "grid-container"], ["cols", "2", "rowHeight", "430px"], [3, "colspan", "rowspan"], [1, "dashboard-card"], [1, "dashboard-card-content"], [3, "options"], ["fullcalendar", ""], [1, "charts"], ["id", "priorityChart"], ["id", "productivityChart"]], template: function ReportDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "full-calendar", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Priority ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "canvas", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Productivity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "canvas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.calendarOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 1);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__["FullCalendarComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.charts[_ngcontent-%COMP%]{\n  display: block;\n  width: 90%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbnRhaW5lci9yZXBvcnQtZGFzaGJvYXJkL3JlcG9ydC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbnRhaW5lci9yZXBvcnQtZGFzaGJvYXJkL3JlcG9ydC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2hhcnRze1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-dashboard',
                templateUrl: './report-dashboard.component.html',
                styleUrls: ['./report-dashboard.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { fullcalendar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fullcalendar']
        }] }); })();


/***/ }),

/***/ "LG2l":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/sidebar/create-list/create-list-button/create-list-button.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CreateListButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateListButtonComponent", function() { return CreateListButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dialog_list_create_dialog_list_create_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../dialog/list-create-dialog/list-create-dialog.component */ "hKA5");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_list_service_list_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/list-service/list-service.service */ "dXJE");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







class CreateListButtonComponent {
    constructor(dialog, listService) {
        this.dialog = dialog;
        this.listService = listService;
    }
    ngOnInit() {
    }
    openCreateListDialog() {
        const dialogRef = this.dialog.open(_dialog_list_create_dialog_list_create_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ListCreateDialogComponent"], {
            width: '250'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != undefined) {
                if (result.toString().trim().length > 0) {
                    //this.listService.addNewListToMenu(result);
                }
            }
        });
    }
}
CreateListButtonComponent.ɵfac = function CreateListButtonComponent_Factory(t) { return new (t || CreateListButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_list_service_list_service_service__WEBPACK_IMPORTED_MODULE_3__["ListServiceService"])); };
CreateListButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateListButtonComponent, selectors: [["app-create-list-button"]], decls: 4, vars: 0, consts: [["mat-raised-button", "", "color", "primary", 3, "click"]], template: function CreateListButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateListButtonComponent_Template_button_click_0_listener() { return ctx.openCreateListDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Create New List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: ["button[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  width: 80%;\r\n  margin-top: 5px;\r\n  height: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL2NyZWF0ZS1saXN0L2NyZWF0ZS1saXN0LWJ1dHRvbi9jcmVhdGUtbGlzdC1idXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZUFBZTtFQUNmLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9jcmVhdGUtbGlzdC9jcmVhdGUtbGlzdC1idXR0b24vY3JlYXRlLWxpc3QtYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateListButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-list-button',
                templateUrl: './create-list-button.component.html',
                styleUrls: ['./create-list-button.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: src_app_services_list_service_list_service_service__WEBPACK_IMPORTED_MODULE_3__["ListServiceService"] }]; }, null); })();


/***/ }),

/***/ "OLLI":
/*!***************************************************************************!*\
  !*** ./src/app/dialog/task-delete-dialog/task-delete-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: TaskDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDeleteDialogComponent", function() { return TaskDeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function TaskDeleteDialogComponent_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Are you sure you want to delete this task ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDeleteDialogComponent_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Are you sure you want to delete this list ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDeleteDialogComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Carefull !! Deleting this list will delete all tasks in this list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TaskDeleteDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
TaskDeleteDialogComponent.ɵfac = function TaskDeleteDialogComponent_Factory(t) { return new (t || TaskDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
TaskDeleteDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskDeleteDialogComponent, selectors: [["app-task-delete-dialog"]], decls: 11, vars: 4, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [4, "ngIf"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function TaskDeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskDeleteDialogComponent_h3_3_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TaskDeleteDialogComponent_h3_4_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TaskDeleteDialogComponent_p_5_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.element == "task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.element == "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.element == "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["mat-dialog-actions[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL3Rhc2stZGVsZXRlLWRpYWxvZy90YXNrLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy90YXNrLWRlbGV0ZS1kaWFsb2cvdGFzay1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskDeleteDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-delete-dialog',
                templateUrl: './task-delete-dialog.component.html',
                styleUrls: ['./task-delete-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SxHf":
/*!**********************************************************************!*\
  !*** ./src/app/resolvers/report-resolver/report-resolver.service.ts ***!
  \**********************************************************************/
/*! exports provided: ReportResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportResolverService", function() { return ReportResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http-service/http-service.service */ "TfZG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class ReportResolverService {
    constructor(http, httpService, activatedRoute) {
        this.http = http;
        this.httpService = httpService;
        this.activatedRoute = activatedRoute;
    }
    resolve(route, state) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint + 'task/');
    }
}
ReportResolverService.ɵfac = function ReportResolverService_Factory(t) { return new (t || ReportResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ReportResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReportResolverService, factory: ReportResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: src_app_services_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _navigation_headnav_sidenav_headnav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/headnav-sidenav/headnav-sidenav.component */ "Y20n");




class AppComponent {
    constructor() {
        this.envName = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].name;
        this.title = 'tasker-front-end';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headnav-sidenav");
    } }, directives: [_navigation_headnav_sidenav_headnav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["HeadnavSidenavComponent"]], styles: ["div.container[_ngcontent-%COMP%] {\r\n    height: 10em;\r\n    position: relative }\r\ndiv.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 72px;\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    transform: translate(-50%, -50%) \r\n}\r\n.center[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 40%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEI7QUFDSjtBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTBlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSB9XHJcbmRpdi5jb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDcycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogLTUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIFxyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TfZG":
/*!***************************************************************!*\
  !*** ./src/app/services/http-service/http-service.service.ts ***!
  \***************************************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class HttpServiceService {
    constructor(http) {
        this.http = http;
        this.getList = {};
    }
    //Send POST request to API Gateway
    sendPostRequest(resource, data) {
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint + resource, JSON.stringify(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Send GET request to API Gateway
    sendGetRequest(resource) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint + resource).subscribe((response) => {
            return response;
        }, (error) => {
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError);
        });
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
HttpServiceService.ɵfac = function HttpServiceService_Factory(t) { return new (t || HttpServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
HttpServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpServiceService, factory: HttpServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Y20n":
/*!*************************************************************************!*\
  !*** ./src/app/navigation/headnav-sidenav/headnav-sidenav.component.ts ***!
  \*************************************************************************/
/*! exports provided: HeadnavSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadnavSidenavComponent", function() { return HeadnavSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "e5sC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function HeadnavSidenavComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadnavSidenavComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r1.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeadnavSidenavComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.showSpinner = true;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
}
HeadnavSidenavComponent.ɵfac = function HeadnavSidenavComponent_Factory(t) { return new (t || HeadnavSidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
HeadnavSidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadnavSidenavComponent, selectors: [["app-headnav-sidenav"]], decls: 16, vars: 12, consts: [[1, "example-container"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["routerLink", "/", "src", "../../../assets/images/tasker_logo_new.png", "width", "140", "height", "140"], [1, "sidenav-container"], [1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["name", "app-list-menu"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]], template: function HeadnavSidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeadnavSidenavComponent_button_2_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-sidenav-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-sidenav", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.isHandset$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, ctx.isHandset$) ? "dialog" : "navigation");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.sidenav-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkbmF2LXNpZGVuYXYvaGVhZG5hdi1zaWRlbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTs7OztHQUlHIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkbmF2LXNpZGVuYXYvaGVhZG5hdi1zaWRlbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8qIGFwcC1jcmVhdGUtbGlzdC1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSAqL1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadnavSidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-headnav-sidenav',
                templateUrl: './headnav-sidenav.component.html',
                styleUrls: ['./headnav-sidenav.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _navigation_headnav_sidenav_headnav_sidenav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/headnav-sidenav/headnav-sidenav.component */ "Y20n");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _components_sidebar_create_list_create_list_button_create_list_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sidebar/create-list/create-list-button/create-list-button.component */ "LG2l");
/* harmony import */ var _components_sidebar_list_menu_list_menu_list_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sidebar/list-menu/list-menu/list-menu.component */ "8dEv");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _dialog_list_create_dialog_list_create_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialog/list-create-dialog/list-create-dialog.component */ "hKA5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _components_main_container_task_creat_task_creat_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/main-container/task-creat/task-creat.component */ "tv40");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _components_main_container_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/main-container/task-list/task-list.component */ "FGNR");
/* harmony import */ var _components_main_container_empty_container_empty_container_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/main-container/empty-container/empty-container.component */ "qjoh");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _components_main_container_wrapper_container_wrapper_container_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/main-container/wrapper-container/wrapper-container.component */ "pyuB");
/* harmony import */ var _dialog_task_delete_dialog_task_delete_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dialog/task-delete-dialog/task-delete-dialog.component */ "OLLI");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _dialog_list_edit_dialog_list_edit_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dialog/list-edit-dialog/list-edit-dialog.component */ "gfeI");
/* harmony import */ var _dialog_task_edit_dialog_task_edit_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dialog/task-edit-dialog/task-edit-dialog.component */ "nRM1");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _components_main_container_page_not_found_container_page_not_found_container_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/main-container/page-not-found-container/page-not-found-container.component */ "i6zp");
/* harmony import */ var _components_main_container_report_dashboard_report_dashboard_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/main-container/report-dashboard/report-dashboard.component */ "Gvw9");
/* harmony import */ var _resolvers_list_menu_resolver_list_menu_resolver_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./resolvers/list-menu-resolver/list-menu-resolver.service */ "ZtgZ");
/* harmony import */ var _resolvers_task_list_resolver_task_list_resolver_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./resolvers/task-list-resolver/task-list-resolver.service */ "aTpn");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _dialog_delete_confirmation_dialog_delete_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./dialog/delete-confirmation-dialog/delete-confirmation-dialog.component */ "wmFC");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "e5sC");
/* harmony import */ var _pipes_task_complete_pipe_task_complete_pipe_pipe__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pipes/task-complete-pipe/task-complete-pipe.pipe */ "7oip");
/* harmony import */ var _services_spinner_service_spinner_service_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/spinner-service/spinner-service.service */ "+BEB");
/* harmony import */ var _interceptors_request_interceptor_request_interceptor__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./interceptors/request-interceptor/request-interceptor */ "md3V");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @fullcalendar/daygrid */ "PN1e");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @fullcalendar/interaction */ "ogxq");














































 // the main connector. must go first
 // a plugin
 // a plugin

_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_46__["FullCalendarModule"].registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_47__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_48__["default"]
]);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_resolvers_list_menu_resolver_list_menu_resolver_service__WEBPACK_IMPORTED_MODULE_38__["ListMenuResolverService"], _resolvers_task_list_resolver_task_list_resolver_service__WEBPACK_IMPORTED_MODULE_39__["TaskListResolverService"], _services_spinner_service_spinner_service_service__WEBPACK_IMPORTED_MODULE_44__["SpinnerServiceService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptors_request_interceptor_request_interceptor__WEBPACK_IMPORTED_MODULE_45__["RequestInterceptor"], multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatNativeDateModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__["MatCheckboxModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_35__["MatDividerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__["MatProgressSpinnerModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_46__["FullCalendarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _navigation_headnav_sidenav_headnav_sidenav_component__WEBPACK_IMPORTED_MODULE_6__["HeadnavSidenavComponent"],
        _components_sidebar_create_list_create_list_button_create_list_button_component__WEBPACK_IMPORTED_MODULE_13__["CreateListButtonComponent"],
        _components_sidebar_list_menu_list_menu_list_menu_component__WEBPACK_IMPORTED_MODULE_14__["ListMenuComponent"],
        _dialog_list_create_dialog_list_create_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ListCreateDialogComponent"],
        _components_main_container_task_creat_task_creat_component__WEBPACK_IMPORTED_MODULE_20__["TaskCreatComponent"],
        _components_main_container_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_22__["TaskListComponent"],
        _components_main_container_empty_container_empty_container_component__WEBPACK_IMPORTED_MODULE_23__["EmptyContainerComponent"],
        _components_main_container_wrapper_container_wrapper_container_component__WEBPACK_IMPORTED_MODULE_25__["WrapperContainerComponent"],
        _dialog_task_delete_dialog_task_delete_dialog_component__WEBPACK_IMPORTED_MODULE_26__["TaskDeleteDialogComponent"],
        _dialog_list_edit_dialog_list_edit_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ListEditDialogComponent"],
        _dialog_task_edit_dialog_task_edit_dialog_component__WEBPACK_IMPORTED_MODULE_30__["TaskEditDialogComponent"],
        _components_main_container_page_not_found_container_page_not_found_container_component__WEBPACK_IMPORTED_MODULE_36__["PageNotFoundContainerComponent"],
        _components_main_container_report_dashboard_report_dashboard_component__WEBPACK_IMPORTED_MODULE_37__["ReportDashboardComponent"],
        _dialog_delete_confirmation_dialog_delete_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_41__["DeleteConfirmationDialogComponent"],
        _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_42__["SpinnerComponent"],
        _pipes_task_complete_pipe_task_complete_pipe_pipe__WEBPACK_IMPORTED_MODULE_43__["TaskCompletePipePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatNativeDateModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__["MatCheckboxModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_35__["MatDividerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__["MatProgressSpinnerModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_46__["FullCalendarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _navigation_headnav_sidenav_headnav_sidenav_component__WEBPACK_IMPORTED_MODULE_6__["HeadnavSidenavComponent"],
                    _components_sidebar_create_list_create_list_button_create_list_button_component__WEBPACK_IMPORTED_MODULE_13__["CreateListButtonComponent"],
                    _components_sidebar_list_menu_list_menu_list_menu_component__WEBPACK_IMPORTED_MODULE_14__["ListMenuComponent"],
                    _dialog_list_create_dialog_list_create_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ListCreateDialogComponent"],
                    _components_main_container_task_creat_task_creat_component__WEBPACK_IMPORTED_MODULE_20__["TaskCreatComponent"],
                    _components_main_container_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_22__["TaskListComponent"],
                    _components_main_container_empty_container_empty_container_component__WEBPACK_IMPORTED_MODULE_23__["EmptyContainerComponent"],
                    _components_main_container_wrapper_container_wrapper_container_component__WEBPACK_IMPORTED_MODULE_25__["WrapperContainerComponent"],
                    _dialog_task_delete_dialog_task_delete_dialog_component__WEBPACK_IMPORTED_MODULE_26__["TaskDeleteDialogComponent"],
                    _dialog_list_edit_dialog_list_edit_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ListEditDialogComponent"],
                    _dialog_task_edit_dialog_task_edit_dialog_component__WEBPACK_IMPORTED_MODULE_30__["TaskEditDialogComponent"],
                    _components_main_container_page_not_found_container_page_not_found_container_component__WEBPACK_IMPORTED_MODULE_36__["PageNotFoundContainerComponent"],
                    _components_main_container_report_dashboard_report_dashboard_component__WEBPACK_IMPORTED_MODULE_37__["ReportDashboardComponent"],
                    _dialog_delete_confirmation_dialog_delete_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_41__["DeleteConfirmationDialogComponent"],
                    _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_42__["SpinnerComponent"],
                    _pipes_task_complete_pipe_task_complete_pipe_pipe__WEBPACK_IMPORTED_MODULE_43__["TaskCompletePipePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatNativeDateModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__["MatCheckboxModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_35__["MatDividerModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__["MatProgressSpinnerModule"],
                    _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_46__["FullCalendarModule"]
                ],
                providers: [_resolvers_list_menu_resolver_list_menu_resolver_service__WEBPACK_IMPORTED_MODULE_38__["ListMenuResolverService"], _resolvers_task_list_resolver_task_list_resolver_service__WEBPACK_IMPORTED_MODULE_39__["TaskListResolverService"], _services_spinner_service_spinner_service_service__WEBPACK_IMPORTED_MODULE_44__["SpinnerServiceService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptors_request_interceptor_request_interceptor__WEBPACK_IMPORTED_MODULE_45__["RequestInterceptor"], multi: true }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZtgZ":
/*!****************************************************************************!*\
  !*** ./src/app/resolvers/list-menu-resolver/list-menu-resolver.service.ts ***!
  \****************************************************************************/
/*! exports provided: ListMenuResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMenuResolverService", function() { return ListMenuResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http-service/http-service.service */ "TfZG");





class ListMenuResolverService {
    constructor(http, httpService) {
        this.http = http;
        this.httpService = httpService;
    }
    resolve(route, state) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint + 'list');
    }
}
ListMenuResolverService.ɵfac = function ListMenuResolverService_Factory(t) { return new (t || ListMenuResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"])); };
ListMenuResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ListMenuResolverService, factory: ListMenuResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListMenuResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: src_app_services_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] }]; }, null); })();


/***/ }),

/***/ "aTpn":
/*!****************************************************************************!*\
  !*** ./src/app/resolvers/task-list-resolver/task-list-resolver.service.ts ***!
  \****************************************************************************/
/*! exports provided: TaskListResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListResolverService", function() { return TaskListResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http-service/http-service.service */ "TfZG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class TaskListResolverService {
    constructor(http, httpService, activatedRoute) {
        this.http = http;
        this.httpService = httpService;
        this.activatedRoute = activatedRoute;
    }
    resolve(route, state) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint + 'task/' + route.paramMap.get('id'));
    }
}
TaskListResolverService.ɵfac = function TaskListResolverService_Factory(t) { return new (t || TaskListResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
TaskListResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskListResolverService, factory: TaskListResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskListResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: src_app_services_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "dXJE":
/*!***************************************************************!*\
  !*** ./src/app/services/list-service/list-service.service.ts ***!
  \***************************************************************/
/*! exports provided: ListServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListServiceService", function() { return ListServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _http_service_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../http-service/http-service.service */ "TfZG");








class ListServiceService {
    constructor(router, route, http, httpService) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.httpService = httpService;
        this.list = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    getlist() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + 'list');
    }
    //Add List Item
    addItem(ListName, ListOrder) {
        const item = {
            ListID: '',
            ListName: ListName,
            ListCreatedDT: moment__WEBPACK_IMPORTED_MODULE_3__(),
            ListUpdatedDT: moment__WEBPACK_IMPORTED_MODULE_3__(),
            ListOrder: ListOrder,
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + 'list', JSON.stringify(item));
    }
    //Edit List Item
    editList(listItem, newName) {
        const item = {
            ListID: listItem.ListID,
            ListName: newName,
            ListCreatedDT: listItem.ListCreatedDT,
            ListUpdatedDT: moment__WEBPACK_IMPORTED_MODULE_3__(),
            ListOrder: listItem.ListOrder,
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + 'list', JSON.stringify(item));
    }
    //Delete a list
    deleteList(ListID) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + 'list/' + ListID);
    }
}
ListServiceService.ɵfac = function ListServiceService_Factory(t) { return new (t || ListServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"])); };
ListServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ListServiceService, factory: ListServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _http_service_http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"] }]; }, null); })();


/***/ }),

/***/ "e5sC":
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_spinner_service_spinner_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/spinner-service/spinner-service.service */ "+BEB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SpinnerComponent {
    constructor(_spinner) {
        this._spinner = _spinner;
        this.spinner = this._spinner.spinner;
    }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_spinner_service_spinner_service_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerServiceService"])); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 2, vars: 3, consts: [["class", "overlay", 4, "ngIf"], [1, "overlay"], [1, "spinner"], [1, "bounce1"], [1, "bounce2"], [1, "bounce3"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.spinner));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".overlay[_ngcontent-%COMP%] {\r\n  position:fixed;\r\n  display:block;\r\n  width:100%;\r\n  height:100%;\r\n  top:7%;\r\n  left:0;\r\n  \r\n  z-index:99999;\r\n}\r\n\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  background-color: grey;\r\n  padding: 40px;\r\n   margin: 400px auto 0;\r\n   width: 200px;\r\n   height: 100px;\r\n   text-align: center;\r\n }\r\n\r\n\r\n.spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n   width: 18px;\r\n   height: 18px;\r\n   background-color: #3f51b5;\r\n \r\n   border-radius: 100%;\r\n   display: inline-block;\r\n   animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n }\r\n\r\n\r\n.spinner[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%] {\r\n   animation-delay: -0.32s;\r\n }\r\n\r\n\r\n.spinner[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%] {\r\n   animation-delay: -0.16s;\r\n }\r\n\r\n\r\n@keyframes sk-bouncedelay {\r\n   0%, 80%, 100% {\r\n     transform: scale(0);\r\n   } 40% {\r\n     transform: scale(1.0);\r\n   }\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsVUFBVTtFQUNWLFdBQVc7RUFDWCxNQUFNO0VBQ04sTUFBTTtFQUNOLGlEQUFpRDtFQUNqRCxhQUFhO0FBQ2Y7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixhQUFhO0dBQ1osb0JBQW9CO0dBQ3BCLFlBQVk7R0FDWixhQUFhO0dBQ2Isa0JBQWtCO0NBQ3BCOzs7QUFFQTtHQUNFLFdBQVc7R0FDWCxZQUFZO0dBQ1oseUJBQXlCOztHQUV6QixtQkFBbUI7R0FDbkIscUJBQXFCO0dBRXJCLHdEQUF3RDtDQUMxRDs7O0FBRUE7R0FFRSx1QkFBdUI7Q0FDekI7OztBQUVBO0dBRUUsdUJBQXVCO0NBQ3pCOzs7QUFPQTtHQUNFO0tBRUUsbUJBQW1CO0dBQ3JCLEVBQUU7S0FFQSxxQkFBcUI7R0FDdkI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHRvcDo3JTtcclxuICBsZWZ0OjA7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEyOCwgMTMwLCAxMzQsIDAuNTY4KTsgKi9cclxuICB6LWluZGV4Ojk5OTk5O1xyXG59XHJcblxyXG5cclxuLnNwaW5uZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgIG1hcmdpbjogNDAwcHggYXV0byAwO1xyXG4gICB3aWR0aDogMjAwcHg7XHJcbiAgIGhlaWdodDogMTAwcHg7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLnNwaW5uZXIgPiBkaXYge1xyXG4gICB3aWR0aDogMThweDtcclxuICAgaGVpZ2h0OiAxOHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gXHJcbiAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XHJcbiB9XHJcbiBcclxuIC5zcGlubmVyIC5ib3VuY2UxIHtcclxuICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcclxuICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbiB9XHJcbiBcclxuIC5zcGlubmVyIC5ib3VuY2UyIHtcclxuICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbiB9XHJcbiBcclxuIEAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XHJcbiAgIDAlLCA4MCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgfVxyXG4gICA0MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKSB9XHJcbiB9XHJcbiBcclxuIEBrZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xyXG4gICAwJSwgODAlLCAxMDAlIHsgXHJcbiAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgIH0gNDAlIHsgXHJcbiAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICB9XHJcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.css']
            }]
    }], function () { return [{ type: src_app_services_spinner_service_spinner_service_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerServiceService"] }]; }, null); })();


/***/ }),

/***/ "gfeI":
/*!***********************************************************************!*\
  !*** ./src/app/dialog/list-edit-dialog/list-edit-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEditDialogComponent", function() { return ListEditDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








class ListEditDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
ListEditDialogComponent.ɵfac = function ListEditDialogComponent_Factory(t) { return new (t || ListEditDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ListEditDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListEditDialogComponent, selectors: [["app-list-edit-dialog"]], decls: 12, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["appearance", "outline"], ["matInput", "", "maxlength", "60", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", "", 1, "action-buttons"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 3, "disabled", "mat-dialog-close"]], template: function ListEditDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rename List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "What would you like to rename it to ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListEditDialogComponent_Template_input_ngModelChange_6_listener($event) { return ctx.data.ListName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListEditDialogComponent_Template_button_click_8_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rename");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.ListName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.data.ListName)("mat-dialog-close", ctx.data.ListName);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".action-buttons[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    text-align: center;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL2xpc3QtZWRpdC1kaWFsb2cvbGlzdC1lZGl0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9nL2xpc3QtZWRpdC1kaWFsb2cvbGlzdC1lZGl0LWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbi1idXR0b25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5oMSxcclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListEditDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-edit-dialog',
                templateUrl: './list-edit-dialog.component.html',
                styleUrls: ['./list-edit-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "gz50":
/*!*************************************************!*\
  !*** ./src/app/models/list-model/list.model.ts ***!
  \*************************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
class List {
}


/***/ }),

/***/ "hKA5":
/*!***************************************************************************!*\
  !*** ./src/app/dialog/list-create-dialog/list-create-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListCreateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCreateDialogComponent", function() { return ListCreateDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _models_list_model_list_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/list-model/list.model */ "gz50");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








class ListCreateDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
ListCreateDialogComponent.ɵfac = function ListCreateDialogComponent_Factory(t) { return new (t || ListCreateDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ListCreateDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListCreateDialogComponent, selectors: [["app-list-create-dialog"]], decls: 11, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["appearance", "outline"], ["cdkFocusInitial", "", "matInput", "", "placeholder", "List Name", "maxlength", "60"], ["listName", ""], ["mat-dialog-actions", "", 1, "action-buttons"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 3, "disabled", "mat-dialog-close"]], template: function ListCreateDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New List Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListCreateDialogComponent_Template_button_click_7_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.value)("mat-dialog-close", _r0.value);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\r\n    display: inline;\r\n}\r\n\r\n.action-buttons[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL2xpc3QtY3JlYXRlLWRpYWxvZy9saXN0LWNyZWF0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2cvbGlzdC1jcmVhdGUtZGlhbG9nL2xpc3QtY3JlYXRlLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLmFjdGlvbi1idXR0b25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListCreateDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-create-dialog',
                templateUrl: './list-create-dialog.component.html',
                styleUrls: ['./list-create-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _models_list_model_list_model__WEBPACK_IMPORTED_MODULE_2__["List"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "i6zp":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/main-container/page-not-found-container/page-not-found-container.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: PageNotFoundContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundContainerComponent", function() { return PageNotFoundContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



class PageNotFoundContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundContainerComponent.ɵfac = function PageNotFoundContainerComponent_Factory(t) { return new (t || PageNotFoundContainerComponent)(); };
PageNotFoundContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundContainerComponent, selectors: [["app-page-not-found-container"]], decls: 2, vars: 0, consts: [["src", "../../../../assets/images/404_page_not_found.jpg"]], template: function PageNotFoundContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"]], styles: ["mat-card[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 96%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbnRhaW5lci9wYWdlLW5vdC1mb3VuZC1jb250YWluZXIvcGFnZS1ub3QtZm91bmQtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1jb250YWluZXIvcGFnZS1ub3QtZm91bmQtY29udGFpbmVyL3BhZ2Utbm90LWZvdW5kLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogOTYlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found-container',
                templateUrl: './page-not-found-container.component.html',
                styleUrls: ['./page-not-found-container.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "md3V":
/*!*************************************************************************!*\
  !*** ./src/app/interceptors/request-interceptor/request-interceptor.ts ***!
  \*************************************************************************/
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_spinner_service_spinner_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/spinner-service/spinner-service.service */ "+BEB");




/** Pass untouched request through to the next request handler */
class RequestInterceptor {
    constructor(_spinner) {
        this._spinner = _spinner;
    }
    intercept(req, next) {
        this._spinner.show();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._spinner.hide()));
    }
}
RequestInterceptor.ɵfac = function RequestInterceptor_Factory(t) { return new (t || RequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_spinner_service_spinner_service_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerServiceService"])); };
RequestInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestInterceptor, factory: RequestInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_services_spinner_service_spinner_service_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerServiceService"] }]; }, null); })();


/***/ }),

/***/ "n4Ex":
/*!***************************************************************!*\
  !*** ./src/app/services/task-service/task-service.service.ts ***!
  \***************************************************************/
/*! exports provided: TaskServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskServiceService", function() { return TaskServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _http_service_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service/http-service.service */ "TfZG");






class TaskServiceService {
    constructor(http, httpService) {
        this.http = http;
        this.httpService = httpService;
    }
    getTaskList(ListID) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + 'task/' + ListID);
    }
    getCompletedTaskList(ListID) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + 'taskcomplete/' + ListID);
    }
    getAllTasks() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + 'task');
    }
    //Adding a tasks
    addTask(todo, selectedListId, taskIndex) {
        const task = {
            TaskID: '',
            ListID: selectedListId,
            TaskTitle: todo,
            TaskDescription: '',
            TaskStatus: 'Ready',
            TaskDueDT: moment__WEBPACK_IMPORTED_MODULE_1__(),
            TaskPriority: 'Medium',
            isComplete: false,
            isArchived: false,
            isDueDateSet: false,
            TaskOrder: taskIndex,
            TaskCreatedDT: moment__WEBPACK_IMPORTED_MODULE_1__(),
            TaskUpdatedDT: moment__WEBPACK_IMPORTED_MODULE_1__(),
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + 'task', JSON.stringify(task));
    }
    //Delete a task
    deleteTask(TaskID, type) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + type + TaskID);
    }
    //Edit a task
    editTask(task) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + 'task', JSON.stringify(task));
    }
    updateTask(taskList, task, response) {
        taskList = taskList.map((item) => {
            if (task.TaskID == item.TaskID) {
                return Object.assign(Object.assign({}, item), response);
            }
            else {
                return item;
            }
        });
        return taskList;
    }
    completeTask(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + 'taskcomplete', JSON.stringify(data));
    }
    restoreTask(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + 'taskrestore', JSON.stringify(data));
    }
    archiveTask(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + 'taskarchive', JSON.stringify(data));
    }
}
TaskServiceService.ɵfac = function TaskServiceService_Factory(t) { return new (t || TaskServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"])); };
TaskServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskServiceService, factory: TaskServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _http_service_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] }]; }, null); })();


/***/ }),

/***/ "nRM1":
/*!***********************************************************************!*\
  !*** ./src/app/dialog/task-edit-dialog/task-edit-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: TaskEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEditDialogComponent", function() { return TaskEditDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function TaskEditDialogComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cannot edit status when task is complete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TaskEditDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
TaskEditDialogComponent.ɵfac = function TaskEditDialogComponent_Factory(t) { return new (t || TaskEditDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
TaskEditDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskEditDialogComponent, selectors: [["app-task-edit-dialog"]], decls: 68, vars: 10, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["appearance", "outline"], ["maxlength", "100", "matInput", "", 3, "ngModel", "ngModelChange"], ["matInput", "", 3, "ngModel", "ngModelChange"], [3, "value", "valueChange"], ["value", "Low"], [1, "option"], [1, "low-dot"], ["value", "Medium"], [1, "medium-dot"], ["value", "High"], [1, "high-dot"], ["value", "Critical"], [1, "critical-dot"], ["color", "accent", "appearance", "outline"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["color", "primary"], ["duedatepicker", ""], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], [3, "value", "disabled", "valueChange"], ["value", "Ready"], [1, "ready-dot"], ["value", "In Progress"], [1, "wip-dot"], ["value", "Done"], [1, "done-dot"], ["value", "Stuck"], [1, "stuck-dot"], ["value", "Hold"], [1, "onHold-dot"], ["mat-dialog-actions", "", 1, "action-buttons"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "cdkFocusInitial", "", "color", "primary", 3, "mat-dialog-close"], ["role", "alert", 1, "alert", "alert-info"]], template: function TaskEditDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskEditDialogComponent_Template_input_ngModelChange_6_listener($event) { return ctx.data.TaskTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskEditDialogComponent_Template_textarea_ngModelChange_10_listener($event) { return ctx.data.TaskDescription = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TaskEditDialogComponent_Template_mat_select_valueChange_14_listener($event) { return ctx.data.TaskPriority = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Meduim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "High");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Critical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Due Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskEditDialogComponent_Template_input_ngModelChange_34_listener($event) { return ctx.data.TaskDueDT = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-datepicker-toggle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-datepicker", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, TaskEditDialogComponent_div_38_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TaskEditDialogComponent_Template_mat_select_valueChange_42_listener($event) { return ctx.data.TaskStatus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "In Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Stuck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskEditDialogComponent_Template_button_click_64_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Save Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.TaskTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.TaskDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.data.TaskPriority);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.data.TaskDueDT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.taskComplete == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.data.TaskStatus)("disabled", ctx.data.isComplete == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    display: inline;\r\n}\r\n\r\n.action-buttons[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n}\r\n\r\n.option[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n.low-dot[_ngcontent-%COMP%] {\r\n    height: 15px;\r\n    width: 15px;\r\n    background-color: #3c78d8;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\n.medium-dot[_ngcontent-%COMP%] {\r\n    height: 15px;\r\n    width: 15px;\r\n    background-color: #6aa84f;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\n.high-dot[_ngcontent-%COMP%] {\r\n    height: 15px;\r\n    width: 15px;\r\n    background-color: #e77f11;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\n.critical-dot[_ngcontent-%COMP%] {\r\n    height: 15px;\r\n    width: 15px;\r\n    background-color: #cc0000;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n\r\n.ready-dot[_ngcontent-%COMP%] {\r\n    height: 15px;\r\n    width: 15px;\r\n    background-color: #dfa800;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\n.wip-dot[_ngcontent-%COMP%] {\r\n    height: 15px;\r\n    width: 15px;\r\n    background-color: #1155cc;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\n.done-dot[_ngcontent-%COMP%] {\r\n    height: 15px;\r\n    width: 15px;\r\n    background-color: #38761d;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\n.stuck-dot[_ngcontent-%COMP%] {\r\n    height: 15px;\r\n    width: 15px;\r\n    background-color: #990000;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\n.onHold-dot[_ngcontent-%COMP%] {\r\n    height: 15px;\r\n    width: 15px;\r\n    background-color: #741b47;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\nalert-info[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL3Rhc2stZWRpdC1kaWFsb2cvdGFzay1lZGl0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUdBLGFBQWE7O0FBRWI7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUdBLFdBQVc7O0FBRVg7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2cvdGFzay1lZGl0LWRpYWxvZy90YXNrLWVkaXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm9wdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIFByaW9yaXR5ICovXHJcblxyXG4ubG93LWRvdCB7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzc4ZDg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5tZWRpdW0tZG90IHtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhYTg0ZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmhpZ2gtZG90IHtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3N2YxMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNyaXRpY2FsLWRvdCB7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcblxyXG4vKiBTdGF0dXMgKi9cclxuXHJcbi5yZWFkeS1kb3Qge1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZhODAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ud2lwLWRvdCB7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTU1Y2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kb25lLWRvdCB7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODc2MWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zdHVjay1kb3Qge1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkwMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ub25Ib2xkLWRvdCB7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NDFiNDc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmFsZXJ0LWluZm8ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskEditDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-edit-dialog',
                templateUrl: './task-edit-dialog.component.html',
                styleUrls: ['./task-edit-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "pyuB":
/*!********************************************************************************************!*\
  !*** ./src/app/components/main-container/wrapper-container/wrapper-container.component.ts ***!
  \********************************************************************************************/
/*! exports provided: WrapperContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperContainerComponent", function() { return WrapperContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _task_creat_task_creat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task-creat/task-creat.component */ "tv40");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task-list/task-list.component */ "FGNR");




class WrapperContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
WrapperContainerComponent.ɵfac = function WrapperContainerComponent_Factory(t) { return new (t || WrapperContainerComponent)(); };
WrapperContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WrapperContainerComponent, selectors: [["app-wrapper-container"]], decls: 2, vars: 0, template: function WrapperContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-task-creat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-task-list");
    } }, directives: [_task_creat_task_creat_component__WEBPACK_IMPORTED_MODULE_1__["TaskCreatComponent"], _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_2__["TaskListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1jb250YWluZXIvd3JhcHBlci1jb250YWluZXIvd3JhcHBlci1jb250YWluZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WrapperContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wrapper-container',
                templateUrl: './wrapper-container.component.html',
                styleUrls: ['./wrapper-container.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qjoh":
/*!****************************************************************************************!*\
  !*** ./src/app/components/main-container/empty-container/empty-container.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EmptyContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyContainerComponent", function() { return EmptyContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



class EmptyContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
EmptyContainerComponent.ɵfac = function EmptyContainerComponent_Factory(t) { return new (t || EmptyContainerComponent)(); };
EmptyContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmptyContainerComponent, selectors: [["app-empty-container"]], decls: 2, vars: 0, consts: [["src", "../../../../assets/images/welcome_cats.svg"]], template: function EmptyContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"]], styles: ["mat-card[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 96%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    max-width: 50%;\r\n    max-height: 50%;\r\n}\r\n\r\nmat-grid-tile[_ngcontent-%COMP%] {\r\n    background: lightblue;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbnRhaW5lci9lbXB0eS1jb250YWluZXIvZW1wdHktY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxxQkFBcUI7RUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tY29udGFpbmVyL2VtcHR5LWNvbnRhaW5lci9lbXB0eS1jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDk2JTtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcblxyXG5tYXQtZ3JpZC10aWxlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmptyContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-empty-container',
                templateUrl: './empty-container.component.html',
                styleUrls: ['./empty-container.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tv40":
/*!******************************************************************************!*\
  !*** ./src/app/components/main-container/task-creat/task-creat.component.ts ***!
  \******************************************************************************/
/*! exports provided: TaskCreatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCreatComponent", function() { return TaskCreatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_task_service_task_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/task-service/task-service.service */ "n4Ex");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class TaskCreatComponent {
    constructor(taskService, route) {
        this.taskService = taskService;
        this.route = route;
    }
    ngOnInit() {
        this.routeSub = this.route.paramMap.subscribe(params => {
            this.selectedListId = params.get('id');
        });
    }
    onSubmit(form) {
        if (form.invalid) {
            return;
        }
        //this.taskService.addTask(form.value.taskInputField, this.selectedListId);
        form.resetForm();
    }
    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
TaskCreatComponent.ɵfac = function TaskCreatComponent_Factory(t) { return new (t || TaskCreatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_task_service_task_service_service__WEBPACK_IMPORTED_MODULE_1__["TaskServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
TaskCreatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskCreatComponent, selectors: [["app-task-creat"]], decls: 10, vars: 0, consts: [[1, "container-fluid"], [3, "submit"], ["taskForm", "ngForm"], [1, "form-row", "align-items-center"], [1, "col-xs-12", "col-lg-11"], ["type", "text", "maxlength", "100", "id", "inlineFormInput", "placeholder", "Whats up ?", "ngModel", "", "name", "taskInputField", "required", "", 1, "form-control", "mb-2"], ["taskField", "ngModel"], [1, "col-xs-12", "col-lg-1"], ["mat-raised-button", "", "color", "primary", 1, "btn", "btn-primary", "mb-2"]], template: function TaskCreatComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function TaskCreatComponent_Template_form_submit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n    padding: 1rem;\r\n    margin-bottom: 1rem;\r\n    border-bottom: solid 1px #ccc;\r\n    background-color: #f6f8fa;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbnRhaW5lci90YXNrLWNyZWF0L3Rhc2stY3JlYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1jb250YWluZXIvdGFzay1jcmVhdC90YXNrLWNyZWF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY4ZmE7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskCreatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-creat',
                templateUrl: './task-creat.component.html',
                styleUrls: ['./task-creat.component.css']
            }]
    }], function () { return [{ type: _services_task_service_task_service_service__WEBPACK_IMPORTED_MODULE_1__["TaskServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_main_container_page_not_found_container_page_not_found_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-container/page-not-found-container/page-not-found-container.component */ "i6zp");
/* harmony import */ var _components_main_container_report_dashboard_report_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-container/report-dashboard/report-dashboard.component */ "Gvw9");
/* harmony import */ var _components_sidebar_list_menu_list_menu_list_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/list-menu/list-menu/list-menu.component */ "8dEv");
/* harmony import */ var _resolvers_list_menu_resolver_list_menu_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers/list-menu-resolver/list-menu-resolver.service */ "ZtgZ");
/* harmony import */ var _components_main_container_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-container/task-list/task-list.component */ "FGNR");
/* harmony import */ var _resolvers_report_resolver_report_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resolvers/report-resolver/report-resolver.service */ "SxHf");










const routes = [
    { path: '', component: _components_main_container_report_dashboard_report_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ReportDashboardComponent"], resolve: { task: _resolvers_report_resolver_report_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ReportResolverService"] } },
    { path: '', component: _components_sidebar_list_menu_list_menu_list_menu_component__WEBPACK_IMPORTED_MODULE_4__["ListMenuComponent"], outlet: 'app-list-menu', resolve: { list: _resolvers_list_menu_resolver_list_menu_resolver_service__WEBPACK_IMPORTED_MODULE_5__["ListMenuResolverService"] } },
    { path: 'list/:id', component: _components_main_container_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__["TaskListComponent"] },
    { path: '**', component: _components_main_container_page_not_found_container_page_not_found_container_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundContainerComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wmFC":
/*!*******************************************************************************************!*\
  !*** ./src/app/dialog/delete-confirmation-dialog/delete-confirmation-dialog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DeleteConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteConfirmationDialogComponent", function() { return DeleteConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function DeleteConfirmationDialogComponent_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Are you sure you want to delete this task ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeleteConfirmationDialogComponent_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Are you sure you want to delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " list ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.ListName);
} }
class DeleteConfirmationDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
DeleteConfirmationDialogComponent.ɵfac = function DeleteConfirmationDialogComponent_Factory(t) { return new (t || DeleteConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DeleteConfirmationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteConfirmationDialogComponent, selectors: [["app-delete-confirmation-dialog"]], decls: 10, vars: 3, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [4, "ngIf"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function DeleteConfirmationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DeleteConfirmationDialogComponent_h3_3_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DeleteConfirmationDialogComponent_h3_4_Template, 5, 1, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.element == "task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.element == "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["mat-dialog-actions[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n}\r\n\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL2RlbGV0ZS1jb25maXJtYXRpb24tZGlhbG9nL2RlbGV0ZS1jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9nL2RlbGV0ZS1jb25maXJtYXRpb24tZGlhbG9nL2RlbGV0ZS1jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5oMiwgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteConfirmationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-confirmation-dialog',
                templateUrl: './delete-confirmation-dialog.component.html',
                styleUrls: ['./delete-confirmation-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map