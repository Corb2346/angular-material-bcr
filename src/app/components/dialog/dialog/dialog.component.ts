import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogComponent>) { }

  //favoriteList: any[] = [];

  ngOnInit(): void {

  }

  addToList(data:any){
    let favoriteList= JSON.parse(localStorage.getItem('movie-list') ?? '[]');

    console.log("ya sirve el boton agregar a la fila, esta info me pasaron: ", data);
    if(favoriteList.indexOf(data) == -1){
      favoriteList.push(data);
      console.log(JSON.stringify(favoriteList));
    localStorage.setItem("movie-list",JSON.stringify(favoriteList));
    }
  
  
  }
  
  
  markAsFavorite(data:any){
    console.log("ya sirve el boton favorito");
    localStorage.setItem("movie-fav",JSON.stringify(data));
  }

}
