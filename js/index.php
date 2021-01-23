<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
    <link rel="stylesheet" href="https://dannermm.com/codingacademy/css/style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap" rel="stylesheet">
</head>
<body>
    <nav style="background-color: #5E6973;">
        <h1>JavaScript</h1>
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
            if (el.length == 1) {
                document.getElementsByTagName('main')[0].innerHTML = `<p class="link no__files">No files</p>`
            }
        });
    </script>
</body>
</html>