
const testUserController =  (req,res) =>{
try {
    res.status(200).send({
        success:true,
        message:"test User Data Api"
    })
} catch (error) {
    console.log("Error in test Api",error);
    
}
}


module.exports = {testUserController}
