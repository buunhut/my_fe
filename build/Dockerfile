FROM nginx

WORKDIR /usr/share/nginx/html

COPY . .


# docker build ./build -t img-react
# docker run -d -p 3100:80 --name cons-react img-react 

# Sử dụng một hình ảnh Nginx chính thống làm cơ sở
# FROM nginx

# # Đặt thư mục làm việc trong container
# WORKDIR /usr/share/nginx/html

# # Sao chép tất cả các tệp và thư mục từ thư mục gốc của dự án React vào thư mục làm việc trong container
# COPY build/ .

# Nginx mặc định sẽ lắng nghe trên cổng 80, không cần phải đặt lại

# CMD để khởi động Nginx khi container được chạy (không cần đặt lại vì hình ảnh Nginx chính thống đã xử lý nó)
# CMD ["nginx", "-g", "daemon off;"]