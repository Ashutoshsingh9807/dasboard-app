import { Component, OnInit } from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-testing-cloudstorage',
  templateUrl: './testing-cloudstorage.component.html',
  styleUrls: ['./testing-cloudstorage.component.css']
})
export class TestingCloudstorageComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  // uploadProgress: Observable<number>;
  uplaodwidth: number;
  downloadURL: Observable<string>;
  constructor(private afStorage:AngularFireStorage) { }
  
  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.task.percentageChanges().subscribe((data) => {
      this.uplaodwidth = data;   
      if(this.uplaodwidth == 100) {
        this.downloadURL = this.ref.getDownloadURL();
        
      }
    })       
  }

  ngOnInit() {
  }

}
