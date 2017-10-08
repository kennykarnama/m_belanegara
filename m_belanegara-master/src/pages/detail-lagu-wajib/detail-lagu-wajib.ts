import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AudioProvider } from 'ionic-audio';
import { NativeAudio } from '@ionic-native/native-audio';

/**
 * Generated class for the DetailLaguWajibPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-lagu-wajib',
  templateUrl: 'detail-lagu-wajib.html',
})
export class DetailLaguWajibPage {

	public judulLaguWajib : string = '';
	public namaPengarangLagu : string = '';
	public fotoPengarangLagu : string = '';
	public lirikLagu : string = '';
	public riwayatSingkat : string = '';
	public urlLagu : string = '';
	private data : any;

	myTracks : any[];
	allTracks: any[];
  	selectedTrack: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private _audioProvider: AudioProvider,
  	public nativeAudio: NativeAudio) {
  	this.data = navParams.get('data');

  	this.namaPengarangLagu = this.data.nama_pengarang_lagu;
  	this.fotoPengarangLagu = this.data.url_foto;
  	this.lirikLagu = this.data.lirik;
  	this.riwayatSingkat = this.data.riwayat_singkat;
  	this.urlLagu = this.data.url_lagu;
  	this.judulLaguWajib = this.data.judul_lagu_wajib;

  

  	this.myTracks = [
  		{
  			src : this.urlLagu,
  			artist : this.namaPengarangLagu,
  			title : this.judulLaguWajib,
  			art : this.fotoPengarangLagu,
  			preload : 'metadata'
  		}
  	];
  }

 

 


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailLaguWajibPage');
  }

}
