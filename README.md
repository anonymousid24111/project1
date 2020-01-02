# Mục tiêu 
#### 1.  Sản Phẩm
* Tạo một trang Web bán **SIM** với các chức năng:
     - Đăng nhập 
     - Tìm kiếm SIM 
     - Đăng kí 
     - Thanh toán 
     
#### 2. Mục tiêu học 
- Tìm hiểu thêm một ngôn ngữ mới là REACT.JS
- Có thể tự tạo một trang web bán hàng đơn giản bằng REACRT cho bản thân trong tương lai
- Rèn luyện về lập trình và các công nghệ phần mềm 
# Công nghệ sử dụng
##### 1. Frontend
- HTML
- CSS
- JavaScript
- ReactJS
- Bootstrap
- Node.js
- Visual Studio Code
##### 2. Backend
- Node.js/Express
- MySQL Server
- MongoDB Server
# Hướng Dẫn Cài Đặt
##### 1. Cài đặt Visual Studio Code
*  Download Visual Studio Code theo đường link: https://code.visualstudio.com/download/
*  Download Visual Studio Code về giải nén và thực hiện chạy và cài theo mặc định.
![alt](https://github.com/luyen175638/luyen2107/blob/master/media/a1.png)
##### 2. Cài đặt NodeJS
*  Download NodeJS theo đường link : https://nodejs.org/en/download/
*  Download phiên bản NodeJS phù hợp máy tính của bạn, giải nén và thực hiện chạy và cài theo mặc định.
*  Để kiểm tra xem bạn đã cài đặt thành công hay chưa???
 Mở Command Promt 
 Gõ lần lượt ***node --version*** và ***npm --version*** để xem phiên bản cài đặt
 ![alt](https://github.com/luyen175638/luyen2107/blob/master/media/a2.png)
 ##### 3. Cài đặt MySQL Server
*  Download MySQL Server theo đường link: https://dev.mysql.com/downloads/file/?id=490394
*  Download MySQL Server về giải nén và thực hiện chạy và cài theo mặc định.
![alt](https://github.com/luyen175638/luyen2107/blob/master/media/a9.png)
##### 4. Cài đặt MongoDB Server
*  Download MongoDB Server theo đường link: https://www.mongodb.com/download-center/community
*  Download MongoDB Server về giải nén và thực hiện chạy và cài theo mặc định.
![alt](https://github.com/luyen175638/luyen2107/blob/master/media/a10.png)
# Hướng dẫn sử dụng
***Frontend*** 
### Hướng dẫn chạy Project
Bước 1 : Tải và giải nén folder. Mở cmd dến thư mục Project1/src chạy ***npm install*** để cài đặt các node_modules cần thiết phía server.
Sau đó, cd đến thư mục Project1/src/client chạy ***npm install*** để cài đặt các node_modules cần thiết phía client.

Bước 2 : Mở cmd và tạo cơ sở dữ liệu tên dbProducts trên MySQL Server(user: root và password: a. Nếu đăng nhập với user khác thì sửa lại file src/models/mysql.models.js) và MongoDB Server.

Bước 3 : Thêm dữ liệu vào products trong database dbProducts đã tạo ở Bước 1. MySQL Server lấy dữ liệu ở file src/dataMySql.txt.
MongoDB Server lấy dữ liệu ở file src/dataMongodb.json

Bước 4 : Di chuyển vào **Project1/src** trên cmd

Bước 5 : Gõ **npm start** để chạy project của bạn

 =======> chạy project thành công 
 
### Hướng dẫn sử dụng Web
#### 1. Một trang Web bán SIM gồm : ###
*  **Home** :
     *  Danh mục tìm kiếm sim theo :
         * Nhà mạng
         * Đầu số 
         * Tổng điểm của số
         * Giá tiền
     * Hiển thị danh sách số điện thoại gồm có : 
         * Giá tiền
         * Tổng số
         * Tên mạng 
         * Kiểu sim 
 => Khi đã tìm được số mà mình mong muốn người mua ấn vào mục **Chọn sim**        
 
 ![alt](https://github.com/luyen175638/luyen2107/blob/master/media/a3.png)
*  **Pay** : Thông tin về số tài khoản của chủ cửa hàng

![alt](https://github.com/luyen175638/luyen2107/blob/master/media/a4.png)

* **Guide** : Hướng dẫn về cách mua hàng và cách thanh toán 

![alt](https://github.com/luyen175638/luyen2107/blob/master/media/a5.png)
* **Contact** : Địa chỉ của cửa hàng 

![alt](https://github.com/luyen175638/luyen2107/blob/master/media/a6.png)
* **Login** : Đăng nhập tài khoản 

![alt](https://github.com/luyen175638/luyen2107/blob/master/media/a7.png)
* **Sigup** : Đăng ký tài khoản

![alt](https://github.com/luyen175638/luyen2107/blob/master/media/a8.png)





