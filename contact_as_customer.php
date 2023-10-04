<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Basic Page Needs
    ================================================== -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Specific Meta
    ================================================== -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="keyword" content="winstar, construction Company, construction, building, Real Estate Company, Construction Development, construction consultancy,">
    <meta name="description" content="Winstar Construction Ltd.">
    <meta name="author" content="IT TRANSMIT LTD.">

    <!-- Site Title
    ================================================== -->
    <title>Contact Winstar Construction Ltd.</title>

    <!-- Site Favicon
    ================================================== -->
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon/favicon-16x16.png">
    <link rel="manifest" href="assets/images/favicon/site.webmanifest">
    <link rel="shortcut icon" href="assets/images/favicon/favicon.ico" >

    <!-- Fonts
    ================================================== -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- All CSS Here
    ================================================== -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/fontAwesome5Pro.css">
    <link rel="stylesheet" href="assets/css/animate.css">
    <link rel="stylesheet" href="assets/css/swiper-bundle.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body >

    <main class="contact_message_wrapper">   
        <div class="container text-center">        
            <div class="text-content">    
                <?php
                    /*
                    This first bit sets the email address that you want the form to be submitted to.
                    You will need to change this value to a valid email address that you can access.
                    */
                    $webmaster_email = "info@winstarconstruction.com";

                    $name = $_REQUEST['customer_name'] ;
                    $customerProfession = $_REQUEST['customer_profession'] ;
                    $customeremail = $_REQUEST['customer_email'] ;
                    $customerPhone = $_REQUEST['customer_phone'] ;
                    $preferredLocation = $_REQUEST['customer_preferred_location'] ;
                    $preferredSize = $_REQUEST['preferred_size'] ;
                    $carparking = $_REQUEST['car_parking_requirement'] ;                   
                    $message = $_REQUEST['customer_msg'] ;
                    $msg =  "Customer Name: " . $name . "\r\n" . 
                            "Customer Email: " . $customeremail . "\r\n" . 
                            "Customer Phone: " . $customerPhone . "\r\n" . 
                            "Customer Profession: " . $customerProfession . "\r\n" . 
                            "Customer Preferred Location: " . $preferredLocation . "\r\n" . 
                            "Customer Preferred Size: " . $preferredSize . "\r\n" . 
                            "Car parking Requirement: " . $carparking . "\r\n" . 
                            "Customer Message: " . $message ;

                    function isInjected($str) {
                        $injections = array('(\n+)',
                            '(\r+)',
                            '(\t+)',
                            '(%0A+)',
                            '(%0D+)',
                            '(%08+)',
                            '(%09+)'
                        );
                        $inject = join('|', $injections);
                        $inject = "/$inject/i";
                        if(preg_match($inject,$str)) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    // If the form fields are empty, redirect to the error page.
                    if (empty($name) || empty($customeremail) || empty($customerPhone) || empty($preferredLocation) || empty($message)) {
                        ?>
                            <h1 class="font-bold my-4">Oops!</h1>
                            <p>Please ensure you have completed all fields are required before submitting the form. </p>
                        <?php
                    }
                    elseif (isInjected($name) || isInjected($customeremail) || isInjected($message)) {
                        ?>
                            <h1 class="font-bold my-4">Oops!</h1>
                            <p>Please ensure you have completed all fields before submitting the form. </p>
                        <?php
                    }
                    // If we passed all previous tests, send the email then redirect to the thank you page.
                    else {
                        mail( "$webmaster_email", "Message from Customer Contact Form", $msg );
                        ?>
                            <h1 class="font-bold my-4">Thanks for Contacting Winstar Constraction Ltd.</h1>
                            <p>We appreciate that you took the time to send us message. Your Message has been sent to the Admin Panel.</p>
                            <p>We are getting back to you soon.</p>
                            <a href="index.html" class="btn-default">Back to Home</a>
                        <?php
                    }
                ?>
            </div>
        </div>        
    </div>

    <!-- All The JS Files
    ================================================== -->
    <script src="assets/js/preloader.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery-3.6.0.min.js"></script>
    <script src="assets/js/wow.min.js"></script>
    <script src="assets/js/swiper-bundle.min.js"></script>
    <script src="assets/js/isotope.pkgd.js"></script>
    <script src="assets/js/script.js"></script>
</body>
</html>