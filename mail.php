<?php
    // Get username from client
    $name = $_REQUEST["name"];
    // Get email from client
    $email = $_REQUEST["email"];
    // Get phone number from client
    $phone = $_REQUEST["phone"];
    // Get Message from client
    $msg = $_REQUEST["msg"];

    $to = 'contact@indelio.com.ua';
    $subject = "From $name";
    // $message = '<html><body>';
    // $message .= '<h1>Hello, World!</h1>';
    // $message .= '</body></html>';
    $message = '<html><body>';
    $message .= '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">';
    $message .= '<table>';

    $message .= '<tr>';
    $message .= '<td style="font-size: 16px; background-color: #F4F4F4; padding: 5px 20px 5px 5px"><b>Name: </b></td>';
    $message .= '<td style="font-size: 16px; background-color: #F4F4F4; padding: 5px 20px 5px 5px">' . $_REQUEST["name"] . '</td>';
    $message .= '</tr><tr>';

    $message .= '<td style="font-size: 16px; background-color: #F4F4F4; padding: 5px 20px 5px 5px"><b>Email: </b></td>';
    $message .= '<td style="font-size: 16px; background-color: #F4F4F4; padding: 5px 20px 5px 5px">' . $_REQUEST["email"] . '</td>';
    $message .= '</tr><tr>';

    $message .= '<td style="font-size: 16px; background-color: #F4F4F4; padding: 5px 20px 5px 5px"><b>Phone: </b></td>';
    $message .= '<td style="font-size: 16px; background-color: #F4F4F4; padding: 5px 20px 5px 5px">' . $_REQUEST["phone"] . '</td>';
    $message .= '</tr><tr>';

    $message .= '<td style="font-size: 16px; background-color: #F4F4F4; padding: 5px 20px 5px 5px"><b>Message: </b></td>';
    $message .= '<td style="font-size: 16px; background-color: #F4F4F4; padding: 5px 20px 5px 5px">' . nl2br($_REQUEST["msg"]) . '</td>';
    $message .= '</tr>';

    // $message .= '<td><b>Email: </b>' . strip_tags($_REQUEST["email"]) . '</td>';
    // $message .= '<td><b>Phone: </b>' . strip_tags($_REQUEST["phone"]) . '</td>';
    // $message .= '</tr>';
    $message .= '</table>';
    $message .= '</body></html>';
    /*$message = '
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
    <table>
      <tr>
        <td><b>Name: </b>'.$name.'</td>
        <td><b>Email: </b>'.$email.'</td>
        <td><b>Phone: </b>'.$phone.'</td>
      </tr>
    </table>
    ';*/
    $headers = "From: " . strip_tags($_REQUEST["email"]) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($_REQUEST["email"]) . "\r\n";
    $headers .= "CC: contact@indelio.com.ua\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=utf-8\r\n";

    mail ($to, $subject, $message, $headers);
?>
