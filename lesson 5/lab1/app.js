const arrayList = [
    {
        img : "img/noidung1.jpg",
        heading : "Cập nhật trò chơi",
        cmt : "VALORANT - Thông Tin Bản Cập Nhật 4.03"
    },
    {
        img : "img/noidung2.jpg",
        heading : "Đội ngũ phát triển",
        cmt : "Loạt Bài Viết Về Trạng Thái Hệ Thống Trong VALORANT - Hành Vi Tiêu Cực Trong Chat & Đàm Thoại"
        
    },
    {
        img : "img/noidung3.jpg",
        heading : "Đội ngũ phát triển",
        cmt : "Hiện Trạng Về Các Đặc Vụ - Yoru Phần 2"
    },
]
function showMain() {

    if (main) {
        for (let item of arryList) {
            main.innerHTML += `
            <div class="conten">
                <a href="#"><img src="${item.img}" alt=""></a>
                <a href="#">
                    <h3>${item.heading}</h3>
                </a>
                <a href="#">${item.cmt}</a>
            </div>
            `;
        }
    }
}
showMain();