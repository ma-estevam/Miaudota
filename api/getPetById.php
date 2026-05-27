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

    $id = $_GET['id'] ?? null;

    $sql = "SELECT * FROM pets WHERE id = :id";

    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        'id' => $id
    ]);

    $pet = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($pet);

} catch(PDOException $e){

    echo json_encode([
        "erro" => $e->getMessage()
    ]);

}