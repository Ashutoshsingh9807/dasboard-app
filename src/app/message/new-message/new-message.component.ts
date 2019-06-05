import { Component, OnInit } from '@angular/core';
import { MessageTo } from 'src/app/shared/message-to.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { newMessageService } from 'src/app/shared/services/new-message.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styles: []
})
export class NewMessageComponent implements OnInit {
  
  broadcastTo: string;
  broadcasts: string[] = ['Myself', 'Selected people'];
  disable_status: boolean = false;

  messageto: MessageTo[] = [
    {value: 'company', viewValue: 'Company'},
    {value: 'delhi', viewValue: 'Delhi'},
    {value: 'Bhubaneswar', viewValue: 'Bhubaneswar'},
    {value: 'Bangalore', viewValue: 'Bangalore'}
  ];
  constructor( private firestore:AngularFirestore, private newMessageservice:newMessageService, private toastr:ToastrService) { }
  usersId = [];
  addUser = '';
  ngOnInit() {
    // this.resetForm();
  }
  
  disable_select() {
  this.disable_status = !this.disable_status; 
  }
  // resetForm() {
  //   if(this.addUser !=null)
  //   // this.addUser.resetForm();
  // }
  onAddUser() {
    this.usersId.push ({
      name : this.addUser,
    });
    this.toastr.success('User Added successfully');
    // this.resetForm()
  }
  
  onRemoveUser() {
    if(confirm("Are you sure want to delete User")) {
      this.usersId.splice(name);
      this.toastr.warning("Deleted successfully");
     } 
  }
//   onaddnewMessage(form:NgForm) {
//     let newmessage = Object.assign({},form.value);
//     delete newmessage.id;
//     if(form.value.id == null) {
//     this.firestore.collection('new_message').add(newmessage);
//     this.resetForm(form);
//   }
// }
}
