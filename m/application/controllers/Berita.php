<?php



header('Access-Control-Allow-Origin: *');



/**

* Berita

*/

class Berita extends CI_Controller

{

	

	function __construct()

	{

		# code...

		parent::__construct();



		$this->load->model('Berita_Model');



	}



	public function fetch_headline_news()

	{

		# code...

		$list_headline_news = $this->Berita_Model->fetch_headline_news();



		echo json_encode($list_headline_news);

	}



	public function fetch_all_news()

	{

		# code...

		$list_news = $this->Berita_Model->fetch_all_news();



		echo json_encode($list_news);

	}

	public function fetch_n_news()
	{
		# code...
		$list_of_n_news = $this->Berita_Model->fetch_n_news(3);

		echo json_encode($list_of_n_news);
	}

}

