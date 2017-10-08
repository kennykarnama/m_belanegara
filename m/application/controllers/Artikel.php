<?php



header('Access-Control-Allow-Origin: *');



/**

* Artikel

*/

class Artikel extends CI_Controller

{

	

	function __construct()

	{

		# code...

		parent::__construct();



		$this->load->model('Artikel_Model');

	}



	public function fetch_all_articles()

	{

		# code...

		$list_articles = $this->Artikel_Model->fetch_all_articles();



		echo json_encode($list_articles);

	}

	public function fetch_n_articles()
	{
		# code...
		$list_of_n_articles = $this->Artikel_Model->fetch_n_articles(3);

		echo json_encode($list_of_n_articles);
	}

}