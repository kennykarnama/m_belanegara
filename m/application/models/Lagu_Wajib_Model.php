<?php

/**
* Tabel Lagu Wajib
*/
class Lagu_Wajib_Model extends CI_Model
{
	
	function __construct()
	{
		# code...
		parent::__construct();
	}

	public function fetch_all_lagu_wajib()
	{
		# code...
		
		$this->db->select('*');



		$this->db->from('lagu_wajib');



		$this->db->join('pengarang_lagu','pengarang_lagu.id_pengarang_lagu = lagu_wajib.pengarang_lagu');



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