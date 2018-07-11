import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

enum KEY_CODE {
    DOWN_ARROW = 40,
    UP_ARROW = 38
}

@Directive({
    selector: '[keydownEvent]'
})

export class KeydownEventDirective {
    

    @Output() public keydownEvent = new EventEmitter();

    @HostListener('keydown', ['$event'])
        public onKeydown(event: KeyboardEvent) {
            if(event.keyCode === KEY_CODE.DOWN_ARROW) {
                this.keydownEvent.emit('downArrow');
            }
            if(event.keyCode === KEY_CODE.UP_ARROW) {
                this.keydownEvent.emit('upArrow');
            }
        }
}