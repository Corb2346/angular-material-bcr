import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogComponent>) { }

  favoriteList: any[] = [];

  ngOnInit(): void {
    console.log("data recibida: ", this.data);
  }

  addToList(data:any){
    console.log("ya sirve el boton agregar a la fila");
    localStorage.setItem("movie-list",JSON.stringify(data));
    let getfromLocal = localStorage.getItem("movie-list");
    console.log("traido del localstorage", getfromLocal);
    /*this.favoriteList.push(getfromLocal);
    console.log("arreglo con peliculas: ", this.favoriteList);
    let indexOfList = this.favoriteList.indexOf(getfromLocal);
    console.log(indexOfList);
    let indexList = this.favoriteList.length;
    console.log("indexList",indexList);
    this.favoriteList.splice(indexOfList,0)
    console.log(this.favoriteList);*/
    
  }

  markAsFavorite(data:any){
    console.log("ya sirve el boton favorito");
    localStorage.setItem("movie-fav",JSON.stringify(data));
  }

}
