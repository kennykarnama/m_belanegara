import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {DetailLaguWajibPage} from '../detail-lagu-wajib/detail-lagu-wajib';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
searchQuery: string = '';
  //items: string[];
  items: object[] = [
    {judul_lagu:""}
  ];

  public laguWajib : any = [];


  constructor(public navCtrl: NavController,public http : Http) {
      //this.initializeItems();
   }

    ionViewWillEnter(){

     this.loadLaguWajib();

  }

  getDetailLaguWajib(item){

    console.log(item);

    this.navCtrl.push(DetailLaguWajibPage,{data:item});
  }

   loadLaguWajib(){
       this.http.get('http://www.belanegaraku.id/m/index.php/Lagu_Wajib/fetch_all_lagu_wajib')
      .map(res => res.json())
      .subscribe(data => 
      {
         this.laguWajib = data;     
         console.log(this.laguWajib);
             
      });
   }




  getItems(ev: any) {
    
    console.log(ev);
    // Reset items back to all of the items
   this.loadLaguWajib();

    // set val to the value of the searchbar
    let val = ev.target.value;



    // // if the value is an empty string don't filter the items
    // if (val && val.trim() != '') {
    //   this.items = this.items.filter((v:any) => {

    

    //     return (v.judul_lagu_wajib.toLowerCase().indexOf(val.toLowerCase()) > -1);
       
    //   })
    // }
  }

}
