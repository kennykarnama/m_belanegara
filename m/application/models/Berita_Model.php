<?php



/**

* Tabel Berita

*/

class Berita_Model extends CI_Model

{

	

	function __construct()

	{

		# code...

		parent::__construct();

	}



	public function fetch_headline_news()

	{

		# code...

		$this->db->where('headline',1);







		$this->db->where('status',1);







		$this->db->order_by('waktu','DESC');







		$query = $this->db->get('berita');







		if($query->num_rows() > 0){







			foreach ($query->result() as $item) {



				# code...



				$data[] = $item;



			}



			return $data;



		}







		else



			return false;

	}



	public function fetch_all_news()

	{

		# code...

		//$this->db->where_not_in('id',$id);







		$query = $this->db->get('berita');







		if($query->num_rows()>0){



			foreach ($query->result() as $item) {



				# code...



				$data[] = $item;



			}







			return $data;



		}



		else



			return false;

	}

	public function fetch_n_news($n)
	{
		# code...
		//$this->db->where_not_in('id',$id);


		$this->db->select('berita.id as `id_berita`, berita.judul as `judul`, berita.waktu as `waktu`, berita.status as `status`, berita.viewer as `viewer`,user.username as `username`,berita.featured_image as `featured_image`,berita.konten as `konten_berita`');



		$this->db->from('berita');




		$this->db->join('user','user.id = berita.penulis');

		$this->db->limit($n);



		//$this->db->order_by('waktu','DESC');



		$query = $this->db->get();



        if ($query->num_rows() > 0) {

            foreach ($query->result() as $row) {

                $data[] = $row;

            }

            return $data;

        }

        return false;
	}

}