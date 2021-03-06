$(document).ready(() => {
  //비로그인 상태에서 보여줄 헤더
  let noHeader = `<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <a onclick="location.href='/view/'" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <img src="https://elice.io/static/dc6054e07cd72edccb4c2f0ceccedb97/53925/elice_logo.webp"/>
        </svg>
    </a>
    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/view/index.html" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="/view/posts/list.html" class="nav-link px-2 link-dark">List</a></li>

    </ul>
    <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2" onclick="location.href='/view/user/login.html'">Login</button>
        <button type="button" class="btn btn-primary" onclick="location.href='/view/user/signUp.html'">Sign-up</button>
    </div>
</header>`;

  let userName = sessionStorage.getItem("name");
  // 로그인 상태에서 보여줄 헤더
  let yesHeader = `<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
  <a onclick="location.href='/view/'" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
          <img src="https://elice.io/static/dc6054e07cd72edccb4c2f0ceccedb97/53925/elice_logo.webp"/>
      </svg>
  </a>
  <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><a href="/view/index.html" class="nav-link px-2 link-secondary">Home</a></li>
      <li><a href="/view/posts/list.html" class="nav-link px-2 link-dark">List</a></li>

  </ul>
  <div class="col-md-3 text-end">
      <span class="user-name" style="font-weight:bold">
        <div class="btn-group">
        <button type="button" class="btn btn-secondary">
      ${userName}님</button>
        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu" style="">
          <li><a class="dropdown-item" onclick="location.href='/view/user/myPage.html'" >마이페이지</a></li>
          <li><a class="dropdown-item" href="#">내 글</a></li>
        </ul>
      </div></span>
      <button type="button" class="btn btn-outline-danger me-2" onclick="logout()">Logout</button>
  </div>
</header>`;

  let status = $.cookie("accessToken");
  //   let userEmail = $.cookie("email");

  if (status) {
    $(".container").prepend(yesHeader);
  } else {
    $(".container").prepend(noHeader);
  }
});

// logout() 이벤트 핸들러

const logout = () => {
  $.removeCookie("accessToken", { path: "/" });
  location.href = "/view/user/login.html";
};
