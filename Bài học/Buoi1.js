// 1. Let vs const
    // Let: khai báo các biến có thể gán lại được
    // Const: khai báo các biến không thể gán lại được
    // Phạm vi hoạt động: trong block {} đó, không có tính chất hoisting

// 2. Arrow Function
    // Không có hoisting
    // Không có binding this vs super
    // Không có object constructor
    //TH1:
        // a,b: đầu vào => có thể là tham số hoặc 1 function
        function sum (a,b){
            let x = a;
            let y = b;
            total = x + y;
            return total;    
        }
        const add = (x,y) => {
            return x + y;
        }
    // TH2:
        let n_2 = x => {
            return x*2;
        }
    // TH3:
        const create() => {}

// 3. Template literal: cú pháp mới, thao tác nối chuỗi trên nhiều dòng
    let year = new Date().getFullYear() //Lấy ra năm hiện tại
    let hello = `Hello ${year}`;

// 4. Module: Exports & Imports
    // là một cách để tách mã nguồn thành các phần độc lập để sử dụng lại hoặc chia sẻ giữa các ứng dụng khác nhau. 
    // Các module có thể bao gồm các thành phần như biến, hàm, lớp hoặc các đối tượng khác. 
    // Tái sử dụng mã nguồn
    // Phải dc chạy HTTP
        <script src="" type="module"></script> //được hiểu là đoạn mã chia nhỏ ra, 
    // Export: xuất ra các thành phần của module + Import: nhập các thư viện hoặc modules khác
        // Có 2 cách
        // Cách 1: Export theo tên (Name)
        export const PI = 3.14159265359;
        export function double(num) {
            return (num * 2);
        }
        export const MY_VARIABLE = 'This is a variable!';

        import { PI, double, MY_VARIABLE } from './Buoi1-module';
        console.log(PI);
        console.log(double(5));
        console.log(MY_VARIABLE);


        // Cách 2: Export mặc định (Default)
        export default function sayHi(name) {
            console.log(`Hello there, ${name}!`);
          }
        
        import sayHiFunction from './Buoi1-module';

// 5. Spread & Rest Operator
// Spread operator: toán tử, giúp cta "trải thẳng" các phần tử trong array, object
// Thêm bất kỳ thuộc tính và Không cần phải copy lại thuộc tính trong 1 biến cũ,
// Cú pháp "....[biến]"
    const arr1= [1,2,3,4,5];
    console.log(arr1)
    // Ví dụ 1:
    // Không biết số lượng đầu vào
    function test1 (a,b,c, ...args){
        args.forEach(element =>{})
    }
    test1 (1,2,3,4,5,6,7) //a= 1, b= 2, c= 3; args: 4,5,6,7

    function test2(a){
        a.forEach(element => {})
    }
    test2 ([1,2,3,4,5])

    // Ví dụ 2:
    let car ={
        name: "Honda";
        price: 2000;
        title: "Deon";
        note: "sales"; 
    }
    let red_car = {
        // Copy lại thuộc tính car ở trên
        ...car, 
        // Thêm thuộc tính color:
        color: "red";
    }
    let lightRedCar ={
        ...red_car,
        light: true;
    } 

//6. Destructuring
    // Ví dụ 1: Object
    const{name,price} = car;
    if (name === "honda" && price >= 2000){
        alert ("Bạn được khuyến mãi")
    }

    // Ví dụ 2: Object: Mặc định giá trị cho các thuộc tính nếu giá trị không tồn tại trong đối tượng:
    // Khai báo đối tượng
    const myObject = { name: 'John', age: 30 };

    // Sử dụng destructuring với giá trị mặc định cho thuộc tính job nếu không tồn tại
    const { name, age, job = 'developer' } = myObject;

    // Log kết quả
    console.log(name); // Kết quả: 'John'
    console.log(age); // Kết quả: 30
    console.log(job); // Kết quả: 'developer'

    // Ví dụ 3: Array (theo vị trí)
    let cStudents = [10,20,40,60];
    let [sTeam1, sTeam2, sTeam3,sTeam4] = cStudents;
    if (sTeam1 < 0){
        sTeam1 = 0;
        sTeam2 += 10;
    }
    // Ví dụ 4: Array (theo vị trí)
    // Khai báo mảng
    const myArray = ['apple', 'banana', 'orange', 'pear', 'kiwi'];

    // Sử dụng destructuring kết hợp toán tử rest để lấy 2 phần tử đầu và các phần tử còn lại của mảng
    const [fruit1, fruit2, ...rest] = myArray;

    // Log kết quả
    console.log(fruit1); // Kết quả: 'apple'
    console.log(fruit2); // Kết quả: 'banana'
    console.log(rest); // Kết quả: ['orange', 'pear', 'kiwi']

//7. Callback: là 1 hàm (function)
function success (username){
    alert(`${username} + Đăng nhập thành công`)
}
function login(username, password,success){
    const ePassword = encrypt_pass(password);
    const eUsername = encrypt_pass (username);
    //send to Server to Login
    let rs = true;
    success(username);
}
login("mindx", "12345", ()=> {}) //Cách 1
login("mindx", "12345",success) //Cách 2: khai báo function ở trên

// 8. Hoisting: Các loại có tính chất hoisting
/*

*/

const users = ["Thy","Hiếu", "Long"];
const users2 = ["Quyên", ...users];
const users3= [...users, ...users2];


const handleUsers => (user => {
    let newUser = [];
})
const uniqueUsers = users3.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueUsers); // ["Thy", "Hiếu", "Long", "Quyên"]





// Viết function nhận vào ngày tháng năm sinh, sau đó trả về tuổi của người dung theo dạng: Tuổi của bạn là: 22 năm, 3 tháng, 20 ngày
let gettingAge = (str) => {
    const dateTime = new Date(str).getTime();
    const today = new Date().getTime();

    const year = ((today - dateTime)/(365*24*60*60*1000)).toFixed(0)
    const month = ((today - dateTime)/(30*24*60*60*1000)).toFixed(0)
    const day = ((today - dateTime)/(24*60*60*1000)).toFixed(0)

    console.log (`${year} năm, ${month} tháng, ${day - (month* 30)}ngày`);
}
gettingAge();

function getAge(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString);
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    const year = age;
    const month = monthDiff < 0 ? monthDiff + 12 : monthDiff;
    const dayDiff = today.getDate() - birthDate.getDate();
    const day = dayDiff < 0 ? dayDiff + 30 : dayDiff;
  
    return `Tuổi của bạn là: ${year} năm, ${month} tháng và ${day} ngày`;
  }
  console.log(getAge('1995-09-09')); // "Tuổi của bạn là: 28 năm, 8 tháng và 28 ngày"





