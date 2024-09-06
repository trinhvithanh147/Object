// thông tin của một sinh viên: mssv (123), tên Khải, giới tính Nam, diemToan 10
//arrow function sẽ không thể khai báo trong phương thức
let sinhVienKhai = {
    // thuộc tính và giá trị (property và value)
    mssv: 123,
    hoTen: "Quang Khải",
    gioiTinh: true,
    diemToan: 10,

    // phương thức
    tinhDiemTrungBinh : function(){
        let diemTrungBinh = (this.diemToan + this.diemLy + this.diemVan)/3;
        console.log(diemTrungBinh)
    }
}

sinhVienKhai.mssv = "FE140";
sinhVienKhai["diemToan"]= 8;
sinhVienKhai.diemVan= 5;
sinhVienKhai["diemLy"]= 9;
console.log(sinhVienKhai);
sinhVienKhai.tinhDiemTrungBinh()
console.log(sinhVienKhai.mssv)

//tham trị - tham chiếu
let a = 5;
let b ="Hello"
let c = true


//array và object
let soA ={
    thuTu: 1,
    ten: "Năm Văn A"
}
let soB = soA;
console.log(soB == soA);
console.log(soB);
let soC ={
    thuTu: 1,
    ten:"Năm Văn A"
};
console.log(soC == soB);

// speard opeartor (clone: nhân bản) (ES6)

let xeHoi ={
    ten: "Xpander",
    hang: "mitsu",
    mauSac: "cam",
    hienThiXeHoi : function(){
        console.log("Tôi là xe hơi")
    }
};
let xeTai ={...xeHoi, ten: "Volvo", soluong: 10};  // nó sẽ thực hiện công việc ở đây nó sẽ khái báo các thuộc tính và giá trị giống như ii chang ở trên
// xeTai.ten="Volvo"
console.log(xeHoi)
console.log(xeTai)

// Khi sử dụng đối tượng và mảng không sử dụng phép gán vì nó sẽ nằm trung một vùng nhớ nên khi một thằng thay đổi thì những thằng trong vùng nhớ cũng sẽ thay đổi theo

//Clone object(đối tượng) bằng object assign dữ liệu nhận vào gồm một đối tượng nhận dữ liệu và một đối tượng cho dữ liệu
let xeContainer = Object.assign({},xeHoi) //ES5
console.log(xeContainer)

// Sử dụng các phương thức từ JSON (nhận vào các dữ liệu là chuỗi) để clone một object mới
let ObjectString =JSON.stringify(xeHoi); // chuyển đổi 1 đối tượng Object trở thành 1 chưỗi JSON
console.log(ObjectString);
let xeBanTai = JSON.parse(ObjectString); // chuyển đổi 1 chuỗi JSON thành 1 đối tượng
console.log(xeHoi)
console.log(xeBanTai) // Điểm trừ ở JSon : phương thức sẽ không được lưu đi kèm

//Destructuring (ES6)
let monMiXao ={
    tenMon: "Mì xào bò",
    soLuongMon: 5,
    giaTienMon: 14000,
}

// let tenMon = monMiXao.tenMon;
// let soLuongMon = monMiXao.soLuongMon;

let {tenMon, soLuongMon, giaTienMon} = monMiXao
console.log(tenMon);
console.log(soLuongMon)
console.log(giaTienMon)

let arrMonAn =["Mì xào","Hủ tiếu","Cua số me"]
// let miXao  = arrMonAn[0]
// let huTieu = arrMonAn[1]

let [miXao, huTieu, cuaSotMe] = arrMonAn 
console.log(miXao);
console.log(huTieu);
console.log(cuaSotMe);

// Loại bỏ phần tử trùng lặp khỏi mảng
let arrNumber = [14,25,11,14,7,4,2,98,25,35,7]
//Khách hàng tên K cung cấp một mảng các số tự nhiên, yêu cầu các lập trình viên xử lí loại bỏ các phần tử trùng lặp khỏi mảng
let newArrNumber=[];
let phanTuKhongTrungLap={}
for(let i of arrNumber){
    if(!phanTuKhongTrungLap[i]){
        phanTuKhongTrungLap[i]=true;
        newArrNumber.push(i)
    }
}
console.log(phanTuKhongTrungLap)


let sinhVienChamChi = {
    mssv: 124,
    hoTen: "Nguyễn Văn A",
    gioiTinh:true,
    diemToan: 9,
    diemVan: 8,
    diemLy: 10
}
for(let key in sinhVienChamChi){
    console.log(key)
    console.log(sinhVienChamChi[key])
}
//Lớp đối tượng (OOP)
class SinhVien {
    hoTen="";
    email="";
    sdt ="";
    gioiTinh="";
    // phương thức khởi tạo 
    constructor(ten,email,sdt,gioiTinh){
        this.hoTen=ten;
        this.email=email;
        this.sdt=sdt;
        this.gioiTinh=gioiTinh
    }
}
// sử dụng lớp đối tượng để thể hiện và tạo ra một đối tượng mới có các cấu trúc thuộc tính và phương thức giống với lớp đói tượng
let sinhVienThu = new SinhVien("Thư","trinhvidanhthanh@gmail.com","0966048870","Nam")
console.log(sinhVienThu)