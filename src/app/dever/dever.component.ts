import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
};

@Component({
  selector: 'app-dever',
  templateUrl: './dever.component.html',
  styleUrls: ['./dever.component.css']
})
export class DeverComponent implements OnInit{
  item$: Observable<any[]>;
  itens = [];
  constructor(db: Firestore) {
    const colecao = collection(db,'2TI');
    this.item$ = collectionData(colecao)
  }

  ngOnInit(): void {
    this.item$.subscribe(arg => {
        for(var dever of arg){
          if(dever.title != null && dever.data.seconds*1000>Date.now()){
            var data = new Date
            data.setTime(dever.data.seconds*1000)
            dever.data   =  ('0' + data.getDate()).slice(-2) +
                      "/" + ('0' + data.getMonth()+1).slice(-2) +
                      " " + ('0' + data.getHours()).slice(-2) +
                      ":" + ('0' + data.getMinutes()).slice(-2);
            this.itens.unshift(dever)
          }
        }
        console.log(this.itens)
      }
    );



    // for (this.item$ ){
    //   console.log(item)
    //   var date = new Date(item);

    //   console.log("Date: "+date.getDate()+
    //             "/"+(date.getMonth()+1)+
    //             "/"+date.getFullYear()+
    //             " "+date.getHours()+
    //             ":"+date.getMinutes()+
    //             ":"+date.getSeconds());
    // }
  }

  OnInit(){

  }
}


