const fs = require('fs');
const path = require('path');

const VideoStream =async (req,res)=>{
    const range = req.headers.range;
    if(!range){
        res.status(404).send("Range undefine");
    }
    const videoUrl = path.join(__dirname, '../videos/demo-video.mp4');
    
    const videoSize = fs.statSync(videoUrl).size;

    /*
      This code is able to send the video data in chunk , depend upon the req .
      but for now frontend is not able to fetch the video in this manner .
      so i send all the video data in one time {using videoSize assigned to CHUNK_SIZE}.
      (except.... req=0 ....data)
    */
    const CHUNK_SIZE = videoSize;
    // const CHUNK_SIZE = 10**6; // 1MB of data
    const start = Number(range.replace(/\D/g,"")); // change string to number
    
    const end = Math.min(start+CHUNK_SIZE,videoSize-1);
    const contentLength = end-start+1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Range": 'bytes',
        "Content-Length" : contentLength,
        "Content-Type":"video/mp4"
    }
    res.writeHead(206,headers);
    const videoStream = fs.createReadStream(videoUrl,{start,end});
    videoStream.pipe(res);
};

// http://localhost:3000/user/VideoStream
module.exports={
    VideoStream
}