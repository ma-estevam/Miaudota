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

    $nome = $_GET['nome'] ?? '';
    $idade = $_GET['idade'] ?? '';
    $raca = $_GET['raca'] ?? '';
    $tipo = $_GET['tipo'] ?? '';
    $descricao = $_GET['descricao'] ?? '';
    $imagem = $_GET['imagem'] ?? '';

    $sql = "INSERT INTO pets
    (nome, idade, raca, tipo, descricao, imagem)

    VALUES
    (:nome, :idade, :raca, :tipo, :descricao, :imagem)";

    $stmt = $pdo->prepare($sql);

    $stmt->execute([

        'nome' => $nome,
        'idade' => $idade,
        'raca' => $raca,
        'tipo' => $tipo,
        'descricao' => $descricao,
        'imagem' => $imagem

    ]);

    echo json_encode([
        "mensagem" => "Pet cadastrado!"
    ]);

} catch(PDOException $e){

    echo json_encode([
        "erro" => $e->getMessage()
    ]);

}