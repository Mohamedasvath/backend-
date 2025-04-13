const express=require("express");
const app=express();
const port=4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/get',(req,res)=>{
    res.send(__dirname+'/index.html')

app.post('/submit',(req,res)=>{
    const data=req.body;
    console.log(data)
    res.send(`
        alret("Form Submitted Successfully!");
        <div style='border: 2px solid black; padding: 20px; text-align: center; font-family: Arial, sans-serif; background-color:rgb(0, 0, 0);'>
            <h1 style='color:blue'><marquee>Form Submitted Successfully!</marquee></h1>
        </div>
    `);
})
})
app.listen(port,()=>{console.log("listening number is"+port)});


app.post('/submit',(req,res)=>{
    const data=req.body;
    console.log(data)
    res.send(`
        <div style='border: 2px solid green; padding: 20px; text-align: center; color:white; background-color:rgb(0, 0, 0); font-family: Arial, sans-serif;'>
            <h1 style='color:green'>Registration successfully</h1>
            <p>Your registration is successful. Thanks for creating an account.</p>
            <button style='padding: 10px 20px; background-color: black; color: white; border: none; border-radius: 5px; cursor: pointer;'><a     href="index.html" style='colour: white' >Back to Home</a></button>
        </div>
    `);
})

app.put('/update',(req,res,)=>{
    
    const { name,email,password } = req.body;
    console.log({ name,email,password});
    
    res.send(`
        < style='text-align: center; border: 2px solid black; padding: 20px; background-color:rgb(0, 0, 0); font-family: Arial, sans-serif;'>
            <h2 style='color: blue'><marquee>welcome! Thanks for create a account</marquee></h2>
            <h1 style='color:green'>Data Updated Successfully!</h1>
            div style= 'color:white'>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password: </strong>${password}</p>
            </>div
          
        </div>
    `);
});

app.delete('/delete', (req, res) => {
    const { name, email, password } = req.body;
    console.log({ name,email,password });
    

    res.send(`
        <div style='text-align: center; border: 2px solid red; padding: 20px; background-color:rgb(42, 13, 13);'>
            <h2 style='color:green'>Hi user!</h2>
            <h1 style='color:red'>Your account deleted successfully!</h1>
            
        </div>
    `);
});
 thankyou..