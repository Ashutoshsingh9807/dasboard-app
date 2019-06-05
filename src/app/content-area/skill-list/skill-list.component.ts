import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

import { skillModel } from 'src/app/shared/skills.model';
import { skillsService } from 'src/app/shared/skill.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  list:skillModel[];
  usersskill;
  constructor(private skillService:skillsService,  private firestore:AngularFirestore, private toastr:ToastrService) { }

  ngOnInit() {
    // this.skillService.getSkills().subscribe(actionArray => {
    //   this.list = actionArray.map(item => {
    //     return {
    //       id:item.payload.doc.id,
    //       ...item.payload.doc.data()} as skillModel;
    //   })
    // });
    this.skillService.getskill() 
      .subscribe( user => {
        this.usersskill = user;
      })
  }
  onEdit(listskill:skillModel) { 
    this.skillService.formData = Object.assign({},listskill);
  }
  onDelete(id:string) {
    if(confirm("Are you sure want to delete Skill")) {
     this.firestore.doc('skills/' + id).delete(); 
     this.toastr.warning("Deleted successfully");
    } 
  }

}
