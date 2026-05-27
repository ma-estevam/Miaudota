<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$host = "localhost";
$db = "pataforma";
$user = "root";
$pass = "";

try {

    $pdo = new PDO(
        "mysql:host=$host;dbname=$db",
        $user,
        $pass
    );

    $sql = "SELECT * FROM pets";

    $stmt = $pdo->prepare($sql);

    $stmt->execute();

    $pets = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($pets);

} catch(PDOException $e){

    echo json_encode([
        "erro" => $e->getMessage()
    ]);

}