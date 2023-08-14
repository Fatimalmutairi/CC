const player1 = new Plyr(document.getElementById('player1'));
player1.source = {
    type: 'video',
    sources: [
        {
            src: 'https://youtu.be/3l4fQoZh2DE',
            provider: 'youtube',
        },
    ],
};

document.getElementById('myIframe').style.display = "none";
// to show the subheadings in the first list
function showOrHideMenu1() {
    let menu = document.getElementById("submenu1");
    let icon = document.getElementById("collectionIcon");
    if (menu.style.display === "none") {
        menu.style.display = "block";
        icon.className = "bi-collection";
    }
    else {
        menu.style.display = "none";
        icon.className = "bi-collection-fill";
    }
}

// to show the subheadings in the second list
function showOrHideMenu2() {
    let menu = document.getElementById("submenu2");
    let icon = document.getElementById("collectionIcon2");
    if (menu.style.display === "none") {
        menu.style.display = "block";
        icon.className = "bi-collection";
    }
    else {
        menu.style.display = "none";
        icon.className = "bi-collection-fill";
    }
}

// handle the lock icon for menu
function sideMenu() {
    let sideMenu = document.getElementById("sideMenu");
    let icon = document.getElementById("lock");
    if (icon.className === "bi bi-unlock-fill") {
        icon.className = "bi bi-lock-fill";
        sideMenu.style.height = "45%";
        sideMenu.style.overflow = "auto";
    }
    else {
        sideMenu.style.overflow = "auto";
        sideMenu.style.height = "auto";
        icon.className = "bi bi-unlock-fill"
    }
    sideMenu.style.overflowX = "hidden";
}

// handle continue button
function goNext() {
    var ele = document.getElementsByClassName('active');
    if (ele[0].id == "20") {
        $('#continueBtn').hide();
    }
    let next = parseInt(ele[0].id) + 1;
    $('#' + next).click();
}

// handle the first list items
function selectedItem(item) {
	
    switch (item) {
		
        case "vid1":
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('videos').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/3l4fQoZh2DE',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("1").classList.add("active");
            loading(1, 'video');
            deselecteItems(1);
            break;

        case "vid2":
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('videos').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/ZSDxe7iBgag',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("2").classList.add("active");
            loading(2, 'video');
            deselecteItems(2);
            break;

        case "vid3":
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('videos').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/M988_fsOSWo',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("3").classList.add("active");
            loading(3, 'video');
            deselecteItems(3);
            break;

        case "vid4":
            player1.stop();
            document.getElementById('videos').style.display = "none";
            document.getElementById('myIframe').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById("myIframe").src = "quiz.html";
            document.getElementById("4").classList.add("active");
            loading(4, 'quiz');
            deselecteItems(4);
            break;

        case "vid5":
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('videos').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/oRZ0QGlW7KI',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("5").classList.add("active");
            loading(5, 'video');
            deselecteItems(5);
            break;

        case "vid6":
		    player1.stop();
            document.getElementById('videos').style.display = "none";
            document.getElementById('myIframe').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById("myIframe").src = "quiz.html";
            loading(6, 'quiz');
            deselecteItems(6);
            break;

        case "vid7":
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('videos').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/boY2i6qhPr8',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("7").classList.add("active");
            loading(7, 'video');
            deselecteItems(7);
            break;

        case "vid8":
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('videos').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/n24OBVGHufQ',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("8").classList.add("active");
            loading(8, 'video');
            deselecteItems(8);
            break;

        case "vid9":
		player1.stop();
            document.getElementById('videos').style.display = "none";
            document.getElementById('myIframe').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById("myIframe").src = "quiz.html";
            loading(9, 'quiz');
            deselecteItems(9);
            break;

        case "vid10":
            player1.stop();
            document.getElementById("10").classList.add("active");
            document.getElementById('videos').style.display = "none";
            document.getElementById('myIframe').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById("myIframe").src = "servicelocations.html";
            loading(10, 'game');
            deselecteItems(10);
            break;

        case "vid11":
            player1.stop();
            document.getElementById("11").classList.add("active");
            document.getElementById('videos').style.display = "none";
            document.getElementById('myIframe').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById("myIframe").src = "CCArchitecture.html";
            loading(11, 'game');
            deselecteItems(11);
            break;

        case "vid12":
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('videos').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/nTSp7nngSM8',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("12").classList.add("active");
            loading(12, 'video');
            deselecteItems(12);
            break;

        case "vid13":
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById('videos').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/9kcyEiTkC2E',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("13").classList.add("active");
            loading(13, 'video');
            deselecteItems(13);
            break;
case "vid131":
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById('videos').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/dUuKi7kMNg4',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("13").classList.add("active");
            loading(13, 'video');
            deselecteItems(13);
            break;

        case "vid14":
		player1.stop();
            document.getElementById('videos').style.display = "none";
            document.getElementById('myIframe').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById("myIframe").src = "quiz.html";
            loading(14, 'quiz');
            deselecteItems(14);
            break;

        case "vid15":
            player1.stop();
            document.getElementById("15").classList.add("active");
            document.getElementById('videos').style.display = "none";
            document.getElementById('myIframe').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById("myIframe").src = "computingtypes.html";
            loading(15, 'game');
            deselecteItems(15);
            break;

        case "vid16":
            player1.stop();
            document.getElementById("16").classList.add("active");
            document.getElementById('videos').style.display = "none";
            document.getElementById('myIframe').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById("myIframe").src = "selection.html";
            loading(16, 'game');
            deselecteItems(16);
            break;

        case "vid17":
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById('videos').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/M988_fsOSWo',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("17").classList.add("active");
            loading(17, 'video');
            deselecteItems(17);
            break;

        case "vid18":
		player1.stop();
            document.getElementById('videos').style.display = "none";
            document.getElementById('myIframe').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById("myIframe").src = "quiz.html";
            loading(18, 'quiz');
            deselecteItems(18);
            break;

        case "vid19":
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('videos').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/IS5wMv_ILXE',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("19").classList.add("active");
            loading(19, 'video');
            deselecteItems(19);
            break;

        case "vid20":
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('continueBtn').style.display = "none";
            document.getElementById('videos').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/6hloc6xhpa0',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("20").classList.add("active");
            loading(20, 'video');
            deselecteItems(20);
            break;
    }
}

function deselecteItems(order) {
    for (let i = 1; i <= 20; i++) {
        if (i == order) continue;
        document.getElementById(i).classList.remove("active");
    }

}

function loading(id, dis) {
    document.getElementById(id).getElementsByClassName("icon")[0].classList.add("spinner-border");
    if (dis == 'video') {
        document.getElementById(id).getElementsByClassName("icon")[0].classList.remove("bi-play-circle");
        player1.on('ready', () => {
            document.getElementById(id).getElementsByClassName("icon")[0].classList.remove("spinner-border");
            document.getElementById(id).getElementsByClassName("icon")[0].classList.add("bi-play-circle");
            $('html, body').animate({ scrollTop: '0px' }, 500);
        });
    }
    else if (dis == 'quiz') {
        document.getElementById(id).getElementsByClassName("icon")[0].classList.remove("bi-question-circle");
        $("#myIframe").on("load", function () {
            document.getElementById(id).getElementsByClassName("icon")[0].classList.remove("spinner-border");
            document.getElementById(id).getElementsByClassName("icon")[0].classList.add("bi-question-circle");
            $('html, body').animate({ scrollTop: '0px' }, 500);
        });
    }
    else {
        document.getElementById(id).getElementsByClassName("icon")[0].classList.remove("bi-binoculars");
        $("#myIframe").on("load", function () {
            document.getElementById(id).getElementsByClassName("icon")[0].classList.remove("spinner-border");
            document.getElementById(id).getElementsByClassName("icon")[0].classList.add("bi-binoculars");
            $('html, body').animate({ scrollTop: '0px' }, 500);
        });
    }
}