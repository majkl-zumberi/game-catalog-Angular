import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/userModel';
import { NgForm,FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  editDataUserForm: FormGroup;
  name: string = "Majkl";
  utente: User = {
    uid: '',
    email: '',
    displayName: '',
    role: '',
    birthDate: null,
    male: null
  }
  get dateControl(): FormControl {
    return this.editDataUserForm.get('data') as FormControl;
  }
  get genderControl(): FormControl {
    return this.editDataUserForm.get('gender') as FormControl;
  }
  constructor(public auth: AuthService, private fb: FormBuilder) {
    let userToForm;
    this.auth.user$.subscribe(user => {
      if(user!=null){
        userToForm = user;
        let dataNascita = user.birthDate;
        
  
        try {
           dataNascita = new Date(dataNascita).toISOString().substring(0, 10);
          /* Ends up logging `Invalid Date`
           */
  
          console.log(dataNascita);
        } catch (_error) {
          
          /* Should come here and log `Error: Invalid Date` or the likes
           */
          console.log("data invalida quindi lascio quella di default");
          console.log("Erorr: " + _error);
        }
        this.editDataUserForm = this.fb.group({
          emailUser: [{
            value: user.email,
            disabled: true
          }],
          username: [{
            value: user.displayName,
            disabled: true
          }],
          data: dataNascita,
          gender: user.male,
        });
      }
    })
  }

  ngOnInit(): void {}

  updateUser() {
    this.auth.user$.subscribe(user => {
      if(user!=null){
        console.log(user);
        console.log(this.genderControl.value);
        console.log(this.dateControl.value);
        this.utente = user;
        this.utente.male = this.genderControl.value;
        this.utente.birthDate = this.dateControl.value;
        this.auth.updateUserData(this.utente);
        document.getElementById("closeModal").click();
      }
    });
  }
}
