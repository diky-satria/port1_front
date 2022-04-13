var Minio = require('minio')

var minioClient = new Minio.Client({
    endPoint: '192.168.9.236',
    port: 9002,
    useSSL: false,
    accessKey: '2KDFCG628LETCSVVTELW',
    secretKey: 'RBfNRzY1CT+5TfTQHIUCT7HQTk3aHjTZs0RAdnXd'
})

// var minioClient = new Minio.Client({
//     endPoint: 'play.min.io',
//     port: 9000,
//     useSSL: true,
//     accessKey: 'Q3AM3UQ867SPQQA43P2F',
//     secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'
// });

// minioClient.listBuckets(function(e, buckets) {
//     if (e) return console.log(e)
//     console.log('buckets :', buckets)
// })

// List all object paths in bucket my-bucketname.
var objectsStream = minioClient.listObjects('p2sdmcarousel', 'ipb-Banner-02.png', true)
objectsStream.on('data', function(obj) {
  console.log(obj)
})
// objectsStream.on('error', function(e) {
//   console.log(e)
// })

// minioClient.get('/list', async (req, res) => {
//     let r = await s3.listObjectsV2({Bucket:BUCKET}).promise()
//     let x = r.Contents.map(item=>item.key)
//     res.send(x)
// })