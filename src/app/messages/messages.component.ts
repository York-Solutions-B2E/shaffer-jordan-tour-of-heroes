import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FormsModule, CommonModule, HeroDetailComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
