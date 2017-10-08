import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 
import {DetailBeritaPage} from '../detail-berita/detail-berita';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public headlineNews : any = [];

  public nBerita : any = [];

  public nArtikel : any = [];

	


  constructor(public navCtrl: NavController,public http:Http) {

  }

  ionViewWillEnter(){

  	this.loadHeadlineNews();

    this.loadNBerita();

    this.loadNArtikel();

  }

  getDetailBerita(item,str:string){

   this.navCtrl.push(DetailBeritaPage,{
     data:item,
     title:str
   });

    console.log(item);
  }

 

  loadHeadlineNews(){

  	this.http.get('http://www.belanegaraku.id/m/index.php/Berita/fetch_headline_news')
      .map(res => res.json())
      .subscribe(data => 
      {
         this.headlineNews = data;   
         console.log(this.headlineNews);      
      });

  }

  loadNBerita(){

    this.http.get('http://www.belanegaraku.id/m/index.php/Berita/fetch_n_news')
      .map(res => res.json())
      .subscribe(data => 
      {
         this.nBerita = data;   
         //console.log(this.headlineNews);      
      });

  }

    loadNArtikel(){

    this.http.get('http://www.belanegaraku.id/m/index.php/Artikel/fetch_n_articles')
      .map(res => res.json())
      .subscribe(data => 
      {
         this.nArtikel = data;   
         //console.log(this.headlineNews);      
      });

  }


}
