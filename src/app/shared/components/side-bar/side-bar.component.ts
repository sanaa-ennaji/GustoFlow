import { Component ,Input } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-side-bar',
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './side-bar.component.html',
  standalone: true,
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  @Input() isVisible: boolean = true;

}
