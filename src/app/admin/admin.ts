import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Content } from '../content/content';
import { Footer } from '../footer/footer';

@Component({
  imports: [Header, Sidebar, Content, Footer],
  selector: 'app-admin',
  styleUrl: './admin.css',
  templateUrl: './admin.html',
})
export class Admin {}