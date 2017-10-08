import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 
import {DetailBeritaPage} from '../detail-berita/detail-berita';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	public listBerita : any = [];

  constructor(public navCtrl: NavController,public http :Http) {

  }

   getDetailBerita(item,str:string){

   this.navCtrl.push(DetailBeritaPage,{
     data:item,
     title:str
   });

    console.log(item);
  }

  ionViewWillEnter(){
  	this.loadListBerita();
  }

  loadListBerita(){
  	this.http.get('http://www.belanegaraku.id/m/index.php/Berita/fetch_all_news')
      .map(res => res.json())
      .subscribe(data => 
      {
         this.listBerita = data;   
               
      });
  }

}
