
var serverdata = {age:20,name:"srinu"}
const[loggedin,setloggedin] = useState(false)
 const LoginUser = ()=>{

 
 localStorage.setItem("user",JSON.stringify(serverdata))
 window.location.replace("/account");
 setloggedin(true)

}

useEffect(()=>{
 if(localStorage.getItem("user")){
 console.log("user loggedin")
 setloggedin(true)



}
else{
 console.log("user not loggedin")
 setloggedin(false)

}




 },[localStorage.getItem("user"),loggedin]
)