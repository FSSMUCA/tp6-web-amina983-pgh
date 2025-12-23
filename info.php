<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Informations PHP</title>
    <style>
        body { font-family: Arial; background: #f4f6f8; padding: 20px; }
        .card { background: white; padding: 20px; border-radius: 10px; width: 400px; }
    </style>
</head>
<body>

<div class="card">
<?php
$etablissement = "Faculté des Sciences";
$module = "Développement Web";
$annee = 2024;

$a = 10;
$b = 5;

$addition = $a + $b;
$multiplication = $a * $b;

echo "<h2>Informations du module</h2>";
echo "<p><strong>Établissement :</strong> $etablissement</p>";
echo "<p><strong>Module :</strong> $module</p>";
echo "<p><strong>Année :</strong> $annee</p>";

echo "<h3>Calculs PHP</h3>";
echo "<p>$a + $b = $addition</p>";
echo "<p>$a × $b = $multiplication</p>";
?>
</div>

</body>
</html>
