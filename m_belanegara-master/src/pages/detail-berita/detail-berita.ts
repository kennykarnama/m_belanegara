import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailBeritaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-berita',
  templateUrl: 'detail-berita.html',
})
export class DetailBeritaPage {

	public judulBerita : string = '';
	public featured_image :string = '';
	public waktu :string = '';
	public konten : string = '';
	private data : any;
  public headerTitle : string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.data = navParams.get('data');
    this.headerTitle = navParams.get('title');
  	this.judulBerita = this.data.judul;
  	this.waktu = this.data.waktu;
  	this.konten = this.data.konten;
  	this.featured_image = this.data.featured_image;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailBeritaPage');
  }

}
