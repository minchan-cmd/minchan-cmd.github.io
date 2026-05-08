// 1. 로그인 상태 전환 함수
function handleLogin() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('user-info').style.display = 'block';
}

function handleLogout() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('user-info').style.display = 'none';
}

// 2. 비디오 모달(팝업) 제어 함수
function openVideo(url) {
    const modal = document.getElementById('videoModal');
    const overlay = document.getElementById('overlay');
    const player = document.getElementById('videoPlayer');

    player.src = url; // 전달받은 유튜브 주소 삽입
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const overlay = document.getElementById('overlay');
    const player = document.getElementById('videoPlayer');

    player.src = ""; // 영상 정지 (주소 비우기)
    modal.style.display = 'none';
    overlay.style.display = 'none';
}
