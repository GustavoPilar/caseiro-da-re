import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        Caseirinho by
        <a href="https://github.com/gustavoPilar" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">GustavoPilar</a>
    </div>`
})
export class AppFooter {}
