app.use(express.static(path.resolve(__dirname, '../build')));
// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname, '../build','index.html'))
//   })