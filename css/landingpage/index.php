<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <link rel="stylesheet" href="https://dannermm.com/codingacademy/css/style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap" rel="stylesheet">
</head>
<body>
    <nav style="background-color: #F0CF65">
        <h1>Landing Page</h1>
    </nav>
    <main>
        <?php
            $scanned_directory = array_diff(scandir('./'), array('..', '.'));
            foreach($scanned_directory as $file){
                echo'<a href="'.$file.'" class="link">'.$file.'</a>';
            }
        ?>
    </main>
    <script>
        let el = document.querySelectorAll('a');
        el.forEach(element => {
            if (element.innerText == 'index.php') {
                element.remove();
            }
        });
    </script>
</body>
</html>