import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

   loadLaguWajib(){
       this.http.get('http://www.belanegaraku.id/m/index.php/Berita/fetch_headline_news')
      .map(res => res.json())
      .subscribe(data => 
      {
         this.laguWajib = data;   
             
      });
   }


  // initializeItems() {

  

  //   this.items = [
  //     {judul_lagu:"Api Kemerdekaan",pengarang:"Djoko Lelono",nada_dasar:"C",ketukan:"3 1/4"},
  //     {judul_lagu:"Bagi Mu Negeri",pengarang:"Kusbini",nada_dasar:"C",ketukan:"4/4"},
  //     {judul_lagu:"Bangun Pemudi Pemuda",pengarang:"Alfred Simanjuntak",nada_dasar:"G",ketukan:"4/4"},
  //     {judul_lagu:"Bendera Merah Putih",pengarang:"Ibu Soed",nada_dasar:"F",ketukan:"4/4"},
  //     {judul_lagu:"Berkibarlah Bendera Ku",pengarang:"Ibu Soed",nada_dasar:"G",ketukan:"4/4"},
  //     {judul_lagu:"Bhinneka Tunggal Ika",pengarang:"Binsar Sitompul",nada_dasar:"F",ketukan:"4/4"},
  //     {judul_lagu:"Dari Sabang Sampai Merauke",pengarang:"R. Soerardjo",nada_dasar:"C",ketukan:"4/4"},
  //     {judul_lagu:"Di Timur Matahari",pengarang:"Djoko Lelono",nada_dasar:"C",ketukan:"3 1/4"},

  //   ];


  // }



  getItems(ev: any) {
    
    console.log(ev);
    // Reset items back to all of the items
   this.loadLaguWajib();

    // set val to the value of the searchbar
    let val = ev.target.value;



    // // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((v:any) => {

    

        return (v.judul_lagu.toLowerCase().indexOf(val.toLowerCase()) > -1);
       
      })
    }
  }

}
