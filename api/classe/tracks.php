<?php
require_once('connect.php');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
class Tracks extends connect{

    private $search;

    public function __construct(){
        parent::__construct();
    }

    public function setSearch ($search) {
        $this->search = htmlspecialchars(strip_tags(ucfirst(strtolower($search))));
    }

    public function getSearch () {
        return $this->search;
    }

    public function search_tracks () {
        $sql1 = "SELECT `name`
        from tracks
        WHERE `name` LIKE :search
        LIMIT 10;";
    
        $bV = $this->connection->prepare($sql1);
        $bV->bindValue('search', $this->search."%", PDO::PARAM_STR);
        $bV->execute();
        $res = $bV->fetchAll(PDO::FETCH_ASSOC);
    
        foreach ($res as $row) {
            $data[] = array(
                "name" =>   $row["name"]
            );
        }
        if (count($res) > 0) {
            return $data;
        } else {
            $data = ["msg" => "no tracks found"];
            return $data;
        }
    }
}

$tracks = new Tracks();
if (isset($_GET["search"]) && strlen($_GET["search"]) != 0) {
    $search = $_GET["search"];
    $tracks->setSearch($search);
    $data = $tracks->search_tracks();
}
echo json_encode($data);