<?php



/**

* Tabel Artikel

*/

class Artikel_Model extends CI_Model

{

	

	function __construct()

	{

		# code...

		parent::__construct();

	}



	public function fetch_all_articles()

	{

		# code...

		

		$this->db->select('*');







		$this->db->from('artikel');







		$this->db->where('is_article_approved',1);







		//$this->db->where('kategori_artikel',$id_category);







		$this->db->join('user','artikel.author = user.id');







		$this->db->join('kategori_artikel','artikel.kategori_artikel = kategori_artikel.id_kategori_artikel');







		$this->db->order_by('waktu','DESC');







		$query = $this->db->get();







		if($query->num_rows()>0){



			foreach ($query->result() as $item) {



				# code...



				$data[] = $item;







				



			}







			return $data;



		}



		return false;

	}

	public function fetch_n_articles($n)

	{
		# code...

			# code...
		
		$this->db->select('*');



		$this->db->from('artikel');



		$this->db->where('is_article_approved',1);



		//$this->db->where('kategori_artikel',$id_category);



		$this->db->join('user','artikel.author = user.id');



		$this->db->join('kategori_artikel','artikel.kategori_artikel = kategori_artikel.id_kategori_artikel');



		$this->db->order_by('waktu','DESC');

		$this->db->limit($n);



		$query = $this->db->get();



		if($query->num_rows()>0){

			foreach ($query->result() as $item) {

				# code...

				$data[] = $item;



				

			}



			return $data;

		}

		return false;
	}

}