import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.css']
})
export class ChatButtonComponent {
   // Generar el código QR
   isModalVisible = false;

   openWhatsApp() {
     // Mostrar el modal
     this.isModalVisible = true;
   }
 
   closeModal() {
     // Cerrar el modal
     this.isModalVisible = false;
   }
}


  
