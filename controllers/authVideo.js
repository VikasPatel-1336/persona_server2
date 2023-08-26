const fs = require('fs');
const path = require('path');

const VideoStream =async (req,res)=>{
    const range = req.headers.range;
    console.log("range: ",range);
    console.log("1");
    if(!range){
        res.status(400).send("Range undefine");
    }
    console.log("2");
    const videoUrl = path.join(__dirname, '../videos/demo-video.mp4');
    // const videoUrl = "./demo-video.mp4";
    console.log("3");
    const videoSize = fs.statSync(videoUrl).size;
    console.log("size of video : ",videoSize);
    console.log("4");
    const CHUNK_SIZE = 2*(10**6);
    const start = Number(range.replace(/\D/g,"")); // change string to number
    const end = Math.min(start+CHUNK_SIZE,videoSize-1);
    const contentLength = end-start+1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Range": 'bytes',
        "Content-Length" : contentLength,
        "Content-Type":"video/mp4"
    }
    console.log("5");
    res.writeHead(206,headers);
    console.log("6");
    const videoStream = fs.createReadStream(videoUrl,{start,end});
    console.log("7");
    videoStream.pipe(res);
    console.log("8");
};
module.exports={
    VideoStream
}