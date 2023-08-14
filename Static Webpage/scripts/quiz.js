let isSelected = false;
let radio = document.getElementsByName('answers');
function enableButton() {
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            isSelected = true;
            break;
        }
    }
    if (isSelected == true) {
        document.getElementById('submitBtn').disabled = false;
    }
}
function checkAnswer() {
    document.getElementById('submitBtn').disabled = true;
    let msg = ['Public clouds provide their services on servers and storage on the Internet. These are operated by third-party companies, who handle and control all the hardware, software, and the general infrastructure. Clients access services through accounts that can be accessed by just about anyone.',
	'Private clouds are reserved for specific clientele, usually one business or organization. The firm\'s data service center may host the cloud computing service. Many private cloud computing services are provided on a private network.', 'Hybrid clouds are, as the name implies, a combination of both public and private services. This type of model allows the user more flexibility and helps optimize the user\'s infrastructure and security.', ''];
    let reason = "";
    for (var i = 0; i < radio.length; i++) {
        radio[i].disabled = true;
    }
    if (radio[0].checked) {
        document.getElementById('exampleModalLabel').innerHTML = '<i class="bi bi-check2-circle"></i> Correct';
        document.getElementById('exampleModalLabel').style.color = "green";
        document.getElementById('msg').innerHTML = "That’s correct! " + msg[0];
    }
    else {
        document.getElementById('exampleModalLabel').innerHTML = '<i class="bi bi-exclamation-circle"></i> Incorrect';
        document.getElementById('exampleModalLabel').style.color = "red";
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked && i != 0) {
                reason = msg[i];
                break;
            }
        }
        document.getElementById('msg').innerHTML = "That’s not quite right. " + reason;
    }
}