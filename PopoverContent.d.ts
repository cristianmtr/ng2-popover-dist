import { AfterViewInit, ElementRef, ChangeDetectorRef, OnDestroy, EventEmitter } from "@angular/core";
import { Popover } from "./Popover";
export declare class PopoverContent implements AfterViewInit, OnDestroy {
    protected element: ElementRef;
    protected cdr: ChangeDetectorRef;
    content: string;
    placement: "top" | "bottom" | "left" | "right";
    title: string;
    animation: boolean;
    closeOnClickOutside: boolean;
    closeOnMouseOutside: boolean;
    popoverDiv: ElementRef;
    popover: Popover;
    onCloseFromOutside: EventEmitter<{}>;
    top: number;
    left: number;
    isIn: boolean;
    displayType: string;
    IACCESS_ARROW_SIZE: number;
    /**
     * Closes dropdown if user clicks outside of this directive.
     */
    onDocumentMouseDown: (event: any) => void;
    constructor(element: ElementRef, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    hideFromPopover(): void;
    protected positionElements(hostEl: HTMLElement, targetEl: HTMLElement, positionStr: string, appendToBody?: boolean): {
        top: number;
        left: number;
    };
    protected position(nativeEl: HTMLElement): {
        width: number;
        height: number;
        top: number;
        left: number;
    };
    protected offset(nativeEl: any): {
        width: number;
        height: number;
        top: number;
        left: number;
    };
    protected getStyle(nativeEl: HTMLElement, cssProp: string): string;
    protected isStaticPositioned(nativeEl: HTMLElement): boolean;
    protected parentOffsetEl(nativeEl: HTMLElement): any;
}
