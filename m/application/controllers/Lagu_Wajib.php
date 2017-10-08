<?php

header('Access-Control-Allow-Origin: *');

/**
* Lagu Wajib
*/
class Lagu_Wajib extends CI_Controller
{
	
	function __construct()
	{
		# code...
		parent::__construct();

		$this->load->model('Lagu_Wajib_Model');
	}

	public function fetch_all_lagu_wajib()
	{
		# code...
		$list_lagu_wajib = $this->Lagu_Wajib_Model->fetch_all_lagu_wajib();

		echo json_encode($list_lagu_wajib);
	}
}