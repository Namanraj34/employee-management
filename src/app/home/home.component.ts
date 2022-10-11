import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: any = '';
  dob: any = '';
  salary: any = '';
  join_Date: any = '';
  relie_Date: any = '';
  contact: any = '';
  status: any = '';

  new_name: any = '';
  new_dob: any = '';
  new_sal: any = '';
  new_join_Date: any = '';
  new_relie_Date: any = '';
  new_contact: any = '';
  new_status: any = '';
  data: any = [];

  isUpdate = false;
  updateId: any = null;

  handleSubmit() {
    if (
      this.dob == '' ||
      (this.dob == null && this.name == '') ||
      (this.name == null && this.salary == '') ||
      (this.salary == null && this.join_Date == '') ||
      (this.join_Date == null && this.relie_Date == '') ||
      (this.relie_Date == null && this.contact == '') ||
      (this.contact == null && this.status == '') ||
      this.status == null
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You did not fill the all field!',
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else {
      this.data.push({
        id: this.data.length,
        name: this.name,
        dob: this.dob,
        salary: this.salary,
        join_Date: this.join_Date,
        relie_Date: this.relie_Date,
        contact: this.contact,
        status: this.status,
      });
      this.name = '';
      this.dob = '';
      this.salary = '';
      this.join_Date = '';
      this.relie_Date = '';
      this.new_contact = '';
      this.new_status = '';
      Swal.fire(
        'Thanks For Filling All Details!',
        'You clicked the button!',
        'success'
      );
    }
  }

  handleEdit(id: number) {
    this.isUpdate = true;
    this.updateId = id;
    let obj = this.data.filter((x: any) => x.id == id);

    this.new_name = obj[0].name;
    this.new_dob = obj[0].dob;
    this.new_sal = obj[0].salary;
    this.new_join_Date = obj[0].join_Date;
    this.new_relie_Date = obj[0].relie_Date;
    this.new_contact = obj[0].contact;
    this.new_status = obj[0].status;
  }

  update() {
    this.data.map((x: any) => {
      if (x.id == this.updateId) {
        x.name = this.new_name;
        x.dob = this.new_dob;
        x.salary = this.new_sal;
        x.join_Date = this.new_join_Date;
        x.relie_Date = this.new_relie_Date;
        x.contact = this.new_contact;
        x.status = this.new_status;
      }
    });
    this.isUpdate = false;
  }

  handleDelete(id: number) {
    this.data = this.data.filter((x: any) => x.id != id);
  }

  display = false;

  toggle() {
    this.display = !this.display;
  }
}
